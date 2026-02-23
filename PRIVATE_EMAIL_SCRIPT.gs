/**
 * Google Apps Script for Private Application Form
 *
 * This script automatically sends an email to applicants when they submit
 * the Private Application Form, and sends a notification to the admin.
 *
 * SETUP INSTRUCTIONS:
 * 1. Open your Google Form
 * 2. Click Extensions > Apps Script
 * 3. Delete any existing code
 * 4. Copy and paste this entire script
 * 5. Save the script (File > Save)
 * 6. Set up a trigger (see instructions below)
 */

// ==========================================
// CONFIGURATION
// ==========================================

// Admin email - you'll receive notifications here
const ADMIN_EMAIL = "jaydee.venture@gmail.com"; // Replace with your email

// Calendly link for strategy calls
const CALENDLY_LINK = "https://calendly.com/joannahortonmcpherson/discovery";

// Your name
const YOUR_NAME = "Joanna Horton McPherson";

// Your website URL (optional)
const WEBSITE_URL = "https://trueinfluencemethod.com";

// ==========================================
// EMAIL TEMPLATES
// ==========================================

/**
 * Email sent to the applicant after submission
 */
function getApplicantEmailTemplate(formData) {
    return {
        to: formData.email,
        subject: "Your Private Application Has Been Received",
        html: `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        body {
            font-family: 'Georgia', serif;
            background-color: #1a1a4e;
            color: #faf8f5;
            margin: 0;
            padding: 20px;
            line-height: 1.6;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #1a1a4e;
        }
        .header {
            text-align: center;
            padding: 40px 20px;
            border-bottom: 1px solid #d4952a;
        }
        .header h1 {
            color: #d4952a;
            font-size: 28px;
            margin: 0 0 10px 0;
        }
        .header p {
            color: #faf8f5;
            font-size: 16px;
            margin: 0;
        }
        .content {
            padding: 40px 20px;
        }
        .section {
            margin-bottom: 30px;
        }
        .section h2 {
            color: #d4952a;
            font-size: 20px;
            margin: 0 0 15px 0;
            border-bottom: 1px solid #d4952a;
            padding-bottom: 5px;
        }
        .info-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 15px;
            margin-bottom: 20px;
        }
        .info-item {
            background-color: rgba(250, 248, 245, 0.05);
            padding: 15px;
            border-radius: 8px;
        }
        .info-item label {
            display: block;
            color: #d4952a;
            font-size: 12px;
            text-transform: uppercase;
            letter-spacing: 1px;
            margin-bottom: 5px;
        }
        .info-item span {
            color: #faf8f5;
            font-size: 14px;
        }
        .info-item.full-width {
            grid-column: 1 / -1;
        }
        .cta-button {
            display: inline-block;
            background-color: #d4952a;
            color: #1a1a4e;
            text-decoration: none;
            padding: 15px 30px;
            border-radius: 8px;
            font-weight: bold;
            font-size: 16px;
            text-align: center;
            margin-top: 20px;
        }
        .cta-button:hover {
            background-color: #e8a838;
        }
        .footer {
            text-align: center;
            padding: 30px 20px;
            border-top: 1px solid rgba(250, 248, 245, 0.1);
            color: rgba(250, 248, 245, 0.5);
            font-size: 12px;
        }
        .highlight {
            color: #d4952a;
            font-weight: bold;
        }
        @media (max-width: 600px) {
            .info-grid {
                grid-template-columns: 1fr;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Application Received</h1>
            <p>Thank you for your interest in private advisory services</p>
        </div>

        <div class="content">
            <div class="section">
                <p>Dear ${formData.firstName},</p>
                <p>Thank you for submitting your application for private advisory services. I've received your information and I'm excited to learn more about your leadership journey.</p>
                <p><span class="highlight">I need more details</span> to fully understand your situation, which we'll explore during our upcoming strategy call.</p>
            </div>

            <div class="section">
                <h2>Basic Info</h2>
                <div class="info-grid">
                    <div class="info-item">
                        <label>Name</label>
                        <span>${formData.firstName} ${formData.lastName}</span>
                    </div>
                    <div class="info-item">
                        <label>Email</label>
                        <span>${formData.email}</span>
                    </div>
                    <div class="info-item">
                        <label>Phone</label>
                        <span>${formData.phone}</span>
                    </div>
                    <div class="info-item">
                        <label>Website</label>
                        <span>${formData.website}</span>
                    </div>
                    <div class="info-item full-width">
                        <label>Social Media</label>
                        <span>${formData.socialMediaLinks}</span>
                    </div>
                </div>
            </div>

            <div class="section">
                <h2>Leadership Profile</h2>
                <div class="info-grid">
                    <div class="info-item">
                        <label>Revenue Range</label>
                        <span>${formData.revenueRange}</span>
                    </div>
                    <div class="info-item">
                        <label>Years in Business</label>
                        <span>${formData.yearsInBusiness}</span>
                    </div>
                </div>
            </div>

            <div class="section">
                <h2>Clarity & Desire</h2>
                <div class="info-grid">
                    <div class="info-item full-width">
                        <label>Preparing For</label>
                        <span>${formData.preparingFor}</span>
                    </div>
                    <div class="info-item full-width">
                        <label>Blocked Voice</label>
                        <span>${formData.blockedVoice}</span>
                    </div>
                    <div class="info-item full-width">
                        <label>Why Now</label>
                        <span>${formData.whyNow}</span>
                    </div>
                    <div class="info-item full-width">
                        <label>Change For You</label>
                        <span>${formData.changeForYou}</span>
                    </div>
                </div>
            </div>

            <div class="section">
                <h2>Next Steps</h2>
                <p>The next step is to book your Private Strategy Call. During this call, we'll:</p>
                <ul>
                    <li>Review your application in detail</li>
                    <li>Explore what's blocking your voice</li>
                    <li>Discuss your goals and vision</li>
                    <li>Determine if private advisory is the right fit</li>
                </ul>
                <p style="text-align: center;">
                    <a href="${CALENDLY_LINK}" class="cta-button">Book Your Strategy Call</a>
                </p>
            </div>
        </div>

        <div class="footer">
            <p>© ${new Date().getFullYear()} ${YOUR_NAME}. All rights reserved.</p>
            <p>If you have any questions, feel free to reply to this email.</p>
        </div>
    </div>
</body>
</html>
        `,
    };
}

