/**
 * Google Apps Script for Vault Registration Email Notifications
 * This script sends an email when the Vault Registration form is submitted
 * Attach this script to the SPREADSHEET, not the form
 */

// Email configuration
const CONFIG = {
    RECIPIENT_EMAIL: "joanna@trueinfluencemethod.com",
    EMAIL_SUBJECT: "New Vault Registration - True Influence Method",
    WEBSITE_NAME: "True Influence Method",
    WEBSITE_URL: "trueinfluencemethod.com",
    VAULT_SESSION_INFO: "First Fridays at 12 PM MST",
    // Zoom meeting details - UPDATE THESE WITH YOUR ACTUAL ZOOM DETAILS
    ZOOM_MEETING_LINK: "https://zoom.us/j/YOUR_MEETING_ID",
    ZOOM_MEETING_PASSWORD: "YOUR_PASSWORD",
};

/**
 * Main function that triggers on form submission
 * This function is triggered when a new row is added to the spreadsheet
 * @param {Object} e - The form submission event object
 */
function onFormSubmit(e) {
    try {
        // Log the event for debugging
        Logger.log("=== Vault Registration Form Submission Triggered ===");
        Logger.log(
            "Event type: " + (e ? "Event object present" : "No event object"),
        );

        if (!e) {
            Logger.log("No event object - script was run manually");
            return;
        }

        // Get the range that was edited (the new row)
        const range = e.range;
        const sheet = range.getSheet();
        const row = range.getRow();

        Logger.log("New row added: " + row);

        // Get all values from the new row
        const values = range.getValues()[0];
        Logger.log("Row values: " + JSON.stringify(values));

        // Extract data based on column order (adjust indices if needed)
        // Column order: Timestamp (0), First Name (1), Last Name (2), Email (3), Mobile Number (4), Role (5), Speaking Challenge (6), Consent (7)
        const timestamp = values[0];
        const firstName = values[1];
        const lastName = values[2];
        const email = values[3];
        const mobileNumber = values[4];
        const role = values[5];
        const speakingChallenge = values[6];
        const consentUpdates = values[7];

        Logger.log("Extracted data:");
        Logger.log("  Name: " + firstName + " " + lastName);
        Logger.log("  Email: " + email);
        Logger.log("  Mobile: " + mobileNumber);
        Logger.log("  Role: " + role);
        Logger.log("  Challenge: " + speakingChallenge);
        Logger.log("  Consent: " + consentUpdates);

        // Send email notification to Joanna
        sendEmailNotification({
            firstName: firstName,
            lastName: lastName,
            email: email,
            mobileNumber: mobileNumber,
            role: role,
            speakingChallenge: speakingChallenge,
            consentUpdates: consentUpdates,
            timestamp: timestamp,
        });

        // Send confirmation email to registrant
        if (email) {
            sendConfirmationEmail({
                firstName: firstName,
                lastName: lastName,
                email: email,
                mobileNumber: mobileNumber,
                role: role,
                speakingChallenge: speakingChallenge,
            });
        }

        Logger.log("Emails sent successfully!");
    } catch (error) {
        Logger.log("ERROR in onFormSubmit: " + error.toString());
        Logger.log("Error stack: " + error.stack);

        // Send error notification email
        MailApp.sendEmail({
            to: CONFIG.RECIPIENT_EMAIL,
            subject: "ERROR - " + CONFIG.WEBSITE_NAME + " Vault Registration",
            htmlBody: `
        <h2>Error Processing Vault Registration</h2>
        <p><strong>Error:</strong> ${error.toString()}</p>
        <p><strong>Stack:</strong> ${error.stack}</p>
        <p>Please check the Google Apps Script execution logs for more details.</p>
      `,
        });
    }
}

/**
 * Send email notification to Joanna with form data
 * @param {Object} formData - Object containing all form fields
 */
