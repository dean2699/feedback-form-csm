// Code.gs
function doGet(e) {
  return HtmlService.createHtmlOutputFromFile('index');
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
