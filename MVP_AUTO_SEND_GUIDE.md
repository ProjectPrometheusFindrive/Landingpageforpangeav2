# MVP URL 자동 발송 설정 가이드 📧📱

## 🎯 목표
무료 데모 신청 시 **MVP URL을 이메일과 SMS로 자동 발송**하는 시스템 구축

---

## 📋 방법 비교표

| 방법 | 이메일 | SMS | 비용 | 난이도 | 설정 시간 |
|------|--------|-----|------|--------|----------|
| **방법 1** (추천) | ✅ Gmail 무료 | ❌ 없음 | 무료 | ⭐️⭐️ 쉬움 | 5분 |
| **방법 2** | ✅ Gmail 무료 | ✅ Aligo SMS | 건당 8~15원 | ⭐️⭐️⭐️ 보통 | 15분 |
| **방법 3** | ✅ SendGrid | ✅ Twilio | 월 $15~ | ⭐️⭐️⭐️⭐️ 어려움 | 30분 |

---

## ✅ 방법 1: 이메일만 자동 발송 (완전 무료 🎉)

### 특징:
- ✅ **완전 무료** (하루 100통까지)
- ✅ Google Apps Script만 사용
- ✅ 설정 5분이면 끝
- ❌ SMS는 발송 안 됨 (이메일만)

### 📝 설정 방법

#### 1단계: 기존 Google Apps Script 코드 수정

`/GOOGLE_SHEETS_CONNECTION_GUIDE.md`에서 설정한 Google Apps Script를 아래 코드로 **완전히 교체**하세요:

```javascript
// MVP URL 설정 (여기만 수정하세요!)
var MVP_URL = "https://your-mvp-app.com"; // ⬅️ 실제 MVP URL로 변경
var SENDER_NAME = "Pangea 팀";

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
    
    // ✨ 이메일 자동 발송
    if (data.email) {
      sendWelcomeEmail(data);
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

// 이메일 발송 함수
function sendWelcomeEmail(data) {
  var recipientEmail = data.email;
  var recipientName = data.name || '고객님';
  
  // 이메일 제목
  var subject = "[Pangea] 무료 데모 체험을 시작하세요! 🚀";
  
  // 이메일 본문 (HTML)
  var htmlBody = `
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
          <p style="font-size: 16px;"><strong>${recipientName}</strong>님, 안녕하세요!</p>
          
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
              <li>담당자가 1일 이내 연락 드립니다</li>
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
  
  // 텍스트 버전 (HTML 미지원 이메일 클라이언트용)
  var plainBody = `
${recipientName}님, 안녕하세요!

Pangea의 무료 데모를 신청해주셔서 감사합니다.
아래 링크를 클릭하여 지금 바로 체험을 시작하세요!

🚀 MVP 체험하기: ${MVP_URL}

📌 체험 안내:
- 무료 체험 기간: 14일
- 모든 기능 제한 없이 사용 가능
- 데모 데이터로 실제 시뮬레이션
- 담당자가 1일 이내 연락 드립니다

궁금하신 점이 있으시면 언제든지 답장해주세요.

감사합니다,
${SENDER_NAME}

---
이 메일은 Pangea 무료 데모 신청 시 자동으로 발송됩니다.
회사명: 플로 | 주소: 경기도 수원시 권선구 당수로129번길 10
  `;
  
  // 이메일 발송
  MailApp.sendEmail({
    to: recipientEmail,
    subject: subject,
    htmlBody: htmlBody,
    body: plainBody,
    name: SENDER_NAME
  });
  
  Logger.log('이메일 발송 완료: ' + recipientEmail);
}
```

#### 2단계: MVP URL 수정
코드 상단의 `MVP_URL` 변수를 **실제 MVP 주소**로 변경하세요:

```javascript
var MVP_URL = "https://your-mvp-app.com"; // ⬅️ 여기 수정!
```

예시:
```javascript
var MVP_URL = "https://pangea-demo.vercel.app";
var MVP_URL = "https://mvp.pangea.co.kr";
var MVP_URL = "https://demo.yourdomain.com";
```

#### 3단계: 저장 및 재배포
1. 💾 **저장** 버튼 클릭
2. 🚀 **배포** → **배포 관리** 선택
3. ✏️ 연필 아이콘 클릭 → **버전: 새 버전** 선택
4. **배포** 클릭

#### 4단계: 테스트
1. 웹사이트에서 "무료 데모 신청하기" 클릭
2. 실제 이메일 주소로 신청
3. 이메일 수신함 확인 (스팸함도 확인!)

---

## ⚡️ 방법 2: 이메일 + SMS 자동 발송 (추천 ⭐️)

### 특징:
- ✅ 이메일 무료 (Gmail)
- ✅ SMS 자동 발송 (한국 서비스)
- 💰 SMS 1건당 약 8~15원
- 🇰🇷 한국 전화번호 지원

### 📱 SMS 서비스 선택

| 서비스 | 가격 | API 난이도 | 특징 |
|--------|------|-----------|------|
| **Aligo** | 건당 8원~ | ⭐️⭐️ 쉬움 | 국내 최저가, API 간단 |
| **문자나라** | 건당 9원~ | ⭐️⭐️⭐️ 보통 | 대량 발송 특화 |
| **카카오 알림톡** | 건당 12원~ | ⭐️⭐️⭐️⭐️ 어려움 | 스팸 차단 없음, 브랜딩 |

**추천: Aligo** (가장 간단하고 저렴)

---

### 🔧 Aligo SMS 설정 (15분)

#### 1단계: Aligo 회가입

1. [Aligo 홈페이지](https://smartsms.aligo.in) 접속
2. 회원가입 (사업자 등록증 필요)
3. 로그인 후 **SMS 충전** (1만원 = 약 1,250건)

#### 2단계: API 키 발급

1. **마이페이지** → **API 키 관리**
2. **API Key** 복사 (예: `abcd1234efgh5678`)
3. **User ID** 확인 (가입한 아이디)

#### 3단계: 발신번호 등록

1. **발신번호 관리** → **발신번호 등록**
2. 회사 전화번호 입력 (예: 02-1234-5678)
3. 서류 업로드 (사업자등록증)
4. 승인 대기 (1~2일 소요)

#### 4단계: Google Apps Script 수정

기존 코드에 SMS 발송 함수를 추가하세요:

```javascript
// ========== 설정 영역 (여기만 수정) ==========
var MVP_URL = "https://your-mvp-app.com"; // MVP URL
var SENDER_NAME = "Pangea 팀";

