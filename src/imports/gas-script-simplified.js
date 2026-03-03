
// ===================== 설정(여기만 수정) =====================
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

    // ====== 시트 저장 (Brevo 관련 컬럼 제거) ======
    sheet.appendRow([
      timestamp,
      data.name || "",
      data.email || "",
      data.phone || "",
      data.company || "",
      data.vehicles || "",
      data.message || ""
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    // 에러 발생 시 응답
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, message: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet() {
  return ContentService.createTextOutput("OK").setMimeType(ContentService.MimeType.TEXT);
}
