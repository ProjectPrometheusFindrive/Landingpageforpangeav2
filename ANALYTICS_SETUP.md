# Pangea 랜딩페이지 분석 설정 가이드

## 📊 무료 분석 도구 설정

### 1. Google Analytics 4 (GA4) 설정

#### Step 1: GA4 계정 생성
1. [Google Analytics](https://analytics.google.com/) 접속
2. "측정 시작" 클릭
3. 계정 이름 입력 (예: "Pangea")
4. 속성 이름 입력 (예: "Pangea Landing Page")
5. 비즈니스 정보 입력
6. "웹" 플랫폼 선택
7. 웹사이트 URL 입력

#### Step 2: 추적 코드 설치
GA4에서 제공하는 측정 ID(G-XXXXXXXXXX)를 받아서 HTML에 추가:

```html
<!-- /public/index.html의 <head> 태그 안에 추가 -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

**실제 측정 ID로 G-XXXXXXXXXX 부분을 교체하세요!**

---

### 2. Microsoft Clarity 설정 (무료 히트맵 & 세션 녹화)

#### Step 1: Clarity 계정 생성
1. [Microsoft Clarity](https://clarity.microsoft.com/) 접속
2. Microsoft 계정으로 로그인
3. "New Project" 클릭
4. 프로젝트 이름 입력 (예: "Pangea Landing")
5. 웹사이트 URL 입력

#### Step 2: 추적 코드 설치
Clarity에서 제공하는 코드를 HTML에 추가:

```html
<!-- /public/index.html의 <head> 태그 안에 추가 -->
<script type="text/javascript">
    (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "YOUR_CLARITY_ID");
</script>
```

**실제 Clarity ID로 YOUR_CLARITY_ID 부분을 교체하세요!**

---

## 📈 추적되는 이벤트 목록

### ✅ 자동 추적 이벤트
- **page_view**: 페이지 로드 시
- **scroll**: 25%, 50%, 75%, 100% 스크롤 도달 시
- **section_view**: 각 섹션 30% 이상 노출 시
  - hero
  - problem
  - solution
  - virtuous_cycle
  - features
  - benefits
  - cta

### 🎯 전환 추적 이벤트
- **cta_click**: CTA 버튼 클릭
  - hero_demo_button
  - cta_demo_button
- **modal_open**: 데모 모달 열기
- **form_start**: 폼 입력 시작 (첫 글자 입력 시)
- **form_field_complete**: 각 필드 완료
  - demo_request_name
  - demo_request_email
  - demo_request_phone
  - demo_request_company
  - demo_request_vehicles
  - demo_request_message
- **form_submit_success**: 폼 제출 성공
- **conversion**: 최종 전환 완료 ⭐

---

## 🎯 GA4 대시보드 설정

### 전환 이벤트 설정
1. GA4 관리 → 이벤트 → "새 이벤트 만들기"
2. 다음 이벤트를 전환으로 표시:
   - ✅ `form_submit_success` (주요 전환)
   - ✅ `conversion` (최종 목표)
   - `cta_click`
   - `modal_open`
   - `form_start`

### 맞춤 보고서 생성
1. 탐색 → "비어 있음" 선택
2. "자유 형식" 선택
3. 측정기준 추가:
   - 이벤트 이름
   - 이벤트 라벨
4. 측정항목 추가:
   - 이벤트 수
   - 총 사용자
   - 전환수

---

## 📊 퍼널 보고서 생성

### GA4 탐색 → 유입경로 탐색
1. 단계 설정:
   - 1단계: `page_view`
   - 2단계: `scroll` (value >= 50)
   - 3단계: `cta_click`
   - 4단계: `modal_open`
   - 5단계: `form_start`
   - 6단계: `form_submit_success`

---

## 📱 Microsoft Clarity 활용법

### 히트맵 보기
1. Clarity 대시보드 → "Heatmaps" 탭
2. 페이지 URL 선택
3. 클릭 히트맵 확인:
   - 어디를 가장 많이 클릭하는지
   - CTA 버튼 클릭률
   - 잘못된 클릭 영역

### 세션 녹화 보기
1. Clarity 대시보드 → "Recordings" 탭
2. 필터 적용:
   - "Converted" - 전환한 사용자만
   - "Rage clicks" - 좌절한 사용자
   - "Dead clicks" - 반응 없는 클릭
3. 녹화 재생하여 사용자 행동 관찰

### 인사이트 발견
- **Dead Clicks**: 사용자가 클릭했지만 아무 반응 없는 곳
- **Rage Clicks**: 같은 곳을 연속으로 빠르게 클릭 (좌절 신호)
- **Quick Backs**: 페이지 방문 후 바로 뒤로가기 (관심 없음)
- **Excessive Scrolling**: 원하는 정보를 찾지 못해 과도하게 스크롤

---

## 🎯 핵심 지표 모니터링

### 일일 체크리스트
```
□ 오늘 방문자 수
□ CTA 클릭률 (목표: 10% 이상)
□ 모달 오픈율 (목표: 95% 이상)
□ 폼 시작률 (목표: 80% 이상)
□ 최종 전환율 (목표: 2-5%)
□ 평균 스크롤 깊이 (목표: 75% 이상)
```

### GA4에서 확인하는 방법
1. **보고서** → **참여도** → **이벤트**
2. 이벤트 이름 클릭하여 상세 확인
3. 일자별 추이 확인

### 계산 공식
```
CTA 클릭률 = (cta_click 수 / page_view 수) × 100
모달 오픈율 = (modal_open 수 / cta_click 수) × 100
폼 시작률 = (form_start 수 / modal_open 수) × 100
폼 완료율 = (form_submit_success 수 / form_start 수) × 100
최종 전환율 = (conversion 수 / page_view 수) × 100
```

---

## 🔍 문제 진단 체크리스트

### CTA 클릭률이 낮으면 (<10%)
- [ ] Clarity에서 Hero 섹션 히트맵 확인
- [ ] 버튼이 잘 보이는지 확인
- [ ] 세션 녹화에서 스크롤 패턴 확인
- [ ] 평균 스크롤 깊이 확인 (CTA까지 도달하는지)

### 폼 완료율이 낮으면 (<60%)
- [ ] `form_field_complete` 이벤트에서 어느 필드에서 이탈하는지 확인
- [ ] Clarity 녹화에서 폼 입력 패턴 확인
- [ ] 필수 필드 줄이기 고려

### 전체 전환율이 낮으면 (<2%)
- [ ] 유입 채널별 전환율 비교 (검색 vs 직접 vs 광고)
- [ ] 모바일 vs 데스크톱 전환율 비교
- [ ] 섹션별 이탈률 확인

---

## 💡 즉시 실행 가능한 개선 아이디어

### 데이터 수집 1주일 후
1. Clarity에서 가장 많이 본 세션 10개 분석
2. GA4에서 이탈률 높은 지점 파악
3. 히트맵에서 잘못된 클릭 지점 발견

### 개선 우선순위
1. 🔴 **긴급**: 전환율 2% 미만
2. 🟡 **중요**: CTA 클릭률 10% 미만
3. 🟢 **보통**: 스크롤 깊이 50% 미만

---

## 📞 추가 지원

분석 설정이나 데이터 해석에 도움이 필요하시면:
1. GA4 측정 ID 확인
2. Clarity 프로젝트 ID 확인
3. 데이터 수집 시작 후 48시간 대기
4. 대시보드에서 데이터 확인

**이제 완전히 무료로 전문가 수준의 분석이 가능합니다!** 🎉
