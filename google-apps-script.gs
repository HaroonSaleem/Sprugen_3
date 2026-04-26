// SPRUGEN CONTACT FORM → GOOGLE SHEETS
// ─────────────────────────────────────────────────────────────
// SETUP STEPS:
//  1. Open your Google Sheet.
//  2. Go to Extensions → Apps Script.
//  3. Delete any existing code and paste this entire file.
//  4. Click Deploy → New deployment → Type: Web app
//     • Execute as:    Me
//     • Who has access: Anyone
//  5. Click Deploy, authorize when prompted, then copy the /exec URL.
//  6. In Vercel dashboard set VITE_GOOGLE_SCRIPT_URL to the new URL.
//  7. Every new version of the script requires a NEW deployment — editing
//     the code alone does NOT update the live URL.
//
// SHEETS USED:
//  • "audit forms"  — contact form submissions (Full Name, Email, Phone, Company, Objective)
//  • "Packages"     — pricing CTA submissions  (Category, Name, Phone, Email)
// ─────────────────────────────────────────────────────────────

function doGet(e) {
  try {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const p = e.parameter;

    if (p['Sheet'] === 'Packages') {
      const sheet = ss.getSheetByName('Packages');
      if (sheet.getLastRow() === 0) {
        sheet.appendRow(['Category', 'Name', 'Phone', 'Email']);
      }
      sheet.appendRow([
        p['Category'] || '',
        p['Name']     || '',
        p['Phone']    || '',
        p['Email']    || ''
      ]);
    } else {
      const sheet = ss.getSheetByName('audit forms');
      if (sheet.getLastRow() === 0) {
        sheet.appendRow([
          'Timestamp',
          'Full Name',
          'Email Address',
          'Phone Number',
          'Company Name',
          'Business Objective'
        ]);
      }
      sheet.appendRow([
        p['Timestamp']           || new Date().toLocaleString(),
        p['Full Name']           || '',
        p['Email Address']       || '',
        p['Phone Number']        || '',
        p['Company Name']        || '',
        p['Business Objective']  || ''
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
