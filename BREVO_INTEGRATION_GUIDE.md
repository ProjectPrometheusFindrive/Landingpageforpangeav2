# Brevo (Sendinblue) 연동 가이드 📧

## 🎯 목표
무료 데모 신청 시 **자동으로 Brevo에 연락처 추가 + MVP URL 이메일 발송**

---

## 📋 Brevo란?

**Brevo** (구 Sendinblue)는 무료 이메일 마케팅 플랫폼입니다.

### ✅ 장점:
- **완전 무료**: 월 300통 이메일 발송
- **연락처 관리**: CRM 기능 내장
- **이메일 템플릿**: 드래그 앤 드롭 에디터
- **자동화**: 이메일 자동 발송
- **API 제공**: 쉬운 연동

### 💰 무료 플랜:
- 월 300통 이메일
- 무제한 연락처
- 이메일 템플릿
- API 접근

---

## 🚀 설정 방법 (3가지)

| 방법 | 난이도 | 특징 | 추천 |
|------|--------|------|------|
| **방법 1** | ⭐️⭐️ 쉬움 | Google Apps Script + Brevo API | ✅ 추천 |
| **방법 2** | ⭐️⭐️⭐️ 보통 | Brevo 폼 + 리다이렉트 | - |
| **방법 3** | ⭐️⭐️⭐️⭐️ 어려움 | 프론트엔드 → Brevo API 직접 호출 | - |

---

## ✅ 방법 1: Google Apps Script + Brevo API (추천 🎉)

### 특징:
- ✅ **가장 쉬움**: 기존 Google Sheets 설정 활용
- ✅ **자동화**: 신청 → Brevo 연락처 추가 → 이메일 발송
- ✅ **완전 무료**: API 키만 있으면 됨
- ✅ **보안**: API 키가 클라이언트에 노출되지 않음

---

### 📝 1단계: Brevo 계정 생성 및 API 키 발급 (5분)

