import { Separator } from "@/components/ui/separator";

export const contentData = {
    '1': { // Resume content
      title: '이력서',
      headTitle: '김윤기 이력서',
      description: '김윤기 이력서입니다.',
      renderContent: (
        <>
          <header className="text-center mb-10 pb-5 border-b border-gray-200">
            <Separator/>
            {/* Profile Summary / 자기소개 (간략 버전 - 자기소개서 페이지에 상세) */}
            <div className="bg-gray-50 p-6 rounded-md text-left mt-5">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-1 border-b-2 border-gray-300">🎯 이력서 요약</h2>
              <p>
                데이터 기반의 인사이트로 비즈니스 성장을 이끄는 퍼포먼스 마케터 <span className="font-semibold">[당신의 이름]</span>입니다.
                [주요 강점 1 (예: 데이터 분석 능력, 빠른 실행력)]과 [주요 강점 2 (예: 문제 해결 능력, 끈기)]를 바탕으로
                실질적인 성과를 만들어내는 데 집중합니다.
                더 자세한 이야기는 자기소개서 페이지에서 확인해주세요.
              </p>
            </div>
          </header>
  
          {/* Experience Section */}
          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-5 pb-2 border-b-2 border-blue-500">🚀 경력</h2>
            {/* Company 1 */}
            <div className="mb-6 pb-4 border-b border-dashed border-gray-200 last:border-b-0">
              <h3 className="text-2xl font-semibold text-blue-700">[회사명] | [직책 (예: 퍼포먼스 마케터)]</h3>
              <p className="text-gray-500 text-sm mb-3">[근무 시작일] - [근무 종료일 또는 현재]</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>[주요 업무 및 성과 1]: <span className="font-medium">[구체적인 성과, 수치 포함]</span> (예: Google Ads 캠페인 운영 및 최적화를 통해 ROAS <span className="font-bold text-green-600">20% 개선</span>)</li>
                <li>[주요 업무 및 성과 2]: <span className="font-medium">[구체적인 성과, 수치 포함]</span> (예: Facebook/Instagram 광고 소재 A/B 테스트 진행, 전환율 <span className="font-bold text-green-600">15% 증가</span>)</li>
                <li>[주요 업무 및 성과 3]: <span className="font-medium">[구체적인 성과, 수치 포함]</span> (예: GA4를 활용한 데이터 분석 및 퍼널 개선으로 이탈률 <span className="font-bold text-green-600">10% 감소</span>)</li>
                <li>[농산물 판매 창업 경험]: 온라인 채널(스마트스토어, 소셜 미디어) 구축 및 운영, 디지털 광고를 통한 고객 유입 전략 실행 (예: 인스타그램 광고 집행으로 신규 고객 <span className="font-bold text-green-600">000명 유치</span>)</li>
                <li><span className="font-medium">관련 기술/툴:</span> Google Ads, Facebook Business Manager, Google Analytics, Excel 등</li>
              </ul>
            </div>
            {/* Other experiences can be added here */}
          </section>
  
          {/* Education Section */}
          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-5 pb-2 border-b-2 border-blue-500">📚 학력 및 교육</h2>
            {/* Final Degree */}
            <div className="mb-6 pb-4 border-b border-dashed border-gray-200 last:border-b-0">
              <h3 className="text-2xl font-semibold text-blue-700">[학교명] | [전공] | [학사/석사]</h3>
              <p className="text-gray-500 text-sm mb-3">[입학 연도] - [졸업 연도]</p>
            </div>
            {/* Marketing-related Additional Education (Crucial for non-majors!) */}
            <div className="mb-6 pb-4 border-b border-dashed border-gray-200 last:border-b-0">
              <h3 className="text-2xl font-semibold text-blue-700">[교육기관명] | [과정명 (예: 퍼포먼스 마케팅 부트캠프)]</h3>
              <p className="text-gray-500 text-sm mb-3">[수료 기간 (예: 2024.01 - 2024.06)]</p>
              <p className="text-gray-700">주요 학습 내용: [데이터 분석, 광고 플랫폼 운영, A/B 테스트, ROAS 최적화 전략 등]</p>
            </div>
          </section>
  
          {/* Skills Section */}
          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-5 pb-2 border-b-2 border-blue-500">🛠️ 기술 & 스킬</h2>
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
                <li className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm whitespace-nowrap hover:bg-gray-200 transition-colors">Google Data Studio (Looker Studio)</li>
                <li className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm whitespace-nowrap hover:bg-gray-200 transition-colors">Excel (VLOOKUP, Pivot Table)</li>
                <li className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm whitespace-nowrap hover:bg-gray-200 transition-colors">SQL (기본 쿼리)</li>
              </ul>
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-700 mb-3">마케팅 전략 & 기타</h3>
              <ul className="flex flex-wrap gap-3 list-none p-0 m-0">
                <li className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm whitespace-nowrap hover:bg-gray-200 transition-colors">A/B Testing</li>
                <li className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm whitespace-nowrap hover:bg-gray-200 transition-colors">타겟 고객 분석 및 세분화</li>
                <li className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm whitespace-nowrap hover:bg-gray-200 transition-colors">캠페인 기획 및 실행</li>
                <li className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm whitespace-nowrap hover:bg-gray-200 transition-colors">시장/경쟁사 분석</li>
                <li className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm whitespace-nowrap hover:bg-gray-200 transition-colors">(필요시) 콘텐츠 기획/제작 (영상 편집 등)</li>
              </ul>
            </div>
          </section>
  
          {/* Certifications Section */}
          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-5 pb-2 border-b-2 border-blue-500">🏅 자격증</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li><span className="font-medium">[자격증명 1 (예: 구글 애즈 검색 광고 전문가)]</span> | [취득일]</li>
              <li><span className="font-medium">[자격증명 2 (예: 구글 애널리틱스 개요)]</span> | [취득일]</li>
              <li><span className="font-medium">[자격증명 3 (예: 검색광고마케터 1급)]</span> | [취득일]</li>
            </ul>
          </section>
  
          {/* Activities & Projects Section */}
          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-5 pb-2 border-b-2 border-blue-500">💡 대외 활동 & 프로젝트</h2>
            <div className="mb-6 pb-4 border-b border-dashed border-gray-200 last:border-b-0">
              <h3 className="text-2xl font-semibold text-blue-700">[활동명/프로젝트명 (예: OOO 마케팅 스터디)]</h3>
              <p className="text-gray-500 text-sm mb-3">[기간]</p>
              <p className="text-gray-700">내용: [스터디/프로젝트에서 어떤 역할을 했고, 무엇을 배웠는지, 어떤 결과가 있었는지]</p>
            </div>
            <div className="mb-6 pb-4 border-b border-dashed border-gray-200 last:border-b-0">
              <h3 className="text-2xl font-semibold text-blue-700">[여행 영상 콘텐츠 제작 및 개인 채널 운영]</h3>
              <p className="text-gray-500 text-sm mb-3">[기간]</p>
              <p className="text-gray-700">내용: 여행 경험을 바탕으로 브이로그 영상 기획, 촬영, 편집 진행. YouTube/SNS 채널에 업로드하여 <span className="font-medium">[조회수, 구독자 수 등 성과]</span> 달성. (콘텐츠 기획 및 소셜 미디어 활용 능력 증명)</p>
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
          <header className="text-center mb-10 pb-5 border-b border-gray-200">
          </header>
  
          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-5 pb-2 border-b-2 border-blue-500">💡 퍼포먼스 마케터로서의 성장 동기</h2>
            <p className="text-gray-700 mb-4">
              [이전 전공]을 공부하던 중, [어떤 계기로 마케팅, 특히 퍼포먼스 마케팅에 매력을 느끼게 되었는지 구체적으로 서술해주세요. 예: 우연히 접한 디지털 광고 캠페인의 효율성에 깊은 인상을 받음, 혹은 직접 농산물 판매 창업을 하면서 온라인 마케팅의 중요성을 체감함].
              저는 데이터를 통해 명확한 결과를 도출하고, 이를 바탕으로 끊임없이 개선하며 성과를 극대화하는 퍼포먼스 마케팅의 매력에 깊이 빠져들었습니다.
            </p>
            <p className="text-gray-700">
              비전공자로서의 한계를 극복하기 위해 [어떤 온라인 강의, 부트캠프, 스터디 등을 수강했는지]와 [어떤 자격증을 취득했는지]를 통해 이론적 지식과 실무 역량을 꾸준히 쌓았습니다.
              특히 [가장 기억에 남는 학습 경험/프로젝트]를 통해 [무엇을 배우고 어떤 어려움을 극복했는지] 구체적으로 작성해주세요.
            </p>
          </section>
  
          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-5 pb-2 border-b-2 border-blue-500">🌟 저의 핵심 강점</h2>
            <div className="mb-4">
              <h3 className="text-2xl font-semibold text-blue-700">1. 데이터 기반의 문제 해결 능력</h3>
              <p className="text-gray-700">
                저는 [특정 프로젝트/경험]에서 [어떤 문제에 직면했는지]를 설명하고, [어떤 데이터를 활용하여 (GA, 광고 플랫폼 데이터 등)] 문제를 분석하고 [어떤 인사이트를 도출했는지], 그리고 [그 인사이트를 바탕으로 어떤 해결책을 제시/실행했는지]를 구체적인 수치(예: 이탈률 감소, 전환율 증가)와 함께 작성해주세요.
              </p>
            </div>
            <div className="mb-4">
              <h3 className="text-2xl font-semibold text-blue-700">2. 빠른 학습과 실행력</h3>
              <p className="text-gray-700">
                새로운 마케팅 트렌드나 광고 플랫폼에 대한 높은 이해와 빠른 적응력을 가지고 있습니다. [새로운 툴/기술을 습득했던 경험 (예: GA4 도입, 새로운 광고 소재 테스트 등)]과, 그것을 실제 업무에 적용하여 [어떤 결과를 만들어냈는지]를 설명해주세요. 작은 규모의 창업 경험에서도 [제한된 자원으로 효율을 높이기 위해 빠르게 시도했던 것] 등을 언급할 수 있습니다.
              </p>
            </div>
            <div className="mb-4">
              <h3 className="text-2xl font-semibold text-blue-700">3. [당신만의 추가적인 강점]</h3>
              <p className="text-gray-700">
                [세 번째 강점을 명확히 제시 (예: 커뮤니케이션 능력, 끈기 있는 실행력, 콘텐츠 이해도 등)]. 그리고 이 강점이 [어떤 경험/사례]를 통해 발휘되었고, [마케팅 업무에 어떻게 기여할 수 있는지]를 연결하여 설명해주세요.
              </p>
            </div>
          </section>
  
          <section className="mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-5 pb-2 border-b-2 border-blue-500">🚀 입사 후 기여 방안</h2>
            <p className="text-gray-700">
              [회사명]의 [사업/서비스]에 대한 깊은 이해를 바탕으로, 제가 가진 [핵심 역량들 (데이터 분석, 실행력, 학습 능력 등)]을 활용하여 [구체적으로 기여하고 싶은 부분 (예: 신규 고객 유치 비용 최적화, 특정 캠페인의 ROAS 극대화, 새로운 마케팅 채널 발굴 등)]에 집중하겠습니다.
              끊임없이 배우고 도전하며 [회사명]의 비즈니스 성장에 실질적인 기여를 하는 퍼포먼스 마케터가 되겠습니다.
            </p>
          </section>
        </>
      ),
    },
  };