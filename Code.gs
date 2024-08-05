// Code.gs

function doGet(e) {
  return HtmlService.createHtmlOutputFromFile('index');
}

function submitForm(formData) {
  var sheet = SpreadsheetApp.openById('11ECQ3ltFHMelIp03PhL4nS0qFywYkvcnGcalzvAMuEQ').getSheetByName("CLIENT PROFILE SHEET");
  sheet.appendRow([
    new Date(),
    formData.name,
    formData.contact,
    formData.age,
    formData.city,
    formData.gender,
    formData.clientType,
    formData.pwd
    // Add more fields as you expand the form
  ]);
  return 'Form submitted successfully!';
}

function submitFeedback(feedbackData) {
  var sheet = SpreadsheetApp.openById('11ECQ3ltFHMelIp03PhL4nS0qFywYkvcnGcalzvAMuEQ').getSheetByName("CSM SHEET");
  sheet.appendRow([
    new Date(), // Timestamp
    feedbackData.awareness,
    feedbackData.visibility,
    feedbackData.helpfulness,
    feedbackData.overallGrade,
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
}