#### 1-1. 회원가입
1. [Brevo 홈페이지](https://www.brevo.com) 접속
2. **무료 가입** 클릭
3. 이메일 인증 완료

#### 1-2. 발신자 이메일 등록
1. 상단 메뉴 → **Senders & IP**
2. **Add a Sender** 클릭
3. 발신자 이메일 입력 (예: `support@yourdomain.com` 또는 개인 Gmail)
4. 이메일 인증 링크 클릭

💡 **TIP**: Gmail 사용 가능합니다! (예: `yourname@gmail.com`)

#### 1-3. API 키 발급
1. 오른쪽 상단 프로필 아이콘 클릭
2. **SMTP & API** 선택
3. **Create a new API key** 클릭
4. 이름: `Pangea Demo Form`
5. **API 키 복사** (예: `xkeysib-abc123...`)

⚠️ **중요**: API 키는 한 번만 표시됩니다. 안전한 곳에 보관하세요!

---

### 📝 2단계: Brevo 이메일 템플릿 생성 (10분)

#### 2-1. 템플릿 만들기
1. 왼쪽 메뉴 → **Email** → **Templates**
2. **Create a Template** 클릭
3. **Drag & Drop Editor** 선택

#### 2-2. 템플릿 디자인
템플릿 이름: **Pangea MVP Welcome Email**

**제목 (Subject):**
```
[Pangea] {{NAME}}님, 무료 데모를 시작하세요! 🚀
```

**본문 예시:**

```html
안녕하세요 {{NAME}}님,

Pangea의 무료 데모를 신청해주셔서 감사합니다!
아래 버튼을 클릭하여 지금 바로 체험을 시작하세요.

[무료 데모 시작하기] ← 버튼 (MVP URL로 링크)

📌 체험 안내:
• 무료 체험 기간: 14일
• 모든 기능 제한 없이 사용 가능
• 데모 데이터로 실제 시뮬레이션

궁금하신 점이 있으시면 언제든지 답장해주세요.

감사합니다,
Pangea 팀
```

#### 2-3. 변수 설정
Brevo에서 사용할 변수:
- `{{NAME}}`: 신청자 이름
- `{{EMAIL}}`: 신청자 이메일
- `{{MVP_URL}}`: MVP 링크

#### 2-4. 템플릿 저장
1. **Save** 클릭
2. 템플릿 ID 확인 (예: `12`)

---

### 📝 3단계: Google Apps Script 수정 (10분)

기존 Google Apps Script 코드를 아래 코드로 **완전히 교체**하세요:

```javascript
// ========== 설정 영역 (여기만 수정하세요) ==========
var MVP_URL = "https://your-mvp-app.com"; // MVP URL
var SENDER_NAME = "Pangea 팀";

// Brevo API 설정
var BREVO_API_KEY = "xkeysib-abc123..."; // ⬅️ Brevo API Key
var BREVO_SENDER_EMAIL = "support@yourdomain.com"; // ⬅️ Brevo에서 인증한 발신자 이메일
var BREVO_SENDER_NAME = "Pangea 팀"; // ⬅️ 발신자 이름
// ==========================================

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
    
    // 데이터 행 추가 (Google Sheets 저장)
    sheet.appendRow([
      timestamp,
      data.name || '',
      data.email || '',
      data.phone || '',
      data.company || '',
      data.vehicles || '',
      data.message || ''
    ]);
    
    // ✨ Brevo에 연락처 추가 + 이메일 발송
    if (data.email) {
      addContactToBrevo(data);
      sendWelcomeEmailViaBrevo(data);
    }
    
    // 성공 응답
    return ContentService
      .createTextOutput(JSON.stringify({
        success: true,
        message: '신청이 완료되었습니다. 이메일을 확인해주세요.'
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

// Brevo에 연락처 추가
function addContactToBrevo(data) {
  var url = "https://api.brevo.com/v3/contacts";
  
  var payload = {
    "email": data.email,
    "attributes": {
      "FIRSTNAME": data.name || '',
      "LASTNAME": "",
      "SMS": data.phone || '',
      "COMPANY": data.company || '',
      "VEHICLES": data.vehicles || '',
      "MESSAGE": data.message || ''
    },
    "listIds": [2], // ⬅️ Brevo 리스트 ID (나중에 수정)
    "updateEnabled": true // 이미 존재하면 업데이트
  };
  
  var options = {
    "method": "post",
    "contentType": "application/json",
    "headers": {
      "api-key": BREVO_API_KEY
    },
    "payload": JSON.stringify(payload),
    "muteHttpExceptions": true
  };
  
  try {
    var response = UrlFetchApp.fetch(url, options);
    var result = JSON.parse(response.getContentText());
    Logger.log("Brevo 연락처 추가 성공: " + data.email);
  } catch (error) {
    Logger.log("Brevo 연락처 추가 실패: " + error.toString());
  }
}

// Brevo를 통해 이메일 발송
function sendWelcomeEmailViaBrevo(data) {
  var url = "https://api.brevo.com/v3/smtp/email";
  
  var htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: 'Malgun Gothic', sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
        .content { background: #f9fafb; padding: 30px; border-radius: 0 0 10px 10px; }
        .button { display: inline-block; background: #667eea; color: white; padding: 15px 40px; text-decoration: none; border-radius: 8px; font-weight: bold; margin: 20px 0; }
        .button:hover { background: #5568d3; }
        .info-box { background: white; padding: 20px; border-left: 4px solid #667eea; margin: 20px 0; border-radius: 5px; }
        .footer { text-align: center; color: #6b7280; font-size: 12px; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1 style="margin: 0; font-size: 28px;">🎉 환영합니다!</h1>
          <p style="margin: 10px 0 0 0; opacity: 0.9;">Pangea 무료 데모 신청이 완료되었습니다</p>
        </div>
        
        <div class="content">
          <p style="font-size: 16px;"><strong>${data.name || '고객'}님</strong>, 안녕하세요!</p>
          
          <p>Pangea의 무료 데모를 신청해주셔서 감사합니다.<br>
          아래 버튼을 클릭하여 지금 바로 체험을 시작하세요!</p>
          
          <div style="text-align: center;">
            <a href="${MVP_URL}" class="button" style="color: white;">
              🚀 무료 데모 시작하기
            </a>
          </div>
          
          <div class="info-box">
            <h3 style="margin-top: 0; color: #667eea;">📌 체험 안내</h3>
            <ul style="margin: 10px 0; padding-left: 20px;">
              <li>무료 체험 기간: <strong>14일</strong></li>
              <li>모든 기능 제한 없이 사용 가능</li>
              <li>데모 데이터로 실제 시뮬레이션</li>
            </ul>
          </div>
          
          <p style="margin-top: 30px; padding: 15px; background: #fef3c7; border-radius: 8px; border-left: 4px solid #f59e0b;">
            <strong>💡 TIP:</strong> MVP 링크를 즐겨찾기에 추가하시면 더욱 편리합니다!<br>
            <code style="background: white; padding: 5px 10px; border-radius: 4px; display: inline-block; margin-top: 5px;">${MVP_URL}</code>
          </p>
          
          <p>궁금하신 점이 있으시면 언제든지 답장해주세요.<br>
          빠르게 도와드리겠습니다! 😊</p>
          
          <p style="margin-top: 30px;">
            감사합니다,<br>
            <strong>${SENDER_NAME}</strong>
          </p>
        </div>
        
        <div class="footer">
          <p>이 메일은 Pangea 무료 데모 신청 시 자동으로 발송됩니다.</p>
          <p>회사명: 플로 | 주소: 경기도 수원시 권선구 당수로129번길 10</p>
        </div>
      </div>
    </body>
    </html>
  `;
  
  var payload = {
    "sender": {
      "name": BREVO_SENDER_NAME,
      "email": BREVO_SENDER_EMAIL
    },
    "to": [
      {
        "email": data.email,
        "name": data.name || '고객'
      }
    ],
    "subject": "[Pangea] " + (data.name || '고객') + "님, 무료 데모를 시작하세요! 🚀",
    "htmlContent": htmlContent
  };
  
  var options = {
    "method": "post",
    "contentType": "application/json",
    "headers": {
      "api-key": BREVO_API_KEY
    },
    "payload": JSON.stringify(payload),
    "muteHttpExceptions": true
  };
  
  try {
    var response = UrlFetchApp.fetch(url, options);
    var result = JSON.parse(response.getContentText());
    Logger.log("Brevo 이메일 발송 성공: " + data.email);
  } catch (error) {
    Logger.log("Brevo 이메일 발송 실패: " + error.toString());
  }
}
```

---

### 📝 4단계: Brevo 리스트 ID 찾기 (3분)

#### 4-1. 리스트 생성
1. Brevo → **Contacts** → **Lists**
2. **Create a List** 클릭
3. 이름: `Pangea Demo Signups`
4. **Create** 클릭

#### 4-2. 리스트 ID 확인
1. 생성한 리스트 클릭
2. URL에서 ID 확인
   - 예: `https://app.brevo.com/contact/list/id/2`
   - 리스트 ID: **2**