/**
 * Email sent to the admin when a new application is received
 */
function getAdminEmailTemplate(formData) {
    return {
        to: ADMIN_EMAIL,
        subject: `🔔 New Private Application - ${formData.firstName} ${formData.lastName}`,
        html: `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f5f5f5;
            color: #333;
            margin: 0;
            padding: 20px;
            line-height: 1.6;
        }
        .container {
            max-width: 700px;
            margin: 0 auto;
            background-color: #ffffff;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        .header {
            background-color: #d4952a;
            color: #1a1a4e;
            padding: 30px;
            text-align: center;
        }
        .header h1 {
            margin: 0;
            font-size: 24px;
        }
        .content {
            padding: 30px;
        }
        .section {
            margin-bottom: 30px;
        }
        .section h2 {
            color: #1a1a4e;
            font-size: 18px;
            margin: 0 0 15px 0;
            border-bottom: 2px solid #d4952a;
            padding-bottom: 5px;
        }
        .info-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 15px;
            margin-bottom: 20px;
        }
        .info-item {
            background-color: #f9f9f9;
            padding: 12px;
            border-radius: 5px;
            border-left: 3px solid #d4952a;
        }
        .info-item label {
            display: block;
            color: #666;
            font-size: 11px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            margin-bottom: 3px;
        }
        .info-item span {
            color: #333;
            font-size: 14px;
            font-weight: 500;
        }
        .info-item.full-width {
            grid-column: 1 / -1;
        }
        .cta-button {
            display: inline-block;
            background-color: #d4952a;
            color: #1a1a4e;
            text-decoration: none;
            padding: 12px 25px;
            border-radius: 5px;
            font-weight: bold;
            font-size: 14px;
        }
        .footer {
            background-color: #1a1a4e;
            color: #fff;
            text-align: center;
            padding: 20px;
            font-size: 12px;
        }
        @media (max-width: 600px) {
            .info-grid {
                grid-template-columns: 1fr;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🔔 New Private Application Received</h1>
        </div>

        <div class="content">
            <div class="section">
                <h2>Basic Info</h2>
                <div class="info-grid">
                    <div class="info-item">
                        <label>Name</label>
                        <span>${formData.firstName} ${formData.lastName}</span>
                    </div>
                    <div class="info-item">
                        <label>Email</label>
                        <span><a href="mailto:${formData.email}">${formData.email}</a></span>
                    </div>
                    <div class="info-item">
                        <label>Phone</label>
                        <span>${formData.phone}</span>
                    </div>
                    <div class="info-item">
                        <label>Website</label>
                        <span><a href="${formData.website}" target="_blank">${formData.website}</a></span>
                    </div>
                    <div class="info-item full-width">
                        <label>Social Media</label>
                        <span>${formData.socialMediaLinks}</span>
                    </div>
                </div>
            </div>

            <div class="section">
                <h2>Leadership Profile</h2>
                <div class="info-grid">
                    <div class="info-item">
                        <label>Revenue Range</label>
                        <span>${formData.revenueRange}</span>
                    </div>
                    <div class="info-item">
                        <label>Years in Business</label>
                        <span>${formData.yearsInBusiness}</span>
                    </div>
                </div>
            </div>

            <div class="section">
                <h2>Clarity & Desire</h2>
                <div class="info-grid">
                    <div class="info-item full-width">
                        <label>Preparing For</label>
                        <span>${formData.preparingFor}</span>
                    </div>
                    <div class="info-item full-width">
                        <label>Blocked Voice</label>
                        <span>${formData.blockedVoice}</span>
                    </div>
                    <div class="info-item full-width">
                        <label>Why Now</label>
                        <span>${formData.whyNow}</span>
                    </div>
                    <div class="info-item full-width">
                        <label>Change For You</label>
                        <span>${formData.changeForYou}</span>
                    </div>
                </div>
            </div>

            <div class="section">
                <h2>Investment</h2>
                <div class="info-grid">
                    <div class="info-item">
                        <label>Ready to Invest</label>
                        <span>${formData.investmentReady}</span>
                    </div>
                </div>
            </div>

            <div class="section">
                <h2>Quick Actions</h2>
                <p>
                    <a href="${CALENDLY_LINK}" class="cta-button" target="_blank">View Calendly</a>
                </p>
                <p style="margin-top: 15px; font-size: 12px; color: #666;">
                    Submitted on: ${new Date().toLocaleString()}
                </p>
            </div>
        </div>

        <div class="footer">
            <p>Private Application Form Notification</p>
        </div>
    </div>
</body>
</html>
        `,
    };
}

