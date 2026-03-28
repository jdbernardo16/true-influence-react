# Google Forms Setup Guide: Private Client Inquiry Form

This guide will help you set up the Google Form and Google Sheets integration for the Private Client Inquiry form.

## Table of Contents

1. [Create the Google Form](#create-the-google-form)
2. [Configure Form Fields](#configure-form-fields)
3. [Get Entry IDs](#get-entry-ids)
4. [Update the React Component](#update-the-react-component)
5. [Set Up Google Sheets](#set-up-google-sheets)
6. [Optional: Add Automation Scripts](#optional-add-automation-scripts)

---

## Create the Google Form

### Step 1: Create a New Form

1. Go to [forms.google.com](https://forms.google.com)
2. Click on the **+** (Blank) button to create a new form
3. Name your form: **"Private Client Inquiry Form"**
4. Add a description: **"Phase 1 & Private Training Application"**

### Step 2: Make the Form a Quiz (Optional)

If you want to validate responses:

1. Click the **Settings** tab (gear icon)
2. Turn on **Make this a quiz**
3. Uncheck **Release grades immediately after each submission**

### Step 3: Get the Form URL

1. Click the **Send** button (top right)
2. Click the **Link** tab
3. Copy the URL - it should look like: `https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform`
4. **Important**: Extract the `YOUR_FORM_ID` part (the long alphanumeric string)

---

## Configure Form Fields

Add the following questions to your Google Form in this exact order:

### Question 1: Full Name

-   **Type**: Short answer
-   **Required**: Yes
-   **Question title**: `Full Name`
-   **Description**: (leave empty)

### Question 2: Email Address

-   **Type**: Short answer
-   **Required**: Yes
-   **Question title**: `Email Address`
-   **Description**: (leave empty)
-   **Validation**: Text → Email address

### Question 3: Phone Number

-   **Type**: Short answer
-   **Required**: Yes
-   **Question title**: `Phone Number`
-   **Description**: (leave empty)

### Question 4: Website / LinkedIn Profile

-   **Type**: Short answer
-   **Required**: No
-   **Question title**: `Website / LinkedIn Profile`
-   **Description**: (Optional)

### Question 5: Identifying the "Block"

-   **Type**: Checkboxes
-   **Required**: Yes
-   **Question title**: `Which of the following best describes your current relationship with your story? (Select all that apply)`
-   **Options**:
    -   I feel fear or anxiety when I think about speaking in public.
    -   I'm entering a new chapter of my life/career, and I know my story is the key, but I feel stuck.
    -   I know I have a powerful story, but I don't know exactly what it is or how to structure it.
    -   I have a story, but I don't feel "safe" or "brave" enough to share the true version of it yet.

### Question 6: The Vision (The "Why")

-   **Type**: Multiple choice
-   **Required**: Yes
-   **Question title**: `What is the primary goal for sharing this story?`
-   **Options**:
    -   Building my business/personal brand
    -   Writing a book
    -   Securing high-level speaking engagements
    -   Establishing a global legacy/thought leadership

### Question 7: Outcomes

-   **Type**: Multiple choice
-   **Required**: Yes
-   **Question title**: `What does "success" look like for you 90 days from now?`
-   **Options**:
    -   Clarity in my message, and how it connects to my business
    -   Standing on a stage with a polished 7-minute story
    -   Feeling total confidence in my body
    -   Having safety around using my story to enhance my leadership

### Question 8: Current Scope & Legacy

-   **Type**: Multiple choice
-   **Required**: Yes
-   **Question title**: `Which best describes your current professional path?`
-   **Options**:
    -   Emerging Leader/Entrepreneur (Ready to master my message)
    -   Established Executive/Founder (Seeking "Healed Leadership" and truth)
    -   Global Visionary/Philanthropist (Building a multi-generational legacy)

### Question 9: Investment & Alignment

-   **Type**: Multiple choice
-   **Required**: Yes
-   **Question title**: `To provide the highest level of transformation, Phase 1 involves a 90-day Mastermind and Retreat experience. Pricing for this level of private and group training ranges from $6,000 to $20,000+. Is this an investment you are prepared to make to reach your goals?`
-   **Options**:
    -   Yes, I am ready to invest in the $20,000 Beginning Private Training Experience.
    -   Yes, I am ready to invest in the $45,000 for the Advanced Private Training Experience.
    -   Yes, I am interested in the $6,000 90-Day Mastermind & Retreat.
    -   I would like to discuss which option is the best fit for my current needs.

### Question 10: Additional Information

-   **Type**: Paragraph
-   **Required**: No
-   **Question title**: `If you plan to become a private client, the first step is meeting with Joanna. Is there anything else Joanna should know before your session?`
-   **Description**: (leave empty)

---

## Get Entry IDs

### Step 1: View the Form in HTML

1. With your form open, right-click anywhere on the form
2. Select **View Page Source** (or press `Ctrl+U` / `Cmd+U`)
3. This will open the HTML source code in a new tab

### Step 2: Find Entry IDs

1. Press `Ctrl+F` / `Cmd+F` to search
2. Search for: `entry.`
3. You'll see entries like `entry.1234567890`
4. Copy each entry ID in the order of your questions

### Step 3: Map Entry IDs to Form Fields

Create a mapping like this (replace with your actual IDs):

```javascript
const ENTRY_IDS = {
    fullName: "entry.1234567890", // Question 1
    email: "entry.0987654321", // Question 2
    phone: "entry.1122334455", // Question 3
    website: "entry.5566778899", // Question 4
    storyBlock: "entry.6677889900", // Question 5 (checkboxes)
    visionGoal: "entry.7788990011", // Question 6
    outcomeGoal: "entry.8899001122", // Question 7
    professionalPath: "entry.9900112233", // Question 8
    investment: "entry.0011223344", // Question 9
    additionalInfo: "entry.2233445566", // Question 10
};
```

### Alternative Method: Use Browser Developer Tools

1. Right-click on a form field
2. Select **Inspect**
3. Look for `name="entry.XXXXXXXX"` in the HTML
4. The `entry.XXXXXXXX` is your entry ID

---

## Update the React Component

### Step 1: Update the Form Action URL

In [`src/components/PrivateClientInquiryForm.tsx`](src/components/PrivateClientInquiryForm.tsx:8), update line 8:

```typescript
// Replace YOUR_FORM_ID with your actual form ID
const GOOGLE_FORM_ACTION =
    "https://docs.google.com/forms/d/e/YOUR_FORM_ID/formResponse";
```

**Example**:

```typescript
const GOOGLE_FORM_ACTION =
    "https://docs.google.com/forms/d/e/1FAIpQLSe8yexExg44QIH3_ldsoCVhyILqMMebZg143mzfYAa3czTcwQ/formResponse";
```

### Step 2: Update Entry IDs in handleSubmit

In the `handleSubmit` function (around line 120), replace all `entry.YOUR_ENTRY_ID` with your actual entry IDs:

```typescript
const formDataObj = new FormData();

// Replace these with your actual entry IDs
formDataObj.append("entry.1234567890", formData.fullName);
formDataObj.append("entry.0987654321", formData.email);
formDataObj.append("entry.1122334455", formData.phone);
formDataObj.append("entry.5566778899", formData.website);
formDataObj.append("entry.6677889900", formData.storyBlock.join(", "));
formDataObj.append("entry.7788990011", formData.visionGoal);
formDataObj.append("entry.8899001122", formData.outcomeGoal);
formDataObj.append("entry.9900112233", formData.professionalPath);
formDataObj.append("entry.0011223344", formData.investment);
formDataObj.append("entry.2233445566", formData.additionalInfo);
```

**Don't forget** to also update the fallback section (around line 150) with the same entry IDs.

---

## Set Up Google Sheets

### Step 1: Link Form to Spreadsheet

1. With your Google Form open, click the **Responses** tab
2. Click the **Link to Sheets** button (green spreadsheet icon)
3. Choose **Create a new spreadsheet**
4. Name it: **"Private Client Inquiry Responses"**
5. Click **Create**

### Step 2: Verify the Spreadsheet

Your spreadsheet should have these columns (in order):

1. Timestamp
2. Full Name
3. Email Address
4. Phone Number
5. Website / LinkedIn Profile
6. Identifying the "Block"
7. The Vision (The "Why")
8. Outcomes
9. Current Scope & Legacy
10. Investment & Alignment
11. Additional Information

### Step 3: Organize Your Spreadsheet

You can add additional columns for:

-   Status (e.g., New, In Review, Scheduled, Converted)
-   Notes
-   Follow-up date
-   Assigned team member

### Step 4: Share the Spreadsheet

1. Click **Share** (top right)
2. Add team members who need access
3. Set appropriate permissions (Editor, Commenter, or Viewer)

---

## Optional: Add Automation Scripts

### Option 1: Email Notifications

Create a Google Apps Script to send email notifications when new submissions arrive:

```javascript
// Go to Extensions → Apps Script in your Google Sheet
// Paste this code:

function onFormSubmit(e) {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    const lastRow = sheet.getLastRow();
    const timestamp = sheet.getRange(lastRow, 1).getValue();
    const fullName = sheet.getRange(lastRow, 2).getValue();
    const email = sheet.getRange(lastRow, 3).getValue();
    const phone = sheet.getRange(lastRow, 4).getValue();
    const investment = sheet.getRange(lastRow, 10).getValue();
    const additionalInfo = sheet.getRange(lastRow, 11).getValue();

    const recipient = "joanna@example.com"; // Replace with Joanna's email
    const subject = `New Private Client Inquiry: ${fullName}`;

    const body = `
New Private Client Inquiry Form Submission

Name: ${fullName}
Email: ${email}
Phone: ${phone}
Investment Interest: ${investment}

Additional Information:
${additionalInfo || "None provided"}

Submitted: ${timestamp}
    `;

    MailApp.sendEmail({
        to: recipient,
        subject: subject,
        body: body,
    });
}

// Set up the trigger:
// Click Triggers → Add Trigger
// Choose: onFormSubmit, From spreadsheet, On form submit
```

### Option 2: Slack Notifications

```javascript
function sendToSlack(e) {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    const lastRow = sheet.getLastRow();
    const fullName = sheet.getRange(lastRow, 2).getValue();
    const email = sheet.getRange(lastRow, 3).getValue();
    const investment = sheet.getRange(lastRow, 10).getValue();

    const webhookUrl = "YOUR_SLACK_WEBHOOK_URL"; // Replace with your webhook
    const payload = {
        text: `🎯 New Private Client Inquiry from ${fullName}`,
        attachments: [
            {
                color: "#d4952a",
                fields: [
                    { title: "Name", value: fullName, short: true },
                    { title: "Email", value: email, short: true },
                    { title: "Investment", value: investment, short: false },
                ],
            },
        ],
    };

    const options = {
        method: "post",
        contentType: "application/json",
        payload: JSON.stringify(payload),
        muteHttpExceptions: true,
    };

    UrlFetchApp.fetch(webhookUrl, options);
}
```

### Option 3: Auto-Response Email

```javascript
function sendAutoResponse(e) {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    const lastRow = sheet.getLastRow();
    const fullName = sheet.getRange(lastRow, 2).getValue();
    const email = sheet.getRange(lastRow, 3).getValue();

    const subject = "Thank you for your Private Client Inquiry";

    const body = `
Dear ${fullName},

Thank you for submitting your application for private client training.

Success starts now. In our upcoming call, we will move past the "talk" and immediately begin the work of Naming Your Story. Please come prepared to dive deep.

Our team will review your application and reach out within 24-48 hours to schedule your discovery call with Joanna.

If you have any questions in the meantime, please don't hesitate to reach out.

Warm regards,
Joanna Horton McPherson
    `;

    MailApp.sendEmail({
        to: email,
        subject: subject,
        body: body,
    });
}
```

---

## Testing Your Form

### Step 1: Test the React Form

1. Start your development server: `npm run dev`
2. Navigate to your form page (e.g., `/private-client-inquiry`)
3. Fill out all fields with test data
4. Submit the form
5. Check for the success modal

### Step 2: Verify Google Form Submission

1. Go to your Google Form
2. Click the **Responses** tab
3. Verify that your test submission appears

### Step 3: Verify Google Sheet

1. Open the linked Google Sheet
2. Verify that your test data appears in the correct columns
3. Check that all fields are populated correctly

### Step 4: Test Email Notifications (if configured)

1. Check your email for the notification
2. Verify that all information is correct

---

## Troubleshooting

### Issue: Form submission fails

-   **Solution**: Verify that the `GOOGLE_FORM_ACTION` URL is correct
-   **Solution**: Check that all entry IDs are correct
-   **Solution**: Ensure the form is set to "Accept responses"

### Issue: Data not appearing in Google Sheet

-   **Solution**: Verify that the form is linked to the correct spreadsheet
-   **Solution**: Check that the form is set to "Accept responses"

### Issue: Entry IDs don't match

-   **Solution**: Make sure you're using the entry IDs from the formResponse URL, not the viewform URL
-   **Solution**: Ensure the order of questions matches the order in your React component

### Issue: Checkbox data not submitting correctly

-   **Solution**: Check that `formData.storyBlock.join(", ")` is being used
-   **Solution**: Verify the entry ID for the checkbox question

---

## Additional Resources

-   [Google Forms Help](https://support.google.com/docs/topic/1382883)
-   [Google Sheets Help](https://support.google.com/docs/topic/2811806)
-   [Google Apps Script Documentation](https://developers.google.com/apps-script)

---

## Quick Reference: Entry ID Mapping

| React Field      | Google Form Question       | Entry ID Format |
| ---------------- | -------------------------- | --------------- |
| fullName         | Full Name                  | entry.XXXXXXXX  |
| email            | Email Address              | entry.XXXXXXXX  |
| phone            | Phone Number               | entry.XXXXXXXX  |
| website          | Website / LinkedIn Profile | entry.XXXXXXXX  |
| storyBlock       | Identifying the "Block"    | entry.XXXXXXXX  |
| visionGoal       | The Vision (The "Why")     | entry.XXXXXXXX  |
| outcomeGoal      | Outcomes                   | entry.XXXXXXXX  |
| professionalPath | Current Scope & Legacy     | entry.XXXXXXXX  |
| investment       | Investment & Alignment     | entry.XXXXXXXX  |
| additionalInfo   | Additional Information     | entry.XXXXXXXX  |

---

**Last Updated**: 2026-03-28
**Form Version**: 1.0
