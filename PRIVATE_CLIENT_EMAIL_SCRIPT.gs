/**
 * Google Apps Script for Email Notifications - Private Client Inquiry Form
 * This script sends an email when a new Private Client Inquiry is submitted
 * Attach this script to the SPREADSHEET linked to your Google Form
 */

// Email configuration
const CONFIG = {
    RECIPIENT_EMAIL: "info@trueinfluencemethod.com",
    EMAIL_SUBJECT: "New Private Client Inquiry - True Influence Method",
    WEBSITE_NAME: "True Influence Method",
    WEBSITE_URL: "trueinfluencemethod.com",
};

/**
 * Validate email address format
 * @param {string} email - Email address to validate
 * @return {boolean} - True if email is valid
 */
function isValidEmail(email) {
    if (!email || typeof email !== "string") {
        return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

/**
 * Main function that triggers on form submission
 * This function is triggered when a new row is added to the spreadsheet
 * @param {Object} e - The form submission event object
 */
function onFormSubmit(e) {
    try {
        // Log the event for debugging
        Logger.log("=== Private Client Inquiry Form Submission Triggered ===");
        Logger.log(
            "Event type: " + (e ? "Event object present" : "No event object"),
        );

        if (!e) {
            Logger.log("No event object - script was run manually");
            return;
        }

        // Get range that was edited (the new row)
        const range = e.range;
        const sheet = range.getSheet();
        const row = range.getRow();

        Logger.log("New row added: " + row);

        // Get all values from the new row
        const values = range.getValues()[0];
        Logger.log("Row values: " + JSON.stringify(values));
        Logger.log("Number of columns: " + values.length);

        // Extract data based on column order
        // Column order: Timestamp (0), Full Name (1), Email (2), Phone (3), Website (4),
        // Identifying the "Block" (5), The Vision (6), Outcomes (7),
        // Current Scope & Legacy (8), Investment (9), Additional Information (10)
        const timestamp = values[0];
        const fullName = values[1];
        const email = values[2];
        const phone = values[3];
        const website = values[4];
        const storyBlock = values[5];
        const visionGoal = values[6];
        const outcomeGoal = values[7];
        const professionalPath = values[8];
        const investment = values[9];
        const additionalInfo = values[10];

        Logger.log("Extracted data:");
        Logger.log("  Full Name: " + fullName);
        Logger.log("  Email: " + email);
        Logger.log("  Email valid: " + isValidEmail(email));
        Logger.log("  Phone: " + phone);
        Logger.log("  Investment: " + investment);

        // Validate email before proceeding
        if (!isValidEmail(email)) {
            Logger.log("WARNING: Invalid email address detected: " + email);
            Logger.log("Skipping email notification due to invalid email");

            // Send error notification about invalid email
            MailApp.sendEmail({
                to: CONFIG.RECIPIENT_EMAIL,
                subject: "WARNING - Invalid Email in Private Client Inquiry",
                htmlBody: `
          <h2>Invalid Email Address Detected</h2>
          <p><strong>Row:</strong> ${row}</p>
          <p><strong>Invalid Email:</strong> ${email || "Empty"}</p>
          <p><strong>Full Name:</strong> ${fullName || "Not provided"}</p>
          <p><strong>Timestamp:</strong> ${timestamp || "Unknown"}</p>
          <p>Please check the spreadsheet and contact the submitter directly if needed.</p>
        `,
            });
            return;
        }

        // Send email notification
        sendEmailNotification({
            timestamp: timestamp,
            fullName: fullName,
            email: email,
            phone: phone,
            website: website,
            storyBlock: storyBlock,
            visionGoal: visionGoal,
            outcomeGoal: outcomeGoal,
            professionalPath: professionalPath,
            investment: investment,
            additionalInfo: additionalInfo,
        });

        Logger.log("Email sent successfully!");
    } catch (error) {
        Logger.log("ERROR in onFormSubmit: " + error.toString());
        Logger.log("Error stack: " + error.stack);

        // Send error notification email
        MailApp.sendEmail({
            to: CONFIG.RECIPIENT_EMAIL,
            subject:
                "ERROR - " + CONFIG.WEBSITE_NAME + " Private Client Inquiry",
            htmlBody: `
        <h2>Error Processing Private Client Inquiry</h2>
        <p><strong>Error:</strong> ${error.toString()}</p>
        <p><strong>Stack:</strong> ${error.stack}</p>
        <p>Please check Google Apps Script execution logs for more details.</p>
      `,
        });
    }
}

/**
 * Send email notification with form data
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
          max-width: 650px;
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
        .header .badge {
          display: inline-block;
          background-color: #d4952a;
          color: #1a1a4e;
          padding: 8px 16px;
          border-radius: 4px;
          font-size: 12px;
          font-weight: bold;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-top: 20px;
        }
        .content {
          padding: 40px 30px;
        }
        .section {
          margin-bottom: 35px;
        }
        .section-title {
          font-family: 'Georgia', 'Times New Roman', serif;
          font-size: 14px;
          text-transform: uppercase;
          letter-spacing: 2px;
          color: #d4952a;
          margin-bottom: 15px;
          font-weight: bold;
          border-bottom: 1px solid rgba(212, 149, 42, 0.3);
          padding-bottom: 8px;
        }
        .field {
          margin-bottom: 20px;
        }
        .label {
          font-family: 'Georgia', 'Times New Roman', serif;
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          color: rgba(250, 248, 245, 0.6);
          margin-bottom: 8px;
          font-weight: bold;
        }
        .value {
          background-color: rgba(250, 248, 245, 0.05);
          border: 1px solid rgba(250, 248, 245, 0.1);
          border-left: 4px solid #d4952a;
          padding: 16px;
          border-radius: 6px;
          font-size: 15px;
          color: #faf8f5;
          line-height: 1.7;
        }
        .value.multiline {
          white-space: pre-wrap;
        }
        .checkbox-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .checkbox-list li {
          padding: 8px 0;
          padding-left: 24px;
          position: relative;
          line-height: 1.6;
          color: #faf8f5;
        }
        .checkbox-list li:before {
          content: "✓";
          position: absolute;
          left: 0;
          color: #d4952a;
          font-weight: bold;
        }
        .investment-highlight {
          background-color: rgba(212, 149, 42, 0.1);
          border-left-color: #d4952a;
          border-left-width: 6px;
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
          width: 80px;
          height: 2px;
          background-color: #d4952a;
          margin: 20px auto;
        }
        .contact-info {
          background-color: rgba(212, 149, 42, 0.05);
          border: 1px solid rgba(212, 149, 42, 0.2);
          padding: 20px;
          border-radius: 8px;
          margin-top: 20px;
        }
        .contact-info p {
          margin: 5px 0;
          font-size: 14px;
          color: #faf8f5;
        }
        .contact-info strong {
          color: #d4952a;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>New Private Client Inquiry</h1>
          <div class="subtitle">True Influence Method</div>
          <div class="divider"></div>
          <div class="badge">Phase 1 & Private Training Application</div>
        </div>
        
        <div class="content">
          <!-- Section 1: Contact Information -->
          <div class="section">
            <div class="section-title">Contact Information</div>
            
            <div class="field">
              <div class="label">Full Name</div>
              <div class="value">${formData.fullName || "Not provided"}</div>
            </div>
            
            <div class="field">
              <div class="label">Email Address</div>
              <div class="value">${formData.email || "Not provided"}</div>
            </div>
            
            <div class="field">
              <div class="label">Phone Number</div>
              <div class="value">${formData.phone || "Not provided"}</div>
            </div>
            
            <div class="field">
              <div class="label">Website / LinkedIn Profile</div>
              <div class="value">${formData.website || "Not provided"}</div>
            </div>
          </div>
          
          <!-- Section 2: Story Assessment -->
          <div class="section">
            <div class="section-title">Story Assessment</div>
            
            <div class="field">
              <div class="label">Identifying the "Block"</div>
              <div class="value">
                ${
                    formData.storyBlock
                        ? '<ul class="checkbox-list">' +
                          formData.storyBlock
                              .split(",")
                              .map((item) => `<li>${item.trim()}</li>`)
                              .join("") +
                          "</ul>"
                        : "Not provided"
                }
              </div>
            </div>
            
            <div class="field">
              <div class="label">Primary Goal (The "Why")</div>
              <div class="value">${formData.visionGoal || "Not provided"}</div>
            </div>
            
            <div class="field">
              <div class="label">Success Outcome (90 Days)</div>
              <div class="value">${formData.outcomeGoal || "Not provided"}</div>
            </div>
          </div>
          
          <!-- Section 3: Professional Context -->
          <div class="section">
            <div class="section-title">Professional Context</div>
            
            <div class="field">
              <div class="label">Current Professional Path</div>
              <div class="value">${
                  formData.professionalPath || "Not provided"
              }</div>
            </div>
          </div>
          
          <!-- Section 4: Investment & Additional Info -->
          <div class="section">
            <div class="section-title">Investment & Additional Information</div>
            
            <div class="field">
              <div class="label">Investment Readiness</div>
              <div class="value investment-highlight">${
                  formData.investment || "Not provided"
              }</div>
            </div>
            
            <div class="field">
              <div class="label">Additional Information for Joanna</div>
              <div class="value multiline">${
                  formData.additionalInfo || "Not provided"
              }</div>
            </div>
          </div>
          
          <!-- Contact Info Box -->
          <div class="contact-info">
            <p><strong>Email:</strong> ${formData.email || "Not provided"}</p>
            <p><strong>Phone:</strong> ${formData.phone || "Not provided"}</p>
            <p><strong>Website:</strong> ${
                formData.website || "Not provided"
            }</p>
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
                          timeZoneName: "short",
                      })
                    : "Unknown"
            }
          </div>
        </div>
        
        <div class="footer">
          <p>This message was sent from the Private Client Inquiry form at</p>
          <p><a href="https://${CONFIG.WEBSITE_URL}">${
        CONFIG.WEBSITE_URL
    }</a></p>
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
 * Test function to verify email sending works
 * Run this function manually to test email functionality
 */
function testEmail() {
    const testData = {
        timestamp: new Date(),
        fullName: "Test Client",
        email: "test@example.com",
        phone: "+1 (555) 123-4567",
        website: "https://example.com",
        storyBlock:
            "I feel fear or anxiety when I think about speaking in public., I know I have a powerful story, but I don't know exactly what it is or how to structure it.",
        visionGoal: "Building my business/personal brand",
        outcomeGoal:
            "Clarity in my message, and how it connects to my business",
        professionalPath:
            "Emerging Leader/Entrepreneur (Ready to master my message)",
        investment:
            "Yes, I am ready to invest in the $20,000 Beginning Private Training Experience.",
        additionalInfo:
            "Looking forward to working with Joanna to transform my story and leadership presence.",
    };

    try {
        sendEmailNotification(testData);
        Logger.log("Test email sent successfully!");
        SpreadsheetApp.getUi().alert(
            "Success!",
            "Test email has been sent to " + CONFIG.RECIPIENT_EMAIL,
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
 * Run this to see current data in your spreadsheet
 */
function debugSpreadsheet() {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    const data = sheet.getDataRange().getValues();

    Logger.log("=== Private Client Inquiry Spreadsheet Debug Info ===");
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

/**
 * Setup function to create the trigger automatically
 * Run this once to set up the form submission trigger
 */
function setupTrigger() {
    // Delete any existing triggers
    const triggers = ScriptApp.getProjectTriggers();
    triggers.forEach((trigger) => {
        if (trigger.getHandlerFunction() === "onFormSubmit") {
            ScriptApp.deleteTrigger(trigger);
        }
    });

    // Create new trigger
    ScriptApp.newTrigger("onFormSubmit")
        .forSpreadsheet(SpreadsheetApp.getActiveSpreadsheet())
        .onFormSubmit()
        .create();

    SpreadsheetApp.getUi().alert(
        "Success!",
        "Form submission trigger has been set up. You will receive email notifications for new Private Client Inquiry submissions.",
        SpreadsheetApp.getUi().ButtonSet.OK,
    );
}