// ==========================================
// MAIN FUNCTION
// ==========================================

/**
 * Main function triggered on form submission
 */
function onFormSubmit(e) {
    try {
        const form = FormApp.getActiveForm();
        const formResponse = e.response;
        const itemResponses = formResponse.getItemResponses();

        // Extract form data
        const formData = {
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            website: "",
            socialMediaLinks: "",
            revenueRange: "",
            yearsInBusiness: "",
            preparingFor: "",
            blockedVoice: "",
            whyNow: "",
            changeForYou: "",
            investmentReady: "",
        };

        // Map responses to form data
        // Note: The order here must match your form's question order
        itemResponses.forEach((response, index) => {
            const question = response.getItem().getTitle();
            const answer = response.getResponse();

            switch (question) {
                case "First Name":
                    formData.firstName = answer;
                    break;
                case "Last Name":
                    formData.lastName = answer;
                    break;
                case "Email":
                    formData.email = answer;
                    break;
                case "Phone":
                    formData.phone = answer;
                    break;
                case "Website":
                    formData.website = answer;
                    break;
                case "Social Media Links":
                    formData.socialMediaLinks = answer;
                    break;
                case "Current Revenue Range":
                    formData.revenueRange = answer;
                    break;
                case "Years in Business":
                    formData.yearsInBusiness = answer;
                    break;
                case "What stage are you preparing for?":
                    formData.preparingFor = answer;
                    break;
                case "What feels blocked in your voice right now?":
                    formData.blockedVoice = answer;
                    break;
                case "Why now?":
                    formData.whyNow = answer;
                    break;
                case "What would working privately change for you?":
                    formData.changeForYou = answer;
                    break;
                case "Are you ready to invest at the private advisory level?":
                    formData.investmentReady = answer;
                    break;
            }
        });

        // Send email to applicant
        const applicantEmail = getApplicantEmailTemplate(formData);
        MailApp.sendEmail(applicantEmail);

        // Send notification to admin
        const adminEmail = getAdminEmailTemplate(formData);
        MailApp.sendEmail(adminEmail);

        console.log(
            "Emails sent successfully for applicant: " + formData.email,
        );
    } catch (error) {
        console.error("Error sending emails: " + error.toString());
        // Optionally, send error notification to admin
        MailApp.sendEmail({
            to: ADMIN_EMAIL,
            subject: "❌ Error in Private Application Form",
            body:
                "An error occurred while processing a form submission:\n\n" +
                error.toString(),
        });
    }
}

