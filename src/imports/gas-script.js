
// ===================== 설정(여기만 수정) =====================
var MVP_URL = "https://your-mvp-app.com";     // (선택) 데모 링크
var SENDER_NAME = "플로";

// Brevo 설정 (⚠️ 노출된 키는 폐기/재발급 권장)
var BREVO_API_KEY = "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";
var BREVO_SENDER_EMAIL = "prometheus.rok@gmail.com"; // Brevo에서 인증된 발신자여야 함
var BREVO_SENDER_NAME = "플로";
var BREVO_LIST_ID = 2; // Brevo의 contact list id (모르면 0으로 두세요)

// 구글 시트
var SPREADSHEET_ID = "1yAxUwHmeyMMxotGOo3L3XMjuyPEXncc6fEXaZawd26w";
var SHEET_NAME = "시트1";
// ============================================================

function doPost(e) {
  try {
    if (!e || !e.postData || !e.postData.contents) {
      throw new Error("POST body가 비어있습니다.");
    }

    var data = JSON.parse(e.postData.contents);

    // 시트 연결
    var ss = SpreadsheetApp.openById(SPREADSHEET_ID);
    var sheet = ss.getSheetByName(SHEET_NAME);
    if (!sheet) throw new Error("시트를 찾을 수 없습니다: " + SHEET_NAME);

    var timestamp = Utilities.formatDate(new Date(), "Asia/Seoul", "yyyy-MM-dd HH:mm:ss");

    // ====== Brevo 결과(진단용) ======
    var brevoContactResult = "SKIP";
    var brevoEmailResult = "SKIP";

    var email = (data.email || "").trim();
    if (email) {
      brevoContactResult = addContactToBrevo_(data);
      brevoEmailResult = sendWelcomeEmailViaBrevo_(data, timestamp);
    } else {
      brevoContactResult = "SKIP(no email)";
      brevoEmailResult = "SKIP(no email)";
    }

    // ====== 시트 저장 (맨 뒤에 결과 2칸 추가) ======
    sheet.appendRow([
      timestamp,
      data.name || "",
      data.email || "",
      data.phone || "",
      data.company || "",
      data.vehicles || "",
      data.message || "",
      brevoContactResult,
      brevoEmailResult
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    // 에러도 시트에 남기고 싶으면 여기서 별도 append 가능
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, message: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function addContactToBrevo_(data) {
  var url = "https://api.brevo.com/v3/contacts";

  var payload = {
    email: data.email,
    attributes: {
      FIRSTNAME: data.name || "",
      SMS: data.phone || "",
      COMPANY: data.company || "",
      VEHICLES: data.vehicles || "",
      MESSAGE: data.message || ""
    },
    updateEnabled: true
  };

  // 리스트 ID가 1 이상일 때만 넣기 (0/빈값이면 생략)
  if (BREVO_LIST_ID && Number(BREVO_LIST_ID) > 0) {
    payload.listIds = [Number(BREVO_LIST_ID)];
  }

  var res = UrlFetchApp.fetch(url, {
    method: "post",
    contentType: "application/json",
    headers: { "api-key": BREVO_API_KEY },
    payload: JSON.stringify(payload),
    muteHttpExceptions: true
  });

  var code = res.getResponseCode();
  var text = res.getContentText();
  if (code >= 200 && code < 300) return "OK " + code;
  return "FAIL " + code + ": " + truncate_(text, 200);
}

function sendWelcomeEmailViaBrevo_(data, timestamp) {
  var url = "https://api.brevo.com/v3/smtp/email";

  var customerName = (data.name || "고객").trim();
  var subject = "[플로] " + customerName + "님, 무료 데모 신청이 접수되었습니다";

  var htmlContent = buildHtml_(data, timestamp);

  var payload = {
    sender: { name: BREVO_SENDER_NAME, email: BREVO_SENDER_EMAIL },
    to: [{ email: data.email, name: customerName }],
    subject: subject,
    htmlContent: htmlContent
  };

  var res = UrlFetchApp.fetch(url, {
    method: "post",
    contentType: "application/json",
    headers: { "api-key": BREVO_API_KEY },
    payload: JSON.stringify(payload),
    muteHttpExceptions: true
  });

  var code = res.getResponseCode();
  var text = res.getContentText();
  if (code >= 200 && code < 300) return "OK " + code;
  return "FAIL " + code + ": " + truncate_(text, 200);
}

function buildHtml_(data, timestamp) {
  function esc_(s) {
    return String(s || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  var name = esc_(data.name || "고객");
  var company = esc_(data.company || "");
  var vehicles = esc_(data.vehicles || "");
  var msg = esc_(data.message || "");

  var lines = [];
  lines.push('<div style="font-family:Arial,Malgun Gothic,sans-serif;line-height:1.6;color:#111">');
  lines.push('<h2>무료 데모 신청 접수 완료</h2>');
  lines.push('<p><b>' + name + '님</b>, 신청해주셔서 감사합니다. 담당자가 확인 후 연락드리겠습니다.</p>');
  lines.push('<p><b>접수시간</b>: ' + esc_(timestamp) + '</p>');
  if (company) lines.push('<p><b>회사명</b>: ' + company + '</p>');
  if (vehicles) lines.push('<p><b>차량대수</b>: ' + vehicles + '</p>');
  if (msg) lines.push('<p><b>문의사항</b>: ' + msg + '</p>');

  if (MVP_URL && MVP_URL.indexOf("your-mvp-app.com") === -1) {
    lines.push('<p style="margin-top:18px;">');
    lines.push('<a href="' + esc_(MVP_URL) + '" style="display:inline-block;background:#2563eb;color:#fff;padding:10px 16px;border-radius:8px;text-decoration:none;font-weight:bold;">무료 데모 시작하기</a>');
    lines.push('</p>');
  }

  lines.push('<p style="margin-top:18px;">감사합니다,<br><b>' + esc_(SENDER_NAME) + '</b></p>');
  lines.push('<p style="color:#666;font-size:12px;margin-top:22px;">본 메일은 데모 신청 확인을 위해 자동 발송되었습니다.</p>');
  lines.push('</div>');
  return lines.join("");
}

function truncate_(s, n) {
  s = String(s || "");
  return s.length > n ? s.substring(0, n) + "…" : s;
}

function doGet() {
  return ContentService.createTextOutput("OK").setMimeType(ContentService.MimeType.TEXT);
}

function testBrevoKey() {
  var url = "https://api.brevo.com/v3/account";
  var res = UrlFetchApp.fetch(url, {
    method: "get",
    headers: { "api-key": BREVO_API_KEY },
    muteHttpExceptions: true
  });
  Logger.log("code=" + res.getResponseCode());
  Logger.log(res.getContentText());
}