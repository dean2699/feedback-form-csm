# Automated Sheet-Web Application Feedback-form-csm

## Overview

The Automated Sheet-Web Application Feedback-form-csm is a web application designed to gather client feedback through a structured form and automate the reporting of this feedback into Google Sheets. The feedback is sorted into two categories—Burial Assistance and Medical Assistance—and real-time updates are sent to the main office. The application uses HTML, CSS, JavaScript, Google Apps Script, Google Docs, Google Sheets, and Google Drive.

## Features

- **Language Selection**: Supports English and Filipino languages.
- **Client Profile Submission**: Collects client details and preferences.
- **Feedback Questions**: Gathers feedback through various survey questions.
- **Acknowledgement Page**: Confirms receipt of feedback and provides a thank-you message.
- **Real-time Updates**: Sends feedback data to Google Sheets and updates the main office.
- **Mobile-Friendly**: Designed to be responsive and user-friendly on both mobile and desktop devices.

## Project Structure

- `index.html`: The main HTML file containing the structure and content of the application.
- `styles.css`: The stylesheet used for styling the application.
- `script.js`: The JavaScript file handling form interactions, data validation, and submissions.
- `Code.gs`: Google Apps Script file managing data submissions and interactions with Google Sheets.

## Setup Instructions

1. **Clone the Repository**

   ```bash git clone https://github.com/dean2699/feedback-form-csm

Google Apps Script Setup

Open Google Apps Script and create a new project.
Copy the contents of Code.gs into the Apps Script editor.
Deploy the project as a web app and replace the fetch URLs in script.js with the web app URL.
Update HTML and JavaScript Files

Ensure that the index.html, styles.css, and script.js files are correctly linked and available in your project directory.
Adjust any IDs, class names, and URLs as needed based on your deployment.
Background Image

Add the background image to your project by including it in the CSS file or directly in the HTML as required.
Usage
Access the Application

Open index.html in your web browser to view the application. You should see the Language Selection page first.

Navigate Through the Form

Select a language.
Complete the Client Profile form.
Answer the Feedback Questions.
Submit the form and view the Acknowledgement page.
Data Submission

Data from the forms is automatically sent to Google Sheets and sorted into the appropriate sheets. Ensure that your Google Apps Script functions (submitForm and submitFeedbackandSort) are correctly handling the data.

Notes
Fonts and Styles: The application uses the Proxima Nova font and a color scheme of white (#F4F4F4) and green (#009700). Adjust the font size and styles in styles.css to enhance user experience.
Error Handling: Ensure proper error handling for form submissions and data processing. Review the onFailure function for error notifications.
Contributing
Contributions are welcome! Please fork the repository and submit a pull request with your changes. Ensure that your code adheres to the project's coding standards and passes any tests.

License
This project is licensed under the MIT License. See the LICENSE file for details.

Contact
For questions or further information, please contact deanferrazzini@gmail.com.