#### 4-3. 코드에 리스트 ID 입력
```javascript
"listIds": [2], // ⬅️ 여기에 실제 리스트 ID 입력
```

---

### 📝 5단계: API 정보 입력 (1분)

코드 상단의 설정 영역을 수정하세요:

```javascript
var MVP_URL = "https://your-mvp-app.com"; // ⬅️ 실제 MVP URL
var SENDER_NAME = "Pangea 팀";
var BREVO_API_KEY = "xkeysib-abc123..."; // ⬅️ 실제 API Key
var BREVO_SENDER_EMAIL = "support@yourdomain.com"; // ⬅️ Brevo 인증 이메일
var BREVO_SENDER_NAME = "Pangea 팀";
```

---

### 📝 6단계: 저장 및 재배포 (1분)

1. 💾 **저장** 버튼 클릭
2. 🚀 **배포** → **배포 관리**
3. ✏️ 연필 아이콘 → **버전: 새 버전**
4. **배포** 클릭

---

### 🧪 7단계: 테스트

#### 7-1. 웹사이트에서 신청
1. "무료 데모 신청하기" 클릭
2. 실제 이메일 주소로 신청

#### 7-2. 확인 사항
1. ✅ **Google Sheets**: 데이터 저장 확인
2. ✅ **Brevo Contacts**: 연락처 추가 확인
3. ✅ **이메일**: MVP URL 포함 이메일 수신 확인

