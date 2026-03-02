# Google Sheets 연동 설정 가이드

## 📊 무료 데모 신청 데이터를 Google Sheets에 자동 저장하기

### 1단계: Google Sheets 생성

1. [Google Sheets](https://sheets.google.com) 접속
2. 새 스프레드시트 만들기
3. 시트 이름: "Pangea 데모 신청"
4. 첫 번째 행에 헤더 작성:

| A | B | C | D | E | F | G |
|---|---|---|---|---|---|---|
| 신청일시 | 이름 | 이메일 | 전화번호 | 회사명 | 차량대수 | 문의사항 |

---

### 2단계: Google Apps Script 설정

#### 2-1. Apps Script 열기
1. Google Sheets 메뉴: **확장 프로그램** → **Apps Script**
2. 새 프로젝트가 열립니다

#### 2-2. 코드 복사 & 붙여넙기
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

// 테스트용 함수 (선택사항)
function testPost() {
  var testData = {
    postData: {
      contents: JSON.stringify({
        name: '홍길동',
        email: 'test@example.com',
        phone: '010-1234-5678',
        company: '테스트 렌터카',
        vehicles: '10-20대',
        message: '테스트 신청입니다.'
      })
    }
  };
  
  var result = doPost(testData);
  Logger.log(result.getContent());
}
```

#### 2-3. 프로젝트 저장
- 프로젝트 이름: "Pangea Demo Form Handler"
- 저장 아이콘 클릭 (💾)

---

### 3단계: Web App 배포

#### 3-1. 배포하기
1. 오른쪽 상단 **배포** 버튼 클릭
2. **새 배포** 선택
3. 설정:
   - **유형 선택**: 웹 앱
   - **설명**: "Pangea 데모 신청 폼" (선택사항)
   - **실행 사용자**: **나**
   - **액세스 권한**: **모든 사용자** ⚠️ 중요!
4. **배포** 클릭

#### 3-2. 권한 승인
1. "승인 필요" 메시지가 나타나면 **액세스 승인** 클릭
2. Google 계정 선택
3. "앱이 확인되지 않음" 경고가 나타나면:
   - **고급** 클릭
   - **[프로젝트명] (안전하지 않음)(으)로 이동** 클릭
4. **허용** 클릭

#### 3-3. 웹 앱 URL 복사 🔑
배포가 완료되면 **웹 앱 URL**이 표시됩니다:
```
https://script.google.com/macros/s/AKfycby.../exec
```
**이 URL을 복사하세요! 이것이 API 엔드포인트입니다.**

---

### 4단계: 코드에 URL 적용

#### 4-1. 환경 변수 파일 생성
프로젝트 루트에 `.env.local` 파일을 생성하고:

```bash
VITE_GOOGLE_SHEETS_URL=https://script.google.com/macros/s/https://script.google.com/macros/s/AKfycbzRp3A1zFEYHvE6cKT9gLI0_TvFGnygdEytlG2zCa8m74NKwE9WO_vxw5caNTV10_DX/exec/exec
```

**YOUR_DEPLOYMENT_ID 부분을 실제 URL로 교체하세요!**

#### 4-2. 개발 서버 재시작
```bash
# 개발 서버를 재시작해야 환경 변수가 적용됩니다
npm run dev
```

---

### 5단계: 테스트

#### 5-1. 랜딩페이지에서 테스트
1. "무료 데모 신청하기" 버튼 클릭
2. 폼 작성 및 제출
3. "신청이 완료되었습니다!" 메시지 확인

#### 5-2. Google Sheets 확인
1. Google Sheets로 돌아가기
2. 새로운 행에 데이터가 추가되었는지 확인
3. 신청일시가 한국 시간으로 기록되었는지 확인

---

## 🎯 데이터 구조

| 컬럼 | 타입 | 예시 |
|------|------|------|
| 신청일시 | DateTime | 2026-03-01 14:35:22 |
| 이름 | Text | 홍길동 |
| 이메일 | Email | hong@example.com |
| 전화번호 | Phone | 010-1234-5678 |
| 회사명 | Text | ABC 렌터카 |
| 차량대수 | Text | 10-20대 |
| 문의사항 | Text | 무료 체험 문의드립니다 |

---

## 🔧 문제 해결

### "승인 필요" 메시지가 계속 나타남
- Google Apps Script 편집기에서 **실행** → **testPost** 선택
- 권한 승인 진행
- 다시 배포

### 데이터가 저장되지 않음
1. Apps Script 편집기에서 **실행 로그** 확인
2. 웹 앱 URL이 정확한지 확인
3. `.env.local` 파일 위치 확인 (프로젝트 루트)
4. 개발 서버 재시작

### CORS 에러
- Apps Script 배포 시 **액세스 권한**이 "모든 사용자"로 설정되었는지 확인

### 시간이 이상하게 표시됨
- Apps Script 코드에서 `"Asia/Seoul"` 타임존이 올바른지 확인

---

## 📊 데이터 관리 팁

### 자동 정렬
```
=SORT(A2:G, 1, FALSE)
```
최신 신청이 맨 위로 오도록 정렬

### 알림 설정
1. Google Sheets 메뉴: **도구** → **알림 규칙**
2. "시트가 변경되면 이메일 보내기" 설정
3. 새 신청이 들어올 때마다 이메일 알림 받기

### 데이터 필터링
- 헤더 행 선택 → **데이터** → **필터 만들기**
- 차량대수별, 날짜별 필터링 가능

---

## 🔒 보안 참고사항

- ⚠️ Google Apps Script Web App은 누구나 접근 가능합니다
- 민감한 개인정보는 수집하지 마세요
- Google Sheets 공유 설정은 "나만 액세스 가능"으로 유지하세요
- API URL은 외부에 노출하지 마세요 (프론트엔드에서는 불가피)

---

## ✅ 완료!

이제 무료 데모 신청 정보가 Google Sheets에 자동으로 저장됩니다!

**실시간 확인**: Google Sheets를 열어두면 새 신청이 들어올 때마다 자동으로 행이 추가되는 것을 볼 수 있습니다. 📊
