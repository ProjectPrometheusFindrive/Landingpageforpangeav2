import { Link } from 'react-router';
import { ArrowLeft } from 'lucide-react';

export function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">메인으로 돌아가기</span>
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-8 md:py-12">
        <div className="bg-white rounded-2xl shadow-sm p-6 md:p-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Pangea 개인정보처리방침
          </h1>
          <div className="text-sm text-gray-500 mb-8 space-y-1">
            <p>시행일자: 2026년 1월 12일</p>
            <p>최종개정: 2026년 1월 12일</p>
          </div>

          <p className="text-gray-700 leading-relaxed mb-8">
            플로 (이하 "회사")는 「개인정보보호법」, 「정보통신망법」, 「신용정보법」, 「위치정보법」 등 관련 법령을 준수하며 이용자의 개인정보를 안전하게 보호하기 위해 다음과 같이 개인정보처리방침을 수립·공개합니다.
          </p>

          <div className="prose prose-gray max-w-none">
            {/* 제1조 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">제1조 (수집하는 개인정보의 항목 및 수집방법)</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                회사는 다음의 개인정보를 수집·이용합니다.
              </p>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">1. 회원 가입 및 서비스 이용 시</h3>
                  <ul className="list-disc pl-6 text-gray-700 space-y-1">
                    <li>필수항목: 이름(또는 상호명), 연락처, 이메일, 사업자등록번호</li>
                    <li>선택항목: 직책, 부서, 회사 주소</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">2. 차량 관리 및 단말 연동 시</h3>
                  <ul className="list-disc pl-6 text-gray-700 space-y-1">
                    <li>차량정보: 차량번호, 차종, 연식, 등록일, 정비이력</li>
                    <li>운행정보: 위치정보(GPS), 주행거리, 속도, 급가속/급제동 등 운전행태정보</li>
                    <li>단말정보: 단말기 식별번호, 통신사 정보, 펌웨어 버전</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">3. 금융 서비스(대출·보험 중개) 이용 시</h3>
                  <ul className="list-disc pl-6 text-gray-700 space-y-1">
                    <li>필수항목: 사업자 매출정보, 재무정보, 차량담보 정보</li>
                    <li>선택항목: 신용평가 모델용 가공 데이터</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">4. 수집방법</h3>
                  <ul className="list-disc pl-6 text-gray-700 space-y-1">
                    <li>웹사이트(ERP/FMS 플랫폼), 차량 단말기, API 연동, 제휴기관 제공 등</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 제2조 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">제2조 (개인정보의 수집 및 이용 목적)</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                회사는 수집한 개인정보를 다음의 목적을 위해 이용합니다.
              </p>
              <ol className="list-decimal pl-6 text-gray-700 space-y-2">
                <li>서비스 제공 및 관리(차량자산 관리, 운행기록, 정비관리 등)</li>
                <li>위치기반 서비스 제공(도난방지, 실시간 차량 모니터링 등)</li>
                <li>금융·보험 중개 서비스 제공(대출한도 산출, 보험요율 제안 등)</li>
                <li>고객 상담 및 민원 처리</li>
                <li>서비스 개선 및 신규 서비스 개발</li>
                <li>법령상 의무이행 및 분쟁 대응</li>
              </ol>
            </section>

            {/* 제3조 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">제3조 (개인정보의 보유 및 이용기간)</h2>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>회원정보: 회원 탈퇴 시까지 보관</li>
                <li>운행/위치정보: 수집일로부터 1년간 보관 후 파기</li>
                <li>거래정보(금융·보험): 관련 법령에 따른 보존기간(예: 5년)</li>
                <li>단, 법령상 의무이행 또는 분쟁 해결을 위해 필요한 경우 별도 보관</li>
              </ul>
            </section>

            {/* 제4조 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">제4조 (개인정보의 제3자 제공)</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                회사는 원칙적으로 이용자의 개인정보를 외부에 제공하지 않습니다.<br />
                다만, 다음의 경우에는 예외로 합니다.
              </p>
              <ol className="list-decimal pl-6 text-gray-700 space-y-2">
                <li>이용자의 사전 동의가 있는 경우
                  <ul className="list-disc pl-6 mt-2">
                    <li>제휴 금융기관, 보험사, 정비업체 등과의 연계 서비스 제공 시</li>
                  </ul>
                </li>
                <li>법령에 근거하여 수사기관 등의 요청이 있는 경우</li>
              </ol>
            </section>

            {/* 제5조 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">제5조 (개인정보처리의 위탁)</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                회사는 서비스 운영 효율화를 위해 다음과 같이 개인정보 처리업무를 위탁할 수 있습니다.
              </p>
              
              <div className="overflow-x-auto">
                <table className="min-w-full border-collapse border border-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold text-gray-900">수탁업체</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold text-gray-900">위탁업무 내용</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold text-gray-900">보유 및 이용기간</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 text-gray-700">Google Inc</td>
                      <td className="border border-gray-300 px-4 py-2 text-gray-700">시스템 인프라 운영 및 데이터 보관</td>
                      <td className="border border-gray-300 px-4 py-2 text-gray-700">위탁계약 종료 시까지</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 text-gray-700">Geotab / 단말 공급사</td>
                      <td className="border border-gray-300 px-4 py-2 text-gray-700">차량 단말기 연동 및 유지보수</td>
                      <td className="border border-gray-300 px-4 py-2 text-gray-700">서비스 종료 시까지</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* 제6조 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">제6조 (개인정보의 파기절차 및 방법)</h2>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>보유기간이 경과하거나 처리 목적이 달성된 개인정보는 즉시 파기합니다.</li>
                <li>전자파일 형태는 복구 불가능한 기술적 방법으로 삭제하며, 문서 형태는 분쇄 또는 소각합니다.</li>
              </ul>
            </section>

            {/* 제7조 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">제7조 (이용자 및 법정대리인의 권리)</h2>
              <p className="text-gray-700 leading-relaxed">
                이용자(또는 법정대리인)는 언제든지 개인정보의 조회, 수정, 삭제, 처리정지를 요청할 수 있습니다. 요청은 고객센터 또는 이메일을 통해 접수되며, 회사는 지체 없이 조치합니다.
              </p>
            </section>

            {/* 제8조 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">제8조 (개인정보의 안전성 확보조치)</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                회사는 개인정보의 안전성을 확보하기 위하여 다음과 같은 조치를 취하고 있습니다.
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>접근권한 관리 및 최소화</li>
                <li>데이터 암호화 및 접근기록 보관</li>
                <li>보안프로그램 설치 및 정기 점검</li>
                <li>내부관리계획 수립 및 교육 실시</li>
              </ul>
            </section>

            {/* 제9조 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">제9조 (개인위치정보의 처리)</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                회사는 위치기반서비스를 제공하기 위해 위치정보를 수집·이용할 수 있으며, 관련 법령을 준수합니다.
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>위치정보 이용목적: 차량위치 조회, 도난방지, 운행경로 분석 등</li>
                <li>보유기간: 1년 후 파기</li>
                <li>이용자는 위치정보 수집·이용·제공에 대한 동의를 철회할 수 있습니다.</li>
              </ul>
            </section>

            {/* 제10조 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">제10조 (개인정보 보호책임자)</h2>
              <div className="bg-blue-50 p-6 rounded-lg">
                <table className="w-full">
                  <tbody>
                    <tr>
                      <td className="py-2 pr-4 font-semibold text-gray-900">구분</td>
                      <td className="py-2 text-gray-700">개인정보 보호책임자</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4 font-semibold text-gray-900">성명</td>
                      <td className="py-2 text-gray-700">엄주석</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4 font-semibold text-gray-900">이메일</td>
                      <td className="py-2 text-gray-700">prometheus.rok@gmail.com</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* 제11조 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">제11조 (고지의 의무)</h2>
              <p className="text-gray-700 leading-relaxed">
                이 개인정보처리방침은 법령, 정책 또는 보안기술의 변경에 따라 내용이 변경될 수 있으며, 변경 시 회사 웹사이트에 공지합니다.
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
