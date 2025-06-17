import { NextRequest, NextResponse } from "next/server";
import puppeteer from "puppeteer";
import chromium from "@sparticuz/chromium";

export async function POST(req: NextRequest) {
    if (req.method !== 'POST') {
        return NextResponse.json({ message: 'Method Not Allowed' }, { status: 405 });
      }
    
      const { url } = await req.json();
    
      if (!url) {
        return NextResponse.json({ message: 'URL이 제공되지 않았습니다.' }, { status: 400 });
      }
    
      let browser = null;

    try {
        browser = await puppeteer.launch({
            args: [
                ...chromium.args,
                "--hide-scrollbars",
                "--disable-web-security",
                "--no-sandbox", // 당연히 샌드박스를 꺼놓기에 보안상유의!!
                "--disable-setuid-sandbox",
                "--disable-gpu", // 일부 환경에 GPU문제 방지
            ],
            defaultViewport: chromium.defaultViewport, 
            executablePath: await chromium.executablePath(),
            headless: true,
        });
        const page = await browser.newPage();
        // 페이지 접속 네트워크 활동이 없을때 까지 기다림
        console.log("Navigating to URL:", url);
        await page.goto(url, { waitUntil: "load" , timeout: 120000}); // 타임아웃 120초

        // 중요 콘텐츠 렌더링 대기
        // 특정 CSS 셀렉터 자바 스크립트에서 동적으로 로드되는 콘텐츠가 확실히 렌더링 되도록한다.
        const mainContentSelector = 'h1.font-bold'; 
        console.log('Waiting for selector:' + mainContentSelector);
        await page.waitForSelector(mainContentSelector, { timeout: 60000 }); // 1분 내에 나타나지 않으면 타임아웃

    // 페이지의 모든 동적 콘텐츠 (스크롤 섹션, 이미지 등)가 로드되도록 스크롤합니다.
    console.log('Starting full page scroll to load all content...');
    await page.evaluate(async () => {
        await new Promise(resolve => {
            let totalHeight = 0;
            const distance = 50; // 한 번에 스크롤할 픽셀 양
            const scrollDelay = 150; // 스크롤 간 대기 시간 (밀리초)
            const maxScrollAttempts = 100; // 최대 스크롤 시도 횟수 (무한 루프 방지)
            let scrollAttempts = 0;

            const timer = setInterval(() => {
                const scrollHeight = document.body.scrollHeight;
                window.scrollBy(0, distance); // 아래로 스크롤
                totalHeight += distance;
                scrollAttempts++;

                // 더 이상 스크롤할 내용이 없거나, 너무 많이 스크롤하면 중지
                if (totalHeight >= scrollHeight || scrollAttempts >= maxScrollAttempts) {
                    clearInterval(timer);
                    resolve(null);
                }
            }, scrollDelay);
        });
        console.log('Finished scrolling down.');

        // 모든 콘텐츠가 로드된 후, 다시 맨 위로 스크롤합니다.
        // PDF 캡처는 보통 페이지 상단부터 시작하므로, 맨 위로 돌아가는 것이 중요합니다.
        window.scrollTo(0, 0);
        await new Promise(resolve => setTimeout(resolve, 3000)); // 맨 위로 스크롤 후 안정화 대기
        console.log('Scrolled back to top.');
    });
        
    // --- 동적인 요소 무시/제어 로직 추가 시작 ---
    console.log('Disabling/Freezing dynamic elements for PDF generation...');
    await page.evaluate(() => {
        // 1. Framer Motion 애니메이션 중지 및 최종 상태로 고정:
        // Framer Motion은 `motion-element`와 같은 내부 클래스를 사용하거나,
        // `style` 속성에 `transform` 등을 직접 조작합니다.
        // 모든 `motion.div` 요소는 일반적으로 `[data-framer-component-type="motion"]` 또는 유사한 속성을 가질 수 있습니다.
        // TailwindCSS와 함께 사용되면 `opacity`나 `transform`과 같은 인라인 스타일이 적용될 수 있습니다.

        // 모든 `motion.div` 요소를 찾아서 애니메이션 관련 속성을 제거하거나 고정합니다.
        // 이 방법은 `motion.div`가 적용된 모든 요소에 대해 적용됩니다.
        document.querySelectorAll<HTMLElement>('[style*="opacity"], [style*="transform"]').forEach(el => {
            // Framer Motion 애니메이션이 적용된 요소를 더 정확히 식별하기 위해
            // 해당 컴포넌트의 특정 클래스나 data-속성을 확인하는 것이 좋습니다.
            // 예: `<motion.div className="animated-hero-text" ...>`
            // if (el.classList.contains('animated-hero-text') || el.classList.contains('animated-background-element')) {
            //     el.style.animation = 'none';
            //     el.style.transition = 'none';
            //     el.style.transform = 'none';
            //     el.style.opacity = '1';
            //     // 필요한 경우 다른 CSS 속성도 초기화
            // }

            // 일반적인 접근: 모든 동적 스타일 속성을 즉시 최종 상태로 고정
            // 이 방법은 과격할 수 있으나, 애니메이션 중인 요소를 고정하는 데 효과적입니다.
            el.style.animation = 'none';
            el.style.transition = 'none';
            el.style.transform = 'none'; // transform 속성 초기화 (움직임 방지)
            el.style.opacity = '1';     // opacity를 1로 강제 (사라지는 애니메이션 방지)
        });

        // 2. Fixed 된 요소의 위치 고정 (스크롤 시 문제 방지)
        // Fixed Navigation Bar 같은 요소가 스크롤 시 PDF에서 문제될 수 있습니다.
        // `position: fixed`를 `position: absolute`로 바꾸고 top을 0으로 고정합니다.
        const fixedElements = document.querySelectorAll<HTMLElement>('.fixed');
        fixedElements.forEach(el => {
            el.style.position = 'absolute';
            el.style.top = '0';
            el.style.left = '0';
            el.style.right = '0';
            el.style.width = '100%'; // 너비도 고정
        });


        // 3. 스크롤 인디케이터나 기타 불필요한 UI 숨기기 (이전과 동일)
        const navBar = document.querySelector('nav.fixed');
        if (navBar) navBar.style.display = 'none'; // 이미 위에서 fixed 처리 했지만, 확실히 숨기려면 이 코드도 유효

        const pdfButtons = document.querySelectorAll('button');
        pdfButtons.forEach(btn => {
            if (btn.textContent?.includes('PDF Export') || btn.textContent?.includes('Download Portfolio')) {
                (btn as HTMLElement).style.display = 'none';
            }
        });
        const scrollIndicator = document.querySelector('.absolute.bottom-8');
        if (scrollIndicator) (scrollIndicator as HTMLElement).style.display = 'none';

        // 4. `ScrollSection` 컴포넌트가 영향을 미치는 부분 처리 (필요 시)
        // `ScrollSection`은 `whileInView` 등을 통해 콘텐츠를 동적으로 보이게 합니다.
        // `viewport={{ once: true }}`가 되어 있다면 한 번 보이면 고정되지만,
        // 애니메이션 자체는 여전히 재생될 수 있습니다.
        // 이를 확실히 고정하려면 `opacity: 1; transform: none;` 등을 강제해야 합니다.
        // 예: ScrollSection 내부의 `motion.div`에 접근하여 스타일 강제
        document.querySelectorAll('.skill-category-item').forEach(el => { // 예를 들어 Skills 섹션의 개별 아이템에 클래스를 추가했다면
             (el as HTMLElement).style.opacity = '1';
             (el as HTMLElement).style.transform = 'none';
             (el as HTMLElement).style.transition = 'none';
             (el as HTMLElement).style.animation = 'none';
        });

    });

        console.log('Generating PDF...');
        const pdfBuffer = await page.pdf({
            format: "A4",
            printBackground: true, //배경 색상 및 이미지 출력
            margin: {
                top: "20mm",
                bottom: "20mm",
                left: "20mm",
                right: "20mm",
            },
            // CSS page-break-after 규칙을 따르도록 지시
            preferCSSPageSize: true,
        });

        //응답 헤더
        return new Response(pdfBuffer, {
            headers: {
            'Content-Type': 'application/pdf',
            'Content-Disposition': 'attachment; filename="full_portfolio.pdf"',
            },
        });
    } catch (error) {
        console.error("Error generating PDF:", error);
        return new Response("Failed to generate PDF", {
            status: 500,
            headers: {
            'Content-Type': 'application/json',
            },
        });
    } finally {
        if (browser !== null) {
            await browser.close(); // 브라우저 인스턴스 닫기
        }
    }
}