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
  output.setTitle("Client Feedback");
  output.setFaviconUrl('[SET_IMAGE_LINK].png');
  return output;
}

function doPost(e) {
  var formData = JSON.parse(e.postData.contents);
  return ContentService.createTextOutput(submitForm(formData));
}

function submitForm(formData) {
  var sheet = SpreadsheetApp.openById('[INPUT_GOOGLE_LINK]').getSheetByName("CLIENT PROFILE SHEET");
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
  var sheet = SpreadsheetApp.openById('[INPUT_GOOGLE_LINK]').getSheetByName("CSM SHEET");
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

function sortDataToSheets() {
  // Get the latest client profile and CSM sheet values
  var client_values = client_profile_sheet.getRange(lastrow_cps, 1, 1, 9).getValues()[0];
  var csm_values = csm_sheet.getRange(lastrow_csm, 1, 1, 14).getValues()[0];
  
  // Destructure the values from the client profile sheet
  var [date_value, , name_value, , age_value, region_value, gender_value, type_value, pwd_value] = client_values;
  var trigger = client_values[1];
  
  // Destructure the values from the CSM sheet
  var [, awareness_value, visibility_value, helpfulness_value, sqd0_value, sqd1_value, sqd2_value, sqd3_value, sqd4_value, sqd5_value, sqd6_value, sqd7_value, sqd8_value, comments_value] = csm_values;
  
  // Determine the appropriate sheet based on the trigger value
  var data_range;

  if (trigger === "Medical Assistance") {
    data_range = medical_assistance_sheet.getRange(lastrow_ma + 1, 1, 1, 20);

  } else if (trigger === "Burial Assistance") {
    data_range = burial_assistance_sheet.getRange(lastrow_ba + 1, 1, 1, 20);

  } else {
    Logger.log("Trigger not recognized: " + trigger);
    return; // Exit the function if trigger is not recognized
  }
  
  // Define the data to be written into the selected sheet
  var data = [
    date_value, name_value, age_value, region_value, gender_value, type_value, pwd_value,
    awareness_value, visibility_value, helpfulness_value,sqd0_value, sqd1_value, sqd2_value, 
    sqd3_value, sqd4_value, sqd5_value, sqd6_value, sqd7_value, sqd8_value, comments_value
  ];
  
  // Write the data to the selected range
  data_range.setValues([data]);
}