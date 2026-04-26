function doGet(e) {
  try {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var p = e.parameter;

    var sheets = ss.getSheets();
    var pkg = null;
    for (var i = 0; i < sheets.length; i++) {
      if (sheets[i].getName().toLowerCase() === "packages") {
        pkg = sheets[i];
        break;
      }
    }
    if (!pkg) {
      throw new Error("Sheet Packages not found");
    }

    pkg.appendRow([
      p["Timestamp"] || new Date().toLocaleString(),
      p["Category"] || "",
      p["Name"] || "",
      p["Phone Number"] || "",
      p["Email"] || ""
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ result: "success" }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ result: "error", message: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
