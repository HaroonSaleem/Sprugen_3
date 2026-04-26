// SPRUGEN CONTACT FORM → GOOGLE SHEETS
// ─────────────────────────────────────────────────────────────
// SETUP STEPS:
//  1. Open your Google Sheet.
//  2. Extensions → Apps Script → paste this entire file.
//  3. Deploy → Manage deployments → edit the existing deployment
//     → Version: "New version" → Deploy  (same URL, updated code)
//     OR: Deploy → New deployment → Web app / Execute as Me / Anyone
//     then update VITE_GOOGLE_SCRIPT_URL in Vercel dashboard.
//
// ROUTING LOGIC (no exact param name matching — robust):
//  Request contains "Category" param  → write to Packages sheet
//  Request contains "Full Name" param → write to audit forms sheet
//
// SHEETS:
//  "audit forms"  — Timestamp | Full Name | Email Address | Phone Number | Company Name | Business Objective
//  "Packages"     — Category  | Name      | Phone         | Email
// ─────────────────────────────────────────────────────────────

// Case-insensitive sheet lookup so "Packages" / "PAckages" etc. all work
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

    if (p['Category']) {
      // ── Pricing modal submission → Packages sheet ──────────────
      var pkg = getSheetCI(ss, 'Packages');
      if (!pkg) throw new Error('Sheet named "Packages" not found. Check the tab name.');

      if (pkg.getLastRow() === 0) {
        pkg.appendRow(['Category', 'Name', 'Phone', 'Email']);
      }
      pkg.appendRow([
        p['Category'] || '',
        p['Name']     || '',
        p['Phone']    || '',
        p['Email']    || ''
      ]);

    } else {
      // ── Contact form submission → audit forms sheet ─────────────
      var audit = getSheetCI(ss, 'audit forms');
      if (!audit) throw new Error('Sheet named "audit forms" not found. Check the tab name.');

      if (audit.getLastRow() === 0) {
        audit.appendRow(['Timestamp', 'Full Name', 'Email Address', 'Phone Number', 'Company Name', 'Business Objective']);
      }
      audit.appendRow([
        p['Timestamp']          || new Date().toLocaleString(),
        p['Full Name']          || '',
        p['Email Address']      || '',
        p['Phone Number']       || '',
        p['Company Name']       || '',
        p['Business Objective'] || ''
      ]);
    }

    return ContentService
      .createTextOutput(JSON.stringify({ result: 'success' }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ result: 'error', message: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