// ==========================================
// SETUP TRIGGER INSTRUCTIONS
// ==========================================

/**
 * To set up the automatic trigger:
 *
 * 1. Open your Google Form
 * 2. Click Extensions > Apps Script
 * 3. Make sure this script is saved
 * 4. In the Apps Script editor:
 *    a. Click on the clock icon (Triggers) in the left sidebar
 *    b. Click the blue "+ Add Trigger" button
 *    c. Configure the trigger as follows:
 *       - Choose which function to run: onFormSubmit
 *       - Choose which deployment should run: Head
 *       - Select event source: From form
 *       - Select event type: On form submit
 *    d. Click "Save"
 * 5. Authorize the script when prompted (you may need to do this twice)
 * 6. Test the trigger by submitting a test response to your form
 *
 * The trigger will now automatically send emails whenever someone submits the form.
 */

// ==========================================
// TESTING FUNCTIONS
// ==========================================

/**
 * Test function - manually trigger this to test email sending
 * Note: This uses the most recent form response
 */
function testEmailSending() {
    const form = FormApp.getActiveForm();
    const responses = form.getResponses();

    if (responses.length === 0) {
        console.log("No form responses to test with.");
        return;
    }

    const latestResponse = responses[responses.length - 1];

    // Create a mock event object
    const mockEvent = {
        response: latestResponse,
    };

    onFormSubmit(mockEvent);
}

/**
 * Test function - send a test email to yourself
 */
function sendTestEmail() {
    const testFormData = {
        firstName: "Test",
        lastName: "User",
        email: ADMIN_EMAIL,
        phone: "+1 (555) 123-4567",
        website: "https://example.com",
        socialMediaLinks: "LinkedIn: linkedin.com/in/testuser",
        revenueRange: "100k–500k",
        yearsInBusiness: "5 years",
        preparingFor: "Preparing for TEDx talk",
        blockedVoice: "Struggling with confidence and clarity",
        whyNow: "Ready to take the next step in my career",
        changeForYou: "Would help me reach more people and make greater impact",
        investmentReady: "Yes",
    };

    const applicantEmail = getApplicantEmailTemplate(testFormData);
    MailApp.sendEmail(applicantEmail);

    console.log("Test email sent to: " + ADMIN_EMAIL);
}
