import { Link } from 'react-router';
import { ArrowLeft } from 'lucide-react';

export function LocationTerms() {
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
            Pangea 위치정보이용약관
          </h1>
          <div className="text-sm text-gray-500 mb-6 space-y-1">
            <p>시행일자: 2026년 1월 12일</p>
            <p>최종개정: 2026년 1월 12일</p>
          </div>

          <p className="text-gray-700 leading-relaxed mb-8">
            플로 (이하 "회사")는 「위치정보의 보호 및 이용 등에 관한 법률」(이하 "법")에 따라 이용자의 위치정보를 안전하게 관리하고, 관련 권리를 보호하기 위하여 본 약관을 제정합니다.
          </p>

          <div className="prose prose-gray max-w-none">
            {/* 제1조 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">제1조 (목적)</h2>
              <p className="text-gray-700 leading-relaxed">
                본 약관은 회사가 제공하는 위치기반서비스(이하 "서비스")와 관련하여 회사와 이용자 간의 권리, 의무 및 책임사항 등을 규정함을 목적으로 합니다.
              </p>
            </section>

            {/* 제2조 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">제2조 (정의)</h2>
              <div className="space-y-4">
                <div>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    <strong>1. "서비스"</strong>라 함은 차량 단말기 또는 모바일 기기를 통해 수집된 위치정보를 이용하여 제공되는 다음 각 호의 기능을 말합니다.
                  </p>
                  <ul className="list-none pl-6 text-gray-700 space-y-1">
                    <li>① 차량 위치 조회 및 주행이력 확인</li>
                    <li>② 도난방지, 운행경로 모니터링</li>
                    <li>③ 운전행태 분석 및 보험·금융 연계 서비스</li>
                    <li>④ 기타 위치정보를 활용한 Fleet Management 기능</li>
                  </ul>
                </div>
                <div>
                  <p className="text-gray-700 leading-relaxed">
                    <strong>2. "이용자"</strong>란 본 약관에 동의하고 서비스를 이용하는 개인 또는 법인을 말합니다.
                  </p>
                </div>
                <div>
                  <p className="text-gray-700 leading-relaxed">
                    <strong>3. "개인위치정보"</strong>란 살아있는 개인의 위치에 관한 정보로서 해당 정보를 통하여 개인을 식별할 수 있는 정보를 말합니다.
                  </p>
                </div>
              </div>
            </section>

            {/* 제3조 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">제3조 (위치정보 이용·제공의 범위 및 목적)</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                회사는 다음의 목적 범위 내에서 위치정보를 수집·이용합니다.
              </p>
              
              <div className="overflow-x-auto">
                <table className="min-w-full border-collapse border border-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold text-gray-900">구분</th>
                      <th className="border border-gray-300 px-4 py-2 text-left font-semibold text-gray-900">이용 목적</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 text-gray-700">차량 단말</td>
                      <td className="border border-gray-300 px-4 py-2 text-gray-700">실시간 위치 조회, 도난방지, 운행점수 분석</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 text-gray-700">ERP/FMS 플랫폼</td>
                      <td className="border border-gray-300 px-4 py-2 text-gray-700">운행이력 조회, 리스크 스코어링, 차량 관리</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 text-gray-700">제휴 금융·보험사</td>
                      <td className="border border-gray-300 px-4 py-2 text-gray-700">운전행태 기반 신용·보험상품 제안</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2 text-gray-700">데이터 분석</td>
                      <td className="border border-gray-300 px-4 py-2 text-gray-700">통계·가명처리 데이터 생성 및 서비스 고도화</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* 제4조 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">제4조 (위치정보의 수집 방법)</h2>
              <ol className="list-decimal pl-6 text-gray-700 space-y-2">
                <li>회사는 차량에 장착된 단말기를 통해 GPS·셀룰러·Wi-Fi 신호 등의 방식으로 위치정보를 수집합니다.</li>
                <li>고객의 요청에 따라 소정의 절차를 거쳐 위치정보 수집 기능을 비활성화하거나 동의를 철회할 수 있습니다.</li>
              </ol>
            </section>

            {/* 제5조 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">제5조 (위치정보의 보유 및 이용기간)</h2>
              <ol className="list-decimal pl-6 text-gray-700 space-y-3">
                <li>회사는 위치정보를 수집한 목적이 달성된 후 또는 이용자가 동의를 철회한 경우 즉시 파기합니다.</li>
                <li>다만, 관련 법령에 따라 보관이 필요한 경우에는 그 기간 동안 보유할 수 있습니다.
                  <ul className="list-disc pl-6 mt-2">
                    <li>운행기록 등 서비스 이용기록: 1년</li>
                    <li>위치정보 이용·제공사실 확인자료: 6개월 (위치정보법 제16조 제2항)</li>
                  </ul>
                </li>
              </ol>
            </section>

            {/* 제6조 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">제6조 (개인위치정보의 제3자 제공)</h2>
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  <strong>1.</strong> 회사는 이용자의 동의 없이 개인위치정보를 제3자에게 제공하지 않습니다.
                </p>
                
                <div>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    <strong>2.</strong> 다만, 서비스 제공을 위하여 필요한 경우 이용자의 사전 동의를 얻어 다음과 같이 제공할 수 있습니다.
                  </p>
                  
                  <div className="overflow-x-auto">
                    <table className="min-w-full border-collapse border border-gray-300">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="border border-gray-300 px-4 py-2 text-center font-semibold text-gray-900">제공받는 자</th>
                          <th className="border border-gray-300 px-4 py-2 text-center font-semibold text-gray-900">제공 목적</th>
                          <th className="border border-gray-300 px-4 py-2 text-center font-semibold text-gray-900">제공 항목</th>
                          <th className="border border-gray-300 px-4 py-2 text-center font-semibold text-gray-900">보유·이용기간</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 text-gray-700">제휴 보험사</td>
                          <td className="border border-gray-300 px-4 py-2 text-gray-700">UBI 기반 요율 산정</td>
                          <td className="border border-gray-300 px-4 py-2 text-gray-700">운전행태정보, 주행거리, 위치정보</td>
                          <td className="border border-gray-300 px-4 py-2 text-gray-700">위탁계약 종료 시</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 text-gray-700">제휴 금융기관</td>
                          <td className="border border-gray-300 px-4 py-2 text-gray-700">금융서비스 중개</td>
                          <td className="border border-gray-300 px-4 py-2 text-gray-700">가공된 운행이력, 차량위치</td>
                          <td className="border border-gray-300 px-4 py-2 text-gray-700">위탁계약 종료 시</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-2 text-gray-700">정비업체/MRO 네트워크</td>
                          <td className="border border-gray-300 px-4 py-2 text-gray-700">정비 예약 및 주행거리 검증</td>
                          <td className="border border-gray-300 px-4 py-2 text-gray-700">차량위치, 주행정보</td>
                          <td className="border border-gray-300 px-4 py-2 text-gray-700">위탁계약 종료 시</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed">
                  <strong>3.</strong> 이용자는 언제든지 제3자 제공 동의를 철회할 수 있습니다.
                </p>
              </div>
            </section>

            {/* 제7조 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">제7조 (개인위치정보의 이용·제공사실 확인자료 보유)</h2>
              <p className="text-gray-700 leading-relaxed">
                회사는 「법」 제16조 제2항에 따라 위치정보 이용·제공사실 확인자료를 6개월간 보관합니다.
              </p>
            </section>

            {/* 제8조 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">제8조 (이용자의 권리 및 행사방법)</h2>
              <div className="space-y-4">
                <div>
                  <p className="text-gray-700 leading-relaxed mb-2">
                    <strong>1.</strong> 이용자(또는 법정대리인)는 언제든지 다음의 권리를 행사할 수 있습니다.
                  </p>
                  <ul className="list-none pl-6 text-gray-700 space-y-1">
                    <li>① 위치정보 이용·제공 사실의 열람 및 고지 요구</li>
                    <li>② 위치정보 이용·제공 동의 철회</li>
                    <li>③ 위치정보 수집 중단 또는 삭제 요청</li>
                  </ul>
                </div>
                <div>
                  <p className="text-gray-700 leading-relaxed mb-2">
                    <strong>2.</strong> 위 권리 행사는 고객센터를 통해 가능합니다.
                  </p>
                  <ul className="list-disc pl-6 text-gray-700">
                    <li>이메일: prometheus.rok@gmail.com</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* 제9조 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">제9조 (법정대리인의 권리)</h2>
              <ol className="list-decimal pl-6 text-gray-700 space-y-2">
                <li>회사는 14세 미만 아동으로부터 개인위치정보를 수집하지 않습니다.</li>
                <li>부득이하게 수집이 필요한 경우, 법정대리인의 동의를 사전에 얻습니다.</li>
              </ol>
            </section>

            {/* 제10조 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">제10조 (서비스의 변경 및 중지)</h2>
              <ol className="list-decimal pl-6 text-gray-700 space-y-2">
                <li>회사는 서비스 개선, 설비 점검, 정책 변경 등의 사유로 위치기반서비스의 전부 또는 일부를 변경하거나 중지할 수 있습니다.</li>
                <li>이 경우 사전에 이용자에게 공지하며, 부득이한 사유로 사전 통지가 불가능한 경우 사후에 통지할 수 있습니다.</li>
              </ol>
            </section>

            {/* 제11조 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">제11조 (개인위치정보 보호책임자)</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                회사는 개인위치정보를 보호하고 불만을 처리하기 위하여 다음과 같이 개인위치정보 보호책임자를 지정합니다.
              </p>
              <div className="bg-blue-50 p-6 rounded-lg">
                <table className="w-full">
                  <tbody>
                    <tr>
                      <td className="py-2 pr-4 font-semibold text-gray-900">구분</td>
                      <td className="py-2 text-gray-700">개인위치정보 보호책임자</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4 font-semibold text-gray-900">성명</td>
                      <td className="py-2 text-gray-700">엄주석</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4 font-semibold text-gray-900">이메일</td>
                      <td className="py-2 text-gray-700">privacy@findrive.xyz</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* 제12조 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">제12조 (손해배상)</h2>
              <p className="text-gray-700 leading-relaxed">
                이용자는 회사가 「법」 제15조 내지 제26조를 위반하여 손해를 입힌 경우 손해배상을 청구할 수 있습니다. 회사는 고의 또는 과실이 없는 경우 책임을 지지 않습니다.
              </p>
            </section>

            {/* 제13조 */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">제13조 (분쟁의 해결)</h2>
              <ol className="list-decimal pl-6 text-gray-700 space-y-2">
                <li>회사와 이용자 간에 발생한 분쟁에 대하여 협의가 이루어지지 않을 경우, 「위치정보법」 제28조에 따른 방송통신위원회 또는 개인정보분쟁조정위원회에 분쟁조정을 신청할 수 있습니다.</li>
                <li>본 약관에 따른 소송은 회사의 본점 소재지를 관할하는 법원을 제1심 관할법원으로 합니다.</li>
              </ol>
            </section>

            {/* 제14조 */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">제14조 (약관의 변경)</h2>
              <ol className="list-decimal pl-6 text-gray-700 space-y-2">
                <li>회사는 법령, 정책, 서비스 내용의 변경에 따라 본 약관을 변경할 수 있습니다.</li>
                <li>약관이 변경되는 경우 변경 최소 7일 전(이용자에게 불리한 경우 30일 전) 웹사이트를 통해 공지합니다.</li>
              </ol>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
