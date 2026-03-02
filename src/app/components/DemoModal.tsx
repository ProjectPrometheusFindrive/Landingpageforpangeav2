import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { trackModalOpen, trackModalClose, trackFormStart, trackFormFieldComplete, trackFormSubmit, trackConversion, trackError } from '../../utils/analytics';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function DemoModal({ isOpen, onClose }: DemoModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    vehicles: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [hasStartedForm, setHasStartedForm] = useState(false);
  const [completedFields, setCompletedFields] = useState<Set<string>>(new Set());
  const [error, setError] = useState<string | null>(null);

  // 모달 열기 추적
  useEffect(() => {
    if (isOpen) {
      trackModalOpen('demo_request');
      setError(null); // 모달 열 때 에러 초기화
    }
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      // Google Sheets API 호출
      const GOOGLE_SHEETS_URL = import.meta.env.VITE_GOOGLE_SHEETS_URL;

      if (!GOOGLE_SHEETS_URL) {
        throw new Error('Google Sheets URL이 설정되지 않았습니다. .env.local 파일을 확인하세요.');
      }

      const response = await fetch(GOOGLE_SHEETS_URL, {
        method: 'POST',
        mode: 'no-cors', // Google Apps Script는 CORS를 지원하지 않으므로
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      // no-cors 모드에서는 응답을 읽을 수 없으므로 성공으로 간주
      // 실제로는 Google Sheets에서 에러가 발생해도 여기서는 알 수 없음
      
      // 폼 제출 성공 추적
      trackFormSubmit('demo_request', true);
      
      // 전환 완료 추적 (최종 목표!)
      trackConversion('demo_request_completed', 1);

      setIsSubmitting(false);
      setIsSuccess(true);

      // 3초 후 모달 닫기 및 초기화
      setTimeout(() => {
        setIsSuccess(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          vehicles: '',
          message: '',
        });
        setHasStartedForm(false);
        setCompletedFields(new Set());
        trackModalClose('demo_request', 'success');
        onClose();
      }, 3000);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : '알 수 없는 오류가 발생했습니다.';
      
      // 폼 제출 실패 추적
      trackFormSubmit('demo_request', false);
      trackError('form_submission', errorMessage);
      
      setError(errorMessage);
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    // 폼 입력 시작 추적 (최초 1회만)
    if (!hasStartedForm && value.length > 0) {
      setHasStartedForm(true);
      trackFormStart('demo_request');
    }

    // 필드 완료 추적 (각 필드별 1회만)
    if (value.length > 0 && !completedFields.has(name)) {
      setCompletedFields(prev => new Set(prev).add(name));
      trackFormFieldComplete('demo_request', name);
    }

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleClose = () => {
    if (!isSuccess) {
      trackModalClose('demo_request', 'user_action');
    }
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 md:px-8 py-6 rounded-t-2xl">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2">무료 데모 신청</h2>
              <p className="text-blue-100 text-sm md:text-base">무료 체험으로 Pangea의 모든 기능을 경험해보세요</p>
            </div>
            <button
              onClick={onClose}
              className="text-white hover:bg-white/20 rounded-lg p-2 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Body */}
        <div className="px-6 md:px-8 py-6 md:py-8">
          {isSuccess ? (
            <div className="text-center py-12">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">신청이 완료되었습니다!</h3>
              <p className="text-gray-600 mb-2">
                담당자가 영업일 기준 1일 이내로<br />
                연락드리겠습니다.
              </p>
              <p className="text-sm text-gray-500">
                이메일로 안내 메시지를 발송했습니다.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6">
              {/* 이름 */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                  이름 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="홍길동"
                />
              </div>

              {/* 이메일 */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                  이메일 <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="contact@example.com"
                />
              </div>

              {/* 전화번호 */}
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
                  전화번호 <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="010-1234-5678"
                />
              </div>

              {/* 회사명 */}
              <div>
                <label htmlFor="company" className="block text-sm font-semibold text-gray-900 mb-2">
                  회사명
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="회사명을 입력해주세요"
                />
              </div>

              {/* 보유 차량 대수 */}
              <div>
                <label htmlFor="vehicles" className="block text-sm font-semibold text-gray-900 mb-2">
                  보유 차량 대수
                </label>
                <select
                  id="vehicles"
                  name="vehicles"
                  value={formData.vehicles}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white"
                >
                  <option value="">선택해주세요</option>
                  <option value="1-5">20대 이하</option>
                  <option value="6-20">21-50대</option>
                  <option value="21-50">51-100대</option>
                  <option value="51+">100대 이상</option>
                </select>
              </div>

              {/* 문의사항 */}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                  문의사항
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                  placeholder="궁금하신 내용을 자유롭게 작성해주세요"
                />
              </div>

              {/* 에러 메시지 */}
              {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl text-sm">
                  <strong>오류:</strong> {error}
                </div>
              )}

              {/* 제출 버튼 */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-4 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
                >
                  {isSubmitting ? '신청 중...' : '무료 데모 신청하기'}
                </button>
                <button
                  type="button"
                  onClick={handleClose}
                  className="sm:w-auto px-6 py-4 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold text-lg hover:bg-gray-50 transition-all whitespace-nowrap"
                >
                  취소
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}