---

## 🎯 데이터 흐름

```
사용자 신청
    ↓
Google Apps Script 실행
    ↓
┌─────────────────────┬─────────────────────┐
│                     │                     │
│  Google Sheets      │   Brevo API         │
│  데이터 저장         │   연락처 추가        │
│                     │   이메일 발송        │
└─────────────────────┴─────────────────────┘
    ↓
사용자 이메일 수신 (MVP URL 포함)
```

---

## 📊 Brevo 대시보드 활용

### 1. 연락처 관리
- **Contacts** 메뉴에서 모든 신청자 확인
- 필터링: 차량 대수, 회사명 등
- 태그 추가: VIP 고객, 관심 고객 등

### 2. 이메일 통계
- **Campaigns** 메뉴에서 발송 내역 확인
- 오픈율 (Open Rate)
- 클릭율 (Click Rate)
- MVP URL 클릭 추적

### 3. 자동화 (Marketing Automation)
- 신청 후 3일 뒤 후속 이메일 자동 발송
- 14일 체험 종료 전 알림 이메일
- 관심도에 따른 개인화 이메일

---

## 💡 고급 기능

### 1. 이메일 A/B 테스트
```javascript
// 제목 A/B 테스트
var subjectA = "[Pangea] 무료 데모를 시작하세요! 🚀";
var subjectB = "[Pangea] 14일 무료 체험 시작!";
```

### 2. SMS 발송 (Brevo SMS 기능)
```javascript
function sendSMSViaBrevo(data) {
  var url = "https://api.brevo.com/v3/transactionalSMS/sms";
  // SMS 발송 코드
}
```

### 3. 커스텀 필드 추가
```javascript
"attributes": {
  "SIGNUP_SOURCE": "Landing Page",
  "SIGNUP_DATE": timestamp,
  "DEMO_EXPIRY": expiryDate
}
```

---

## 🔧 문제 해결

### ❌ Brevo API 키 오류
**해결:**
1. API 키가 정확한지 확인
2. API 키 권한 확인 (Contacts, Email 권한 필요)

### ❌ 발신자 이메일 인증 안 됨
**해결:**
1. Brevo → **Senders & IP** 확인
2. 이메일 인증 링크 다시 받기

### ❌ 이메일이 스팸함에 감
**해결:**
1. SPF, DKIM 설정 (Brevo 가이드 참고)
2. 도메인 이메일 사용 권장 (Gmail보다)

### ❌ 리스트 ID를 못 찾겠어요
**해결:**
1. Brevo → **Contacts** → **Lists**
2. 리스트 클릭 → URL에서 숫자 확인

---

## 📈 무료 플랜 제한

| 항목 | 제한 |
|------|------|
| 이메일 발송 | 월 300통 |
| 연락처 | 무제한 |
| SMS | 유료 (별도 충전) |
| API 호출 | 무제한 |

💡 **TIP**: 월 300통 초과 시 유료 플랜 전환 ($25/월 ~ 20,000통)

---

## 🎉 완료!

이제 "무료 데모 신청하기" 버튼을 클릭하면:

1. ✅ Google Sheets에 저장
2. ✅ **Brevo에 연락처 자동 추가**
3. ✅ **이메일로 MVP URL 자동 발송**
4. ✅ GA4 전환 추적

**완전 자동화로 고객 관리부터 이메일 발송까지 한 번에!** 🚀

---

## 🆚 Google Apps Script vs Brevo 비교

| 기능 | Google Apps Script | Brevo |
|------|-------------------|-------|
| 이메일 발송 | ✅ 하루 100통 | ✅ 월 300통 |
| 연락처 관리 | ❌ (수동) | ✅ (자동 CRM) |
| 이메일 통계 | ❌ | ✅ (오픈율, 클릭율) |
| 템플릿 관리 | ❌ (코드) | ✅ (시각적 편집기) |
| 자동화 | ❌ | ✅ (마케팅 자동화) |
| 난이도 | 쉬움 | 쉬움 |

**추천**: Brevo 사용 (무료이면서 기능이 훨씬 강력!) ⭐️

---

## 📞 문의

궁금한 점이 있으시면 언제든지 물어보세요! 😊