// Aligo SMS API 설정
var ALIGO_API_KEY = "your_api_key_here"; // ⬅️ Aligo API Key
var ALIGO_USER_ID = "your_user_id"; // ⬅️ Aligo User ID
var ALIGO_SENDER = "02-1234-5678"; // ⬅️ 등록된 발신번호
// ==========================================

function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);
    var timestamp = Utilities.formatDate(new Date(), "Asia/Seoul", "yyyy-MM-dd HH:mm:ss");
    
    sheet.appendRow([
      timestamp,
      data.name || '',
      data.email || '',
      data.phone || '',
      data.company || '',
      data.vehicles || '',
      data.message || ''
    ]);
    
    // ✨ 이메일 발송
    if (data.email) {
      sendWelcomeEmail(data);
    }
    
    // ✨ SMS 발송
    if (data.phone) {
      sendWelcomeSMS(data);
    }
    
    return ContentService
      .createTextOutput(JSON.stringify({
        success: true,
        message: '신청이 완료되었습니다. 이메일과 문자를 확인해주세요.'
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({
        success: false,
        message: error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// 이메일 발송 함수 (방법 1과 동일)
function sendWelcomeEmail(data) {
  // ... (방법 1의 코드 사용)
}

// SMS 발송 함수
function sendWelcomeSMS(data) {
  var recipientPhone = data.phone.replace(/-/g, ''); // 하이픈 제거
  var recipientName = data.name || '고객님';
  
  // SMS 내용 (90자 이내 권장, LMS는 2000자까지 가능)
  var message = `[Pangea] ${recipientName}님, 무료 데모 신청이 완료되었습니다!\n\n` +
                `지금 바로 체험해보세요:\n${MVP_URL}\n\n` +
                `문의: ${ALIGO_SENDER}`;
  
  // Aligo API 호출
  var url = "https://apis.aligo.in/send/";
  var payload = {
    'key': ALIGO_API_KEY,
    'user_id': ALIGO_USER_ID,
    'sender': ALIGO_SENDER,
    'receiver': recipientPhone,
    'msg': message,
    'msg_type': 'LMS', // SMS(90자) 또는 LMS(2000자)
    'title': 'Pangea 무료 데모' // LMS 제목
  };
  
  var options = {
    'method': 'post',
    'payload': payload,
    'muteHttpExceptions': true
  };
  
  try {
    var response = UrlFetchApp.fetch(url, options);
    var result = JSON.parse(response.getContentText());
    
    if (result.result_code === '1') {
      Logger.log('SMS 발송 성공: ' + recipientPhone);
    } else {
      Logger.log('SMS 발송 실패: ' + result.message);
    }
  } catch (error) {
    Logger.log('SMS 발송 오류: ' + error.toString());
  }
}
```

#### 5단계: API 정보 입력

코드 상단의 설정 영역을 수정하세요:

```javascript
var MVP_URL = "https://pangea-demo.vercel.app";
var SENDER_NAME = "Pangea 팀";
var ALIGO_API_KEY = "abcd1234efgh5678"; // ⬅️ 실제 API Key
var ALIGO_USER_ID = "your_id"; // ⬅️ 실제 User ID
var ALIGO_SENDER = "02-1234-5678"; // ⬅️ 승인된 발신번호
```

#### 6단계: 저장 및 재배포

1. 💾 **저장**
2. 🚀 **배포** → **배포 관리** → ✏️ **새 버전** → **배포**

#### 7단계: 테스트

1. 웹사이트에서 데모 신청
2. 이메일 + 문자 모두 수신 확인

---

## 🎯 SMS 메시지 템플릿 예시

### 📱 단문 SMS (90자 이내, 건당 8원)
```
[Pangea] 홍길동님, 무료 데모 신청 완료!
체험하기: https://bit.ly/pangea-mvp
```

### 📱 장문 LMS (2000자, 건당 15원)
```
[Pangea] 홍길동님, 무료 데모 신청이 완료되었습니다!

지금 바로 체험해보세요:
https://pangea-demo.vercel.app

✅ 무료 체험 기간: 14일
✅ 모든 기능 제한 없음
✅ 담당자 1일 이내 연락

궁금한 점이 있으시면 연락주세요.
문의: 02-1234-5678
```

### 📱 카카오 알림톡 (추가 설정 필요)
- 스팸 차단 없음
- 브랜드 로고 표시
- 건당 12원
- 설정이 복잡하지만 전환율 높음

---

## 📊 비용 계산기

### Aligo SMS 비용
| 월 신청 건수 | SMS 비용 | 총 비용 |
|-------------|---------|---------|
| 10건 | 80원 | 80원 |
| 50건 | 400원 | 400원 |
| 100건 | 800원 | 800원 |
| 500건 | 4,000원 | 4,000원 |

**이메일은 완전 무료!** (하루 100통 제한)

---

## 🧪 테스트 체크리스트

### ✅ 이메일 테스트
- [ ] 이메일이 정상적으로 도착하는가?
- [ ] MVP URL 링크가 정확한가?
- [ ] HTML 디자인이 깨지지 않는가?
- [ ] 스팸함에 들어가지 않는가?

### ✅ SMS 테스트
- [ ] 문자가 정상적으로 도착하는가?
- [ ] MVP URL이 정확한가?
- [ ] 발신번호가 정상 표시되는가?
- [ ] 문자 길이가 적절한가?

### ✅ Google Sheets 테스트
- [ ] 데이터가 정상적으로 저장되는가?
- [ ] 시간이 한국 시간으로 기록되는가?

---

## 🔧 문제 해결

### ❌ 이메일이 안 와요
**해결:**
1. Gmail 스팸함 확인
2. Apps Script 실행 로그 확인: **실행 기록** 클릭
3. 이메일 주소 오타 확인

### ❌ SMS가 안 와요
**해결:**
1. Aligo 잔액 확인 (충전 필요)
2. 발신번호 승인 상태 확인
3. 전화번호 형식 확인 (하이픈 제거됨)
4. Apps Script 로그 확인

### ❌ MVP URL이 이상해요
**해결:**
1. 코드 상단 `MVP_URL` 변수 확인
2. `https://` 포함 여부 확인
3. 마지막에 `/` 없는지 확인

---

## 🚀 고급 기능 (선택사항)

### 1. URL 단축 (Bitly)
긴 MVP URL을 짧게 만들기:
```javascript
var SHORT_URL = "https://bit.ly/pangea-mvp";
```

### 2. 시간대별 발송
야간에는 발송하지 않기:
```javascript
function shouldSendSMS() {
  var hour = new Date().getHours();
  return hour >= 9 && hour < 21; // 오전 9시 ~ 오후 9시만
}
```

### 3. 재발송 방지
같은 이메일/전화번호로 1시간 이내 중복 신청 시 발송 제한

---

## 🎉 완료!

이제 "무료 데모 신청하기" 버튼을 클릭하면:

### 방법 1 (무료):
1. ✅ Google Sheets에 저장
2. ✅ **이메일로 MVP URL 자동 발송**
3. ✅ GA4 전환 추적

### 방법 2 (부분 유료):
1. ✅ Google Sheets에 저장
2. ✅ **이메일로 MVP URL 자동 발송**
3. ✅ **SMS로 MVP URL 자동 발송**
4. ✅ GA4 전환 추적

**완전 자동화로 고객이 즉시 MVP를 체험할 수 있습니다!** 🚀

---

## 💡 추천 설정

**소규모 사업 (~100건/월):** 방법 1 (이메일만)
- 완전 무료
- 이메일 확인율이 높음

**본격 마케팅 (100건/월~):** 방법 2 (이메일 + SMS)
- SMS 전환율이 이메일보다 2~3배 높음
- 비용 대비 효과 탁월

**문의사항이 있으시면 언제든지 물어보세요!** 😊
