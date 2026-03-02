# Google Sheets 연동 확인 가이드

## ✅ "무료 데모 신청하기" 버튼이 Google Sheets로 연결되었습니다!

### 🔄 현재 데이터 흐름:

```
사용자가 "무료 데모 신청하기" 클릭
         ↓
DemoModal 팝업 열림
         ↓
폼 작성 (이름, 이메일, 전화번호, 회사명, 차량대수, 문의사항)
         ↓
"신청하기" 버튼 클릭
         ↓
Google Apps Script Web App으로 데이터 전송
         ↓
Google Sheets에 자동 저장
         ↓
성공 메시지 표시 ✅
```

---

## 🎯 이미 구현된 기능:

### 1. **DemoModal.tsx** 컴포넌트
- `handleSubmit` 함수에서 Google Sheets API 호출
- 환경 변수 `VITE_GOOGLE_SHEETS_URL` 사용
- 에러 처리 및 성공 메시지 표시

### 2. **환경 변수 설정**
파일 위치: **프로젝트 루트/.env.local**

```bash
VITE_GOOGLE_SHEETS_URL=https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec
```

---

## 🚀 Google Sheets 연동 설정 (한 번만 하면 됩니다)

### **1단계: Google Sheets 생성 (3분)**

1. [Google Sheets](https://sheets.google.com) 접속
2. 새 스프레드시트 만들기
3. 시트 이름: "Pangea 데모 신청"
4. 첫 번째 행에 헤더 작성:

| A | B | C | D | E | F | G |
|---|---|---|---|---|---|---|
| 신청일시 | 이름 | 이메일 | 전화번호 | 회사명 | 차량대수 | 문의사항 |

---

### **2단계: Google Apps Script 설정 (5분)**

#### 2-1. Apps Script 열기
1. Google Sheets 메뉴: **확장 프로그램** → **Apps Script**
2. 새 프로젝트가 열립니다

#### 2-2. 코드 붙여넣기
기존 코드를 모두 삭제하고 아래 코드를 붙여넣으세요:

```javascript
function doPost(e) {
  try {
    // 스프레드시트 연결
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // POST 데이터 파싱
    var data = JSON.parse(e.postData.contents);
    
    // 현재 시간 (한국 시간)
    var timestamp = Utilities.formatDate(
      new Date(), 
      "Asia/Seoul", 
      "yyyy-MM-dd HH:mm:ss"
    );
    
    // 데이터 행 추가
    sheet.appendRow([
      timestamp,
      data.name || '',
      data.email || '',
      data.phone || '',
      data.company || '',
      data.vehicles || '',
      data.message || ''
    ]);
    
    // 성공 응답
    return ContentService
      .createTextOutput(JSON.stringify({
        success: true,
        message: '신청이 완료되었습니다.'
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // 에러 응답
    return ContentService
      .createTextOutput(JSON.stringify({
        success: false,
        message: error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

#### 2-3. 프로젝트 저장
- 프로젝트 이름: "Pangea Demo Form Handler"
- 저장 아이콘 클릭 (💾)

---

### **3단계: Web App 배포 (5분)**

#### 3-1. 배포하기
1. 오른쪽 상단 **배포** 버튼 클릭
2. **새 배포** 선택
3. 설정:
   - **유형 선택**: 웹 앱
   - **설명**: "Pangea 데모 신청 폼"
   - **실행 사용자**: **나**
   - **액세스 권한**: **모든 사용자** ⚠️ 중요!
4. **배포** 클릭

#### 3-2. 권한 승인
1. "승인 필요" 메시지 → **액세스 승인** 클릭
2. Google 계정 선택
3. "앱이 확인되지 않음" 경고 시:
   - **고급** 클릭
   - **[프로젝트명] (안전하지 않음)(으)로 이동** 클릭
4. **허용** 클릭

#### 3-3. 웹 앱 URL 복사 🔑
배포 완료 후 **웹 앱 URL**이 표시됩니다:
```
https://script.google.com/macros/s/AKfycby.../exec
```
**이 URL을 복사하세요!**

---

### **4단계: 환경 변수 설정 (1분)**

프로젝트 루트 폴더에 `.env.local` 파일을 생성하고:

```bash
VITE_GOOGLE_SHEETS_URL=https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec
```

**YOUR_DEPLOYMENT_ID 부분을 3단계에서 복사한 실제 URL로 교체하세요!**

---

### **5단계: 개발 서버 재시작**

터미널에서:
```bash
npm run dev
```

또는 개발 서버를 중지했다가 다시 시작하세요.

---

## 🧪 테스트 방법

### 1. 랜딩페이지 테스트
1. 브라우저에서 `http://localhost:5173` 접속
2. **"무료 데모 신청하기"** 버튼 클릭
3. 폼 작성:
   - 이름: 홍길동
   - 이메일: test@example.com
   - 전화번호: 010-1234-5678
   - 회사명: 테스트 렌터카
   - 차량대수: 10-20대
   - 문의사항: 테스트 신청입니다
4. **"신청하기"** 버튼 클릭
5. "신청이 완료되었습니다!" 메시지 확인

### 2. Google Sheets 확인
1. Google Sheets로 돌아가기
2. 새로운 행이 자동으로 추가되었는지 확인:

| 신청일시 | 이름 | 이메일 | 전화번호 | 회사명 | 차량대수 | 문의사항 |
|---------|------|--------|---------|--------|---------|---------|
| 2026-03-02 14:30:15 | 홍길동 | test@example.com | 010-1234-5678 | 테스트 렌터카 | 10-20대 | 테스트 신청입니다 |

---

## 📊 추가 기능 (선택사항)

### 1. 이메일 알림 설정
1. Google Sheets 메뉴: **도구** → **알림 규칙**
2. "시트가 변경되면 이메일 보내기" 설정
3. 새 신청이 들어올 때마다 이메일로 알림 받기 ✉️

### 2. 자동 정렬
A1 셀에 수식 입력:
```
=SORT(A2:G, 1, FALSE)
```
최신 신청이 맨 위로 자동 정렬됩니다.

### 3. 데이터 필터
- 헤더 행 선택 → **데이터** → **필터 만들기**
- 차량대수별, 날짜별 필터링 가능

---

## 🔧 문제 해결

### ❌ "Google Sheets URL이 설정되지 않았습니다" 에러
**해결:**
1. `.env.local` 파일이 **프로젝트 루트** 폴더에 있는지 확인
2. `VITE_GOOGLE_SHEETS_URL` 변수명이 정확한지 확인
3. 개발 서버를 재시작

### ❌ 데이터가 저장되지 않음
**해결:**
1. Google Apps Script 배포 시 **액세스 권한**이 "모든 사용자"로 설정되었는지 확인
2. Apps Script 편집기에서 **실행 로그** 확인
3. 웹 앱 URL이 정확한지 확인

### ❌ CORS 에러
**해결:**
- DemoModal.tsx에서 `mode: 'no-cors'` 옵션 사용 (이미 적용됨)
- Google Apps Script는 기본적으로 CORS를 지원하지 않으므로 no-cors 모드 필수

---

## 🎉 완료!

이제 "무료 데모 신청하기" 버튼을 클릭하면:
1. ✅ 모달 팝업이 열림
2. ✅ 폼 작성
3. ✅ Google Sheets에 자동 저장
4. ✅ GA4에 전환 이벤트 추적
5. ✅ 성공 메시지 표시

**완전 무료**로 모든 신청 정보를 실시간으로 관리할 수 있습니다! 📊
