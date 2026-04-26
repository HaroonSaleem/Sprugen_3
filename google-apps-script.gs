function getSheetCI(ss, name) {
  var sheets = ss.getSheets();
  for (var i = 0; i < sheets.length; i++) {
    if (sheets[i].getName().toLowerCase() === name.toLowerCase()) {
      return sheets[i];
    }
  }
  return null;
}

function doGet(e) {
  try {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var p = e.parameter;
    var category = p["Category"];

    if (category) {
      var pkg = getSheetCI(ss, "Packages");
      if (!pkg) {
        throw new Error("Sheet Packages not found");
      }
      pkg.appendRow([
        p["Timestamp"] || new Date().toLocaleString(),
        category,
        p["Name"] || "",
        p["Phone Number"] || "",
        p["Email"] || ""
      ]);
    } else {
      var audit = getSheetCI(ss, "audit forms");
      if (!audit) {
        throw new Error("Sheet audit forms not found");
      }
      audit.appendRow([
        p["Timestamp"] || new Date().toLocaleString(),
        p["Full Name"] || "",
        p["Email Address"] || "",
        p["Phone Number"] || "",
        p["Company Name"] || "",
        p["Business Objective"] || ""
      ]);
    }

    return ContentService
      .createTextOutput(JSON.stringify({ result: "success" }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ result: "error", message: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
