const client_profile_sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("CLIENT PROFILE SHEET");
const csm_sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("CSM SHEET");
const medical_assistance_sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Medical Database")
const burial_assistance_sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Burial Database")

const lastrow_cps = client_profile_sheet.getLastRow();
const lastrow_csm = csm_sheet.getLastRow();
const lastrow_ma = medical_assistance_sheet.getLastRow();
const lastrow_ba = burial_assistance_sheet.getLastRow();

// Code.gs
function doGet(e) {
  var output = HtmlService.createHtmlOutputFromFile('index');
  output.setTitle("Southern Mindanao CSM");
  output.setFaviconUrl('https://i.imgur.com/5B9zRCt.png');
  return output;
}

function doPost(e) {
  var formData = JSON.parse(e.postData.contents);
  return ContentService.createTextOutput(submitForm(formData));
}

function submitForm(formData) {
  var sheet = SpreadsheetApp.openById('11ECQ3ltFHMelIp03PhL4nS0qFywYkvcnGcalzvAMuEQ').getSheetByName("CLIENT PROFILE SHEET");
  var response = "Client profile submitted successfully!";
  sheet.appendRow([
    new Date(),
    formData.service,
    formData.name,
    formData.contact,
    formData.age,
    formData.region,
    formData.gender,
    formData.clientType,
    formData.pwd
    // Add more fields as you expand the form
  ]);
  return response;
}

function submitFeedback(feedbackData) {
  var sheet = SpreadsheetApp.openById('11ECQ3ltFHMelIp03PhL4nS0qFywYkvcnGcalzvAMuEQ').getSheetByName("CSM SHEET");
  var response = "Client profile submitted successfully!";
  sheet.appendRow([
    new Date(), // Timestamp
    feedbackData.awareness,
    feedbackData.visibility,
    feedbackData.helpfulness,
    feedbackData.sqd0,
    feedbackData.sqd1,
    feedbackData.sqd2,
    feedbackData.sqd3,
    feedbackData.sqd4,
    feedbackData.sqd5,
    feedbackData.sqd6,
    feedbackData.sqd7,
    feedbackData.sqd8,
    feedbackData.comments
  ]);
  return response;
}

function submitFeedbackAndSort(feedbackData) {
  submitFeedback(feedbackData);
  sortDataToSheets();
}

function sortDataToSheets(){
var client_values = client_profile_sheet.getRange(lastrow_cps, 1, 1, 9).getValues()[0];
var csm_values = csm_sheet.getRange(lastrow_csm, 1, 1, 14).getValues()[0];

}
