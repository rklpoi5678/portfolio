// Lucide-react icons import
import { Separator } from '@/components/ui/separator';
import { Rocket, GraduationCap, Wrench, Award, Lightbulb, UserRound, Zap, TrendingUp } from 'lucide-react';


// Define the content for Resume and About Me sections
export const contentData = {
  '1': { // Resume content
    title: '이력서',
    headTitle: '김윤기 이력서',
    description: '김윤기 이력서입니다.',
    renderContent: (
      <>
        {/* Profile Summary / 자기소개 (간략 버전 - 자기소개서 페이지에 상세) */}
        <div className="bg-gray-50 p-6 rounded-md text-left mt-5 mb-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-1 border-b-2 border-gray-300 flex items-center gap-2">
            <UserRound className="w-6 h-6 text-gray-700" /> 소개
          </h2>
          <p className="text-gray-700">
            프론트엔드부터 백엔드까지 아우르는 넓은 시야로, 복잡한 비즈니스 문제를 해결하고 사용자에게 최적화된 경험을 제공하는 풀스택 개발자 김윤기입니다. 실용적이고 안정적인 애플리케이션을 구축하여 지속 가능한 성장을 이끄는 데 집중합니다.
            데이터 기반의 인사이트로 비즈니스 성장을 이끄는 <span className="font-semibold">김윤기</span>입니다.
            <span className="font-semibold">데이터 기반의 문제 해결 능력</span>과 <span className="font-semibold">빠른 학습 및 실행력</span>을 바탕으로
            실질적인 성과를 만들어내는 데 집중합니다.
          </p>
        </div>

    <Separator/>

        {/* Experience Section */}
        <section className="mb-8">
          <h2 className="mb-2 mt-4 text-3xl font-bold text-gray-800 mb-5 pb-2 border-b-2 border-blue-500 flex items-center gap-2">
            <Rocket className="w-8 h-8 text-blue-500" /> 경력
          </h2>
          {/* Company 1: 한국컴피티션 */}
          <div className="mb-6 pb-4 border-b border-dashed border-gray-200 last:border-b-0">
            <h3 className="text-2xl font-semibold text-blue-700">한국컴피티션 | 미캐닉</h3>
            <p className="text-gray-500 text-sm mb-3">2021.11 - 2022.11</p>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>슈퍼6000 인제 스피디움 3R 우승(8호차 최명길)에 기여하며, 차량 성능 데이터를 분석하고 문제점을 사전에 진단하여 해결하는 <span className="font-medium">분석적 문제 해결 능력</span>을 강화했습니다.</li>
              <li>제한된 시간과 자원 속에서 최적의 성능 유지를 위한 목표를 설정하고, 체계적인 접근 방식과 신속한 실행력으로 긴급 상황에 대응하는 <span className="font-medium">위기관리 능력</span>을 길렀습니다.</li>
              <li>정밀한 진단과 조정을 통해 팀의 목표 달성에 기여하며, 끈기 있는 실행과 협업의 중요성을 체득했습니다.</li>
            </ul>
          </div>
        </section>

        <Separator/>

        {/* Education Section */}
        <section className="mb-8">
          <h2 className="mb-2 mt-4 text-3xl font-bold text-gray-800 mb-5 pb-2 border-b-2 border-blue-500 flex items-center gap-2">
            <GraduationCap className="w-8 h-8 text-blue-500" /> 학력 및 교육
          </h2>
          {/* Final Degree */}
          <div className="mb-6 pb-4 border-b border-dashed border-gray-200 last:border-b-0">
            <h3 className="text-2xl font-semibold text-blue-700">하이텍고등학교 | 자동차 정비</h3>
            <p className="text-gray-500 text-sm">2015 - 2018</p>
          </div>
          <div className="mb-6 pb-4 border-b border-dashed border-gray-200 last:border-b-0">
            <h3 className="text-2xl font-semibold text-blue-700">항공폴리텍 | 항공 정비 과정</h3>
            <p className="text-gray-500 text-sm">2018.03 - 2018.07(중퇴)</p>
          </div>
          {/* Marketing-related Additional Education (Crucial for non-majors!) */}
          <div className="mb-6 pb-4 border-b border-dashed border-gray-200 last:border-b-0">
            <h3 className="text-2xl font-semibold text-blue-700">한국IT국비학원 | 풀스택 개발 과정</h3>
            <p className="text-gray-500 text-sm">2024.01 - 2024.06</p>
            <p className="text-gray-700">주요 학습 내용: 데이터베이스 활용 및 분석, 프론트엔드/백엔드 개발 실습을 통해 웹 서비스의 구조와 사용자 경험을 깊이 학습하였습니다.</p>
          </div>
        </section>

        <Separator/>

        {/* Skills Section */}
        <section className="mb-8">
          <h2 className="mb-2 mt-4 text-3xl font-bold text-gray-800 mb-5 pb-2 border-b-2 border-blue-500 flex items-center gap-2">
            <Wrench className="w-8 h-8 text-blue-500" /> 기술 & 스킬 (스택)
          </h2>
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">스택</h3>
            <ul className="flex flex-wrap gap-3 list-none p-0 m-0">
              <li className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm whitespace-nowrap hover:bg-gray-200 transition-colors">JavaScript</li>
              <li className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm whitespace-nowrap hover:bg-gray-200 transition-colors">TypeScript</li>
              <li className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm whitespace-nowrap hover:bg-gray-200 transition-colors">React.js</li>
              <li className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm whitespace-nowrap hover:bg-gray-200 transition-colors">Next.js(reactrouter v7)</li>
              <li className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm whitespace-nowrap hover:bg-gray-200 transition-colors">drizzle</li>
              <li className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm whitespace-nowrap hover:bg-gray-200 transition-colors">reactnative expo</li>
              <li className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm whitespace-nowrap hover:bg-gray-200 transition-colors">aws S3, vercel, cloudflare works</li>
              <li className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm whitespace-nowrap hover:bg-gray-200 transition-colors">sveltkit</li>
            </ul>
          </div>
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">광고 플랫폼</h3>
            <ul className="flex flex-wrap gap-3 list-none p-0 m-0">
              <li className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm whitespace-nowrap hover:bg-gray-200 transition-colors">Google Ads (검색/디스플레이/쇼핑)</li>
              <li className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm whitespace-nowrap hover:bg-gray-200 transition-colors">Facebook/Instagram Ads (Meta Ads)</li>
              <li className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm whitespace-nowrap hover:bg-gray-200 transition-colors">Naver Search Ads</li>
            </ul>
          </div>
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">데이터 분석 & 시각화</h3>
            <ul className="flex flex-wrap gap-3 list-none p-0 m-0">
              <li className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm whitespace-nowrap hover:bg-gray-200 transition-colors">Google Analytics (GA4)</li>
              <li className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm whitespace-nowrap hover:bg-gray-200 transition-colors">Excel</li>
              <li className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm whitespace-nowrap hover:bg-gray-200 transition-colors">SQL (MySQL, SQLite, PostgreSQL 기본 쿼리)</li>
            </ul>
          </div>
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">기타</h3>
            <ul className="flex flex-wrap gap-3 list-none p-0 m-0">
              <li className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm whitespace-nowrap hover:bg-gray-200 transition-colors">A/B Testing</li>
              <li className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm whitespace-nowrap hover:bg-gray-200 transition-colors">시장/경쟁사 분석</li>
              <li className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm whitespace-nowrap hover:bg-gray-200 transition-colors">photoshop</li>
              <li className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm whitespace-nowrap hover:bg-gray-200 transition-colors">adobe premiere pro, capcut</li>
            </ul>
          </div>
        </section>
        
        <Separator/>

        {/* Certifications Section */}
        <section className="mb-8">
          <h2 className="mb-2 mt-4 text-3xl font-bold text-gray-800 mb-5 pb-2 border-b-2 border-blue-500 flex items-center gap-2">
            <Award className="w-8 h-8 text-blue-500" /> 자격증
          </h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li><span className="font-medium">GAIQ</span> | 2025.02</li>
            <li><span className="font-medium">검색광고마케터 1급</span> | 2023.01</li>
            <li><span className="font-medium">GTQ 1급</span> | 2023.01</li>
            <li><span className="font-medium">SMAT(서비스경영자격) 2급</span> | 2022.12</li>
          </ul>
        </section>

        <Separator/>

        {/* Activities & Projects Section */}
        <section className="mb-8">
          <h2 className="mb-2 mt-4 text-3xl font-bold text-gray-800 mb-5 pb-2 border-b-2 border-blue-500 flex items-center gap-2">
            <Lightbulb className="w-8 h-8 text-blue-500" /> 대외 활동 & 프로젝트
          </h2>
          <div className="mb-6 pb-4 border-b border-dashed border-gray-200 last:border-b-0">
            <h3 className="text-2xl font-semibold text-blue-700">기능경기대회 (자동차 정비)</h3>
            <p className="text-gray-500 text-sm mb-3">2017</p>
            <p className="text-gray-700">대구광역시 주최 지방경기대회 동상 수상. 목표 달성을 위한 전략 수립, 반복적인 연습을 통한 최적화, 그리고 문제 발생 시의 세밀한 원인 분석 및 조정 능력을 길렀습니다.</p>
          </div>
          {/* 한국IT국비학원 | 풀스택 개발은 학력 및 교육 섹션으로 이동했으므로 여기서는 삭제 */}
          <div className="mb-6 pb-4 border-b border-dashed border-gray-200 last:border-b-0">
            <h3 className="text-2xl font-semibold text-blue-700">구구 | 농산물 온라인 판매 기획 및 관리 (개인 프로젝트)</h3>
            <p className="text-gray-500 text-sm mb-3">2023.03 - 2023.06</p>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>온라인 스마트스토어를 직접 구축하고 운영하며, 농산물 위탁 판매를 위한 전략을 기획 및 실행했습니다.</li>
              <li>콜드 콜 및 대면 영업을 통해 1개월 간 신규 거래처 <span className="font-bold text-green-600">10명 유치</span>에 성공하며 영업 역량을 강화했습니다.</li>
              <li>초기 매출 목표 100만원 달성에는 미치지 못했으나, 이 경험을 통해 오프라인 영업의 한계와 디지털 마케팅을 통한 효율적인 고객 유입 및 전환의 중요성을 깊이 이해하게 되었습니다.</li>
              <li>활용 툴: 스마트스토어 판매자 센터, 네이버 데이터랩, Excel 등</li>
            </ul>
          </div>
          <div className="mb-6 pb-4 border-b border-dashed border-gray-200 last:border-b-0">
            <h3 className="text-2xl font-semibold text-blue-700">제로베이스 비히디 퍼포먼스 마케팅 프로젝트</h3>
            <p className="text-gray-500 text-sm mb-3">2024.03 ~ 2024.05</p>
            <p className="text-gray-700">이커머스 서비스 '비히디'의 고객 유입 및 전환율 증대를 위한 퍼포먼스 마케팅 캠페인 기획 및 운영. Google Ads, Meta Ads를 활용하여 예산 최적화 및 A/B 테스트를 진행했습니다. 특정 캠페인에서 기존 대비 CTR 2% 목표를 <span className="font-bold text-green-600">3.5% 초과 달성</span>했으며, 이를 통해 전환율 개선에 기여했습니다. 광고 효율을 지속적으로 모니터링하고 최적화 방안을 도출하는 실무 경험을 쌓았습니다.</p>
          </div>
          <div className="mb-6 pb-4 border-b border-dashed border-gray-200 last:border-b-0">
            <h3 className="text-2xl font-semibold text-blue-700">여행 영상 콘텐츠 제작 및 개인 채널 운영</h3>
            <p className="text-gray-500 text-sm mb-3">2024.11 ~ 2025.02</p>
            <p className="text-gray-700">처음 세계 여행 배낭 여행을 가는 사람을 명확한 타겟으로 설정하여 채널 방향성을 기획하고, 이들을 위한 맞춤형 영상 콘텐츠를 기획 및 공동 촬영했습니다. 최소한의 리소스로 어도비 프리미어, CapCut을 활용하여 영상 편집을 진행했으며, YouTube 채널에 업로드하여 <span className="font-medium">초기 구독자 200명</span> 및 <span className="font-medium">총 조회수 6,700회</span>.</p>
          </div>
        </section>
      </>
    ),
  },
  '2': { // About Me (자기소개서) content
    title: '자기소개서',
    headTitle: '김윤기 자기소개서',
    description: '김윤기 자기소개서입니다.',
    renderContent: (
      <>
        {/* 자기소개 헤더는 이미 메인 프로필 헤더에서 처리되므로 여기서는 삭제 */}

        <Separator/>
        <section className="mb-8">
          <h2 className="mb-2 mt-4 text-3xl font-bold text-gray-800 mb-5 pb-2 border-b-2 border-blue-500 flex items-center gap-2">
            <Zap className="w-8 h-8 text-blue-500" /> 풀스택 개발자로서의 성장 동기
          </h2>
          <p className="text-gray-700 mb-4">
            한국컴피티션 미캐닉 시절, 차량 성능 데이터를 분석하여 문제점을 사전에 진단하고 해결하며 정교한 분석 역량을 길렀습니다.
            이 경험을 바탕으로, '제로베이스 비히디 프로젝트'에서는 단순히 광고 관리자 데이터를 분석하는 것을 넘어, 
            사용자 행동 로그와 서비스 내부 데이터를 분석하여 특정 기능의 낮은 사용성 원인을 파악했습니다.
            이를 토대로 UI/UX 개선 방안을 제시하고 A/B 테스트를 통해,
            기존 대비 사용자 참여율을 3.5% 초과 달성하는 성과를 만들었습니다.(히트맵 clarity 사용과 버튼의 디자인 카피 개선)          </p>
          <p className="text-gray-700">
            한국IT학원 개발 과정을 통해 기본적인 자바의 객체지향과 개발자로서의 매력 기초 능력등 학습력을 키웠습니다.
            특히 '구구' 농산물 판매 프로젝트에서는 제한된 인력과 자원 속에서 시장의 니즈를 빠르게 파악하기 위해
            스마트스토어 구축,마케팅,거래처 유지보수등 다양한 기술과 방법을 스스로 학습하고 즉시 적용했습니다. 
            이 경험은 초기 MVP(최소 기능 제품)를 빠르게 구현하고, 시장의 반응을 확인하며 방향을 전환하는 개발 프로세스의 중요성을 깨닫게 했습니다.          </p>
        </section>

        <Separator/>

        <section className="mb-8">
          <h2 className="mb-2 mt-4 text-3xl font-bold text-gray-800 mb-5 pb-2 border-b-2 border-blue-500 flex items-center gap-2">
            <TrendingUp className="w-8 h-8 text-blue-500" /> 저의 핵심 강점
          </h2>
          <div className="mb-6">
            <h3 className="text-2xl font-semibold text-blue-700 mb-2">1. 데이터 기반의 문제 해결 능력</h3>
            <p className="text-gray-700">
              문제점을 사전에 진단하고 해결하고 핵심을 찾아 해결하거나 찾아내는 능력을 길렀습니다. '제로베이스 비히디 프로젝트'에서는 Meta광고 관리자 데이터를 활용하여 낮은 CTR과 전환율 문제를 분석했습니다. 이를 바탕으로 콘텐츠 팀과 함께 새로운 광고 소재와 메시지를 A/B 테스트하고 광고소재의 디자인 개선을 제안하고, 예산 최적화을 통해 특정 캠페인에서 기존 대비 CTR 2% 목표를 <span className="font-bold text-green-600">3.5% 초과 달성</span>하는 성과를 만들었습니다.
            </p>
          </div>
          <div className="mb-6">
            <h3 className="text-2xl font-semibold text-blue-700 mb-2">2. 빠른 학습과 실행력</h3>
            <p className="text-gray-700">
              한국IT학원 개발 과정을 통해 웹 서비스의 구조와 사용자 경험을 깊이 이해하며, 새로운 기술과 툴에 대한 빠른 적응력과 끊임없는 학습력 키웠습니다. '구구' 농산물 온라인 판매 프로젝트에서는 초기 자본과 인력의 제한에도 불구하고 스마트스토어 구축, 네이버 데이터랩 분석, 콜드 콜 및 대면 영업 등 다양한 방법을 빠르게 시도하며 시장의 반응을 확인하고 전략을 수정했습니다. 이 경험은 제한된 자원 속에서 효율을 극대화하기 위한 빠른 시도와 실행 그리고 빠른 방향 전환의 중요성을 깨닫게 했습니다.
            </p>
          </div>
          <div className="mb-6">
            <h3 className="text-2xl font-semibold text-blue-700 mb-2">3. 고객 중심의 콘텐츠 기획 및 채널 운영 경험</h3>
            <p className="text-gray-700">
              '여행 영상 콘텐츠 제작 및 개인 채널 운영' 프로젝트를 통해 '처음 세계 여행을 가는 배낭 여행객'이라는 명확한 타겟 사용자를 설정하고, 그들의 니즈를 충족시킬 맞춤형 콘텐츠를 기획, 제작한 경험이 있습니다. 이 프로젝트는 사용자의 요구사항을 깊이 이해하고, 이를 바탕으로 매력적이고 가치 있는 서비스를 설계하는 능력을 길러주었습니다. 단순한 기술 구현을 넘어, 사용자에게 실질적인 가치를 제공하는 개발자가 되겠습니다.
            </p>
          </div>
        </section>

        <Separator/>

        {/* <section className="mb-8">
          <h2 className="mb-2 mt-4 text-3xl font-bold text-gray-800 mb-5 pb-2 border-b-2 border-blue-500 flex items-center gap-2">
            <Rocket className="w-8 h-8 text-blue-500" /> 입사 포부 *ToDo*
          </h2>
          <p className="text-gray-700">
            [//회사명]의 [//서비스 와 비즈니스]에 대한 깊은 이해를 바탕으로, 제가 가진 데이터 분석 능력, 빠른 실행력, 제가 가진 역량을 활용하여 [//신규 고객 유치 비용 최적화, //특정 캠페인의 ROAS 극대화, //새로운 마케팅 채널 발굴 등]에 집중하겠습니다. 끊임없이 배우고 도전하며 [//회사명]의 비즈니스 성장에 실질적인 기여를 하는 퍼포먼스 마케터가 되겠습니다.
          </p>
        </section> */}
      </>
    ),
  },
};