function sendEmailNotification(formData) {
    const htmlBody = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <style>
        body {
          font-family: 'Georgia', 'Times New Roman', serif;
          line-height: 1.6;
          color: #faf8f5;
          background-color: #1a1a4e;
          margin: 0;
          padding: 0;
        }
        .container {
          max-width: 600px;
          margin: 0 auto;
          background-color: #1a1a4e;
        }
        .header {
          background: linear-gradient(135deg, #1a1a4e 0%, #2d2d6e 100%);
          color: #faf8f5;
          padding: 40px 30px;
          text-align: center;
          border-bottom: 2px solid #d4952a;
        }
        .header h1 {
          margin: 0;
          font-size: 32px;
          font-family: 'Georgia', 'Times New Roman', serif;
          font-weight: normal;
          letter-spacing: 1px;
        }
        .header .subtitle {
          margin-top: 10px;
          font-size: 14px;
          color: #d4952a;
          text-transform: uppercase;
          letter-spacing: 2px;
        }
        .content {
          padding: 40px 30px;
        }
        .field {
          margin-bottom: 25px;
        }
        .label {
          font-family: 'Georgia', 'Times New Roman', serif;
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 2px;
          color: #d4952a;
          margin-bottom: 10px;
          font-weight: bold;
        }
        .value {
          background-color: rgba(250, 248, 245, 0.05);
          border: 1px solid rgba(250, 248, 245, 0.1);
          border-left: 4px solid #d4952a;
          padding: 15px 20px;
          border-radius: 8px;
          font-size: 16px;
          color: #faf8f5;
        }
        .name-value {
          font-size: 20px;
          font-weight: bold;
        }
        .role-value {
          color: #d4952a;
          font-style: italic;
        }
        .challenge {
          white-space: pre-wrap;
          line-height: 1.8;
          font-style: italic;
        }
        .consent {
          color: ${formData.consentUpdates ? "#4ade80" : "rgba(250, 248, 245, 0.5)"};
          font-weight: ${formData.consentUpdates ? "bold" : "normal"};
        }
        .timestamp {
          color: rgba(250, 248, 245, 0.5);
          font-size: 12px;
          text-align: center;
          margin-top: 40px;
          padding-top: 20px;
          border-top: 1px solid rgba(250, 248, 245, 0.1);
        }
        .footer {
          text-align: center;
          padding: 30px;
          color: rgba(250, 248, 245, 0.4);
          font-size: 12px;
        }
        .footer a {
          color: #d4952a;
          text-decoration: none;
        }
        .footer a:hover {
          color: #e8a838;
        }
        .divider {
          width: 60px;
          height: 2px;
          background-color: #d4952a;
          margin: 20px auto;
        }
        .vault-info {
          background: linear-gradient(135deg, rgba(212, 149, 42, 0.1) 0%, rgba(212, 149, 42, 0.05) 100%);
          border: 1px solid rgba(212, 149, 42, 0.3);
          border-radius: 12px;
          padding: 25px;
          margin-top: 30px;
          text-align: center;
        }
        .vault-info h3 {
          color: #d4952a;
          margin: 0 0 10px 0;
          font-family: 'Georgia', 'Times New Roman', serif;
          font-size: 18px;
        }
        .vault-info p {
          margin: 0;
          color: #faf8f5;
          font-size: 14px;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>New Vault Registration</h1>
          <div class="subtitle">Free The Vault</div>
          <div class="divider"></div>
        </div>
        
        <div class="content">
          <div class="field">
            <div class="label">Name</div>
            <div class="value name-value">${formData.firstName || ""} ${formData.lastName || ""}</div>
          </div>
          
          <div class="field">
            <div class="label">Email</div>
            <div class="value">${formData.email || "Not provided"}</div>
          </div>
          
          <div class="field">
            <div class="label">Mobile Number</div>
            <div class="value">${formData.mobileNumber || "Not provided"}</div>
          </div>
          
          <div class="field">
            <div class="label">Role</div>
            <div class="value role-value">${formData.role || "Not provided"}</div>
          </div>
          
          <div class="field">
            <div class="label">Speaking Challenge</div>
            <div class="value challenge">${formData.speakingChallenge || "Not provided"}</div>
          </div>
          
          <div class="field">
            <div class="label">Consent to Updates</div>
            <div class="value consent">${formData.consentUpdates ? "✓ Yes - Agreed to receive updates" : "No"}</div>
          </div>
          
          <div class="vault-info">
            <h3>Next Vault Session</h3>
            <p>${CONFIG.VAULT_SESSION_INFO}</p>
          </div>
          
          <div class="timestamp">
            Submitted: ${
                formData.timestamp
                    ? new Date(formData.timestamp).toLocaleString("en-US", {
                          weekday: "long",
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                          hour: "2-digit",
                          minute: "2-digit",
                      })
                    : "Unknown"
            }
          </div>
        </div>
        
        <div class="footer">
          <p>This message was sent from the Vault Registration form at</p>
          <p><a href="https://${CONFIG.WEBSITE_URL}">${CONFIG.WEBSITE_URL}</a></p>
        </div>
      </div>
    </body>
    </html>
  `;

    MailApp.sendEmail({
        to: CONFIG.RECIPIENT_EMAIL,
        subject: CONFIG.EMAIL_SUBJECT,
        htmlBody: htmlBody,
        name: CONFIG.WEBSITE_NAME,
    });
}

/**
 * Send confirmation email to the registrant
 * @param {Object} formData - Object containing registrant information
 */
function sendConfirmationEmail(formData) {
    const htmlBody = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <style>
        body {
          font-family: 'Georgia', 'Times New Roman', serif;
          line-height: 1.6;
          color: #faf8f5;
          background-color: #1a1a4e;
          margin: 0;
          padding: 0;
        }
        .container {
          max-width: 600px;
          margin: 0 auto;
          background-color: #1a1a4e;
        }
        .header {
          background: linear-gradient(135deg, #1a1a4e 0%, #2d2d6e 100%);
          color: #faf8f5;
          padding: 50px 30px;
          text-align: center;
          border-bottom: 2px solid #d4952a;
        }
        .header h1 {
          margin: 0;
          font-size: 36px;
          font-family: 'Georgia', 'Times New Roman', serif;
          font-weight: normal;
          letter-spacing: 1px;
        }
        .header .subtitle {
          margin-top: 15px;
          font-size: 14px;
          color: #d4952a;
          text-transform: uppercase;
          letter-spacing: 2px;
        }
        .content {
          padding: 50px 40px;
        }
        .welcome {
          font-size: 20px;
          line-height: 1.8;
          margin-bottom: 30px;
          color: #faf8f5;
        }
        .welcome strong {
          color: #d4952a;
        }
        .section {
          margin: 40px 0;
        }
        .section-title {
          font-family: 'Georgia', 'Times New Roman', serif;
          font-size: 18px;
          color: #d4952a;
          margin-bottom: 15px;
          font-weight: bold;
        }
        .section-content {
          background-color: rgba(250, 248, 245, 0.05);
          border: 1px solid rgba(250, 248, 245, 0.1);
          border-left: 4px solid #d4952a;
          padding: 20px;
          border-radius: 8px;
          line-height: 1.8;
        }
        .session-details {
          background: linear-gradient(135deg, rgba(212, 149, 42, 0.15) 0%, rgba(212, 149, 42, 0.05) 100%);
          border: 2px solid rgba(212, 149, 42, 0.4);
          border-radius: 16px;
          padding: 35px;
          text-align: center;
          margin: 40px 0;
        }
        .session-details h2 {
          color: #d4952a;
          margin: 0 0 15px 0;
          font-family: 'Georgia', 'Times New Roman', serif;
          font-size: 24px;
        }
        .session-details .time {
          font-size: 20px;
          margin: 0;
        }
        .session-details .description {
          font-size: 14px;
          color: rgba(250, 248, 245, 0.7);
          margin-top: 15px;
          font-style: italic;
        }
        .meeting-link {
          background: rgba(212, 149, 42, 0.1);
          border: 1px solid rgba(212, 149, 42, 0.3);
          border-radius: 8px;
          padding: 15px;
          margin-top: 20px;
        }
        .meeting-link p {
          margin: 0;
          color: #faf8f5;
        }
        .meeting-link strong {
          color: #d4952a;
        }
        .what-to-expect {
          list-style: none;
          padding: 0;
          margin: 20px 0;
        }
        .what-to-expect li {
          padding: 12px 0;
          padding-left: 35px;
          position: relative;
          border-bottom: 1px solid rgba(250, 248, 245, 0.1);
        }
        .what-to-expect li:last-child {
          border-bottom: none;
        }
        .what-to-expect li:before {
          content: "✦";
          position: absolute;
          left: 0;
          color: #d4952a;
          font-size: 20px;
        }
        .contact {
          text-align: center;
          margin-top: 50px;
          padding-top: 30px;
          border-top: 1px solid rgba(250, 248, 245, 0.1);
        }
        .contact p {
          margin: 10px 0;
          color: rgba(250, 248, 245, 0.7);
        }
        .contact a {
          color: #d4952a;
          text-decoration: none;
          font-weight: bold;
        }
        .contact a:hover {
          color: #e8a838;
        }
        .footer {
          text-align: center;
          padding: 40px;
          color: rgba(250, 248, 245, 0.4);
          font-size: 12px;
        }
        .footer a {
          color: #d4952a;
          text-decoration: none;
        }
        .divider {
          width: 80px;
          height: 2px;
          background-color: #d4952a;
          margin: 25px auto;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>Welcome to The Vault!</h1>
          <div class="subtitle">Free The Vault</div>
          <div class="divider"></div>
        </div>
        
        <div class="content">
          <p class="welcome">
            Dear <strong>${formData.firstName || "Leader"}</strong>,
          </p>
          
          <p class="welcome">
            Thank you for registering for <strong>The Vault</strong>! We're absolutely thrilled to welcome you to our monthly safe space for women leaders to tell their story.
          </p>
          
          <div class="session-details">
            <h2>Next Session</h2>
            <p class="time">${CONFIG.VAULT_SESSION_INFO}</p>
            <p class="description">A free monthly safe space for women leaders</p>
            <div class="meeting-link">
              <p style="margin: 20px 0 10px 0; color: #faf8f5;"><strong>Zoom Meeting Link:</strong></p>
              <p style="margin: 0 0 20px 0; color: #faf8f5;">
                <a href="${CONFIG.ZOOM_MEETING_LINK}" style="color: #d4952a; text-decoration: none; font-weight: bold;">${CONFIG.ZOOM_MEETING_LINK}</a>
              </p>
              <p style="margin: 0; color: #faf8f5;"><strong>Password:</strong> ${CONFIG.ZOOM_MEETING_PASSWORD}</p>
            </div>
          </div>
          
          <div class="section">
            <div class="section-title">What to Expect</div>
            <div class="section-content">
              <ul class="what-to-expect">
                <li>A supportive community of women leaders</li>
                <li>Safe space to share your story and challenges</li>
                <li>Guided discussions on speaking and leadership</li>
                <li>Connection with like-minded professionals</li>
                <li>Practical insights for your speaking journey</li>
              </ul>
            </div>
          </div>
          
          <div class="section">
            <div class="section-title">What We Noticed About You</div>
            <div class="section-content">
              <p style="margin: 0 0 15px 0;"><strong>Role:</strong> ${formData.role || "Not specified"}</p>
              ${formData.speakingChallenge ? `<p style="margin: 0;"><strong>Your Challenge:</strong> ${formData.speakingChallenge}</p>` : ""}
            </div>
          </div>
          
          <div class="section">
            <div class="section-title">What Happens Next</div>
            <div class="section-content">
              <p style="margin: 0;">You'll receive a reminder email before our next session. The Zoom meeting link and password are included above for your convenience. We'll also send you any preparation materials to help you make the most of your time in The Vault.</p>
            </div>
          </div>
          
          <div class="contact">
            <p>If you have any questions before the session, feel free to reach out:</p>
            <p><a href="mailto:joanna@trueinfluencemethod.com">joanna@trueinfluencemethod.com</a></p>
          </div>
        </div>
        
        <div class="footer">
          <p>This message was sent from the Vault Registration at</p>
          <p><a href="https://${CONFIG.WEBSITE_URL}">${CONFIG.WEBSITE_URL}</a></p>
          <p style="margin-top: 20px;">© ${new Date().getFullYear()} Joanna Horton McPherson. All rights reserved.</p>
        </div>
      </div>
    </body>
    </html>
  `;

    MailApp.sendEmail({
        to: formData.email,
        subject: "Welcome to The Vault! 🌟",
        htmlBody: htmlBody,
        name: CONFIG.WEBSITE_NAME,
    });
}

/**
 * Test function to verify email sending works
 * Run this function manually to test email functionality
 */
function testEmail() {
    const testData = {
        firstName: "Test",
        lastName: "User",
        email: "test@example.com",
        mobileNumber: "+1 (555) 123-4567",
        role: "Founder / CEO",
        speakingChallenge:
            "I struggle with confidence when speaking to large groups.",
        consentUpdates: true,
        timestamp: new Date(),
    };

    try {
        sendEmailNotification(testData);
        sendConfirmationEmail(testData);
        Logger.log("Test emails sent successfully!");
        SpreadsheetApp.getUi().alert(
            "Success!",
            "Test emails have been sent to " +
                CONFIG.RECIPIENT_EMAIL +
                " and " +
                testData.email,
            SpreadsheetApp.getUi().ButtonSet.OK,
        );
    } catch (error) {
        Logger.log("Error sending test email: " + error.toString());
        SpreadsheetApp.getUi().alert(
            "Error",
            "Failed to send test email: " + error.toString(),
            SpreadsheetApp.getUi().ButtonSet.OK,
        );
    }
}

/**
 * Debug function to check spreadsheet structure
 * Run this to see the current data in your spreadsheet
 */
function debugSpreadsheet() {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    const data = sheet.getDataRange().getValues();

    Logger.log("=== Spreadsheet Debug Info ===");
    Logger.log("Number of rows: " + data.length);
    Logger.log("Number of columns: " + data[0].length);

    // Log headers
    if (data.length > 0) {
        Logger.log("Headers: " + JSON.stringify(data[0]));
    }

    // Log last row (most recent submission)
    if (data.length > 1) {
        Logger.log("Last row: " + JSON.stringify(data[data.length - 1]));
    }
}
