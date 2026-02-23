# Google Forms Setup Guide for Vault Registration

This guide will walk you through setting up Google Forms and Google Sheets to collect Vault registration data with email functionality.

## Step 1: Create a New Google Form

1. Go to [forms.google.com](https://forms.google.com)
2. Click the **Blank** form or **+** to create a new form
3. Title your form: **"Vault Registration"**
4. Add a description: "Free The Vault - Monthly safe space for women leaders"

## Step 2: Add Form Fields

Create the following fields in your Google Form:

### Field 1: First Name

- **Type**: Short answer
- **Required**: Yes
- **Label**: First Name

### Field 2: Last Name

- **Type**: Short answer
- **Required**: Yes
- **Label**: Last Name

### Field 3: Email

- **Type**: Short answer
- **Required**: Yes
- **Label**: Email
- **Settings**: Click the three dots → Response validation → Email address

### Field 4: Mobile Number

- **Type**: Short answer
- **Required**: Yes
- **Label**: Mobile Number (for reminders)
- **Description**: Enter your phone number for meeting reminders

### Field 5: What best describes you?

- **Type**: Dropdown
- **Required**: Yes
- **Label**: What best describes you?
- **Options**:
    - Founder / CEO
    - Speaker
    - Coach / Consultant
    - Executive
    - Aspiring Leader

### Field 6: Speaking Challenge

- **Type**: Paragraph
- **Required**: No
- **Label**: What is your biggest speaking challenge right now?
- **Description**: Short answer

### Field 7: Consent Checkbox

- **Type**: Checkbox
- **Required**: No
- **Label**: I agree to receive updates and leadership content from Joanna Horton McPherson.
- **Options**: Check this box to agree

## Step 3: Get the Form Action URL

1. Click the **Send** button (top right)
2. Click the **<>** (embed) icon
3. Copy the URL in the embed code - it will look like:
    ```
    https://docs.google.com/forms/d/e/YOUR_FORM_ID/formResponse
    ```
4. **Save this URL** - you'll need it for the code

## Step 4: Get Field Entry IDs

This is the most important step - you need to find the unique IDs for each form field.

### Method 1: Using Browser Developer Tools

1. **Preview the form** by clicking the eye icon
2. Right-click on the first field and select **Inspect**
3. Look for the `name` attribute in the input element
4. It will look like: `name="entry.123456789"`
5. The number after `entry.` is your **Entry ID** for that field
6. Repeat for all 7 fields

### Method 2: Using the Form HTML Source

1. Go to your form in edit mode
2. Click the **Send** button → **<>** (embed)
3. Copy the embed HTML code
4. Paste it into a text editor
5. Search for `name="entry.` to find all the Entry IDs

### Expected Entry IDs Structure

You should find IDs similar to:

- First Name: `entry.XXXXXXXX`
- Last Name: `entry.YYYYYYYY`
- Email: `entry.ZZZZZZZZ`
- Mobile Number: `entry.AAAAAAAA`
- Role: `entry.BBBBBBBB`
- Speaking Challenge: `entry.CCCCCCCC`
- Consent: `entry.DDDDDDDD`

**Note**: These IDs are unique to YOUR form - you must extract them from your specific form.

## Step 5: Update the Code

Open [`src/components/VaultRegistrationForm.tsx`](src/components/VaultRegistrationForm.tsx:1) and update the following:

### 1. Update the Form Action URL (Line 6)

Replace:

```typescript
const GOOGLE_FORM_ACTION =
    "https://docs.google.com/forms/d/e/YOUR_FORM_ID/formResponse";
```

With your actual URL:

```typescript
const GOOGLE_FORM_ACTION =
    "https://docs.google.com/forms/d/e/YOUR_ACTUAL_FORM_ID/formResponse";
```

### 2. Update the Entry IDs (Lines 54-64)

Replace:

```typescript
formDataObj.append("entry.YOUR_FIRST_NAME_ID", formData.firstName);
formDataObj.append("entry.YOUR_LAST_NAME_ID", formData.lastName);
formDataObj.append("entry.YOUR_EMAIL_ID", formData.email);
formDataObj.append("entry.YOUR_MOBILE_ID", formData.mobileNumber);
formDataObj.append("entry.YOUR_ROLE_ID", formData.role);
formDataObj.append("entry.YOUR_CHALLENGE_ID", formData.speakingChallenge);
formDataObj.append(
    "entry.YOUR_CONSENT_ID",
    formData.consentUpdates ? "Yes" : "No",
);
```

With your actual Entry IDs:

```typescript
formDataObj.append("entry.123456789", formData.firstName);
formDataObj.append("entry.987654321", formData.lastName);
formDataObj.append("entry.456789123", formData.email);
formDataObj.append("entry.789123456", formData.mobileNumber);
formDataObj.append("entry.321654987", formData.role);
formDataObj.append("entry.654987321", formData.speakingChallenge);
formDataObj.append("entry.147258369", formData.consentUpdates ? "Yes" : "No");
```

### 3. Update the Fallback Entry IDs (Lines 75-90)

Update the same Entry IDs in the fallback section as well.

## Step 6: Connect to Google Sheets

1. In your Google Form, click the **Responses** tab
2. Click the green **Sheets** icon (Create spreadsheet)
3. Choose **Create a new spreadsheet**
4. Name it: **"Vault Registration Responses"**
5. Click **Create**

Your form responses will now automatically populate in this Google Sheet.

## Step 7: Set Up Email Notifications

### Option A: Google Sheets Built-in Notifications

1. Open your Google Sheet
2. Click **Tools** → **Notification rules**
3. Click **Add notification**
4. Choose:
    - **Notify me when**: A user submits a form
    - **Notify me with**: Email - right away
5. Click **Save**

### Option B: Google Apps Script (Recommended for Custom Emails)

1. In your Google Sheet, click **Extensions** → **Apps Script**
2. Delete any existing code and paste this script:

```javascript
function onFormSubmit(e) {
    // Get the form response
    var response = e.response;
    var itemResponses = response.getItemResponses();

    // Extract data
    var firstName = "";
    var lastName = "";
    var email = "";
    var mobileNumber = "";
    var role = "";
    var speakingChallenge = "";
    var consentUpdates = "";

    for (var i = 0; i < itemResponses.length; i++) {
        var itemResponse = itemResponses[i];
        var question = itemResponse.getItem().getTitle();
        var answer = itemResponse.getResponse();

        if (question.includes("First Name")) firstName = answer;
        if (question.includes("Last Name")) lastName = answer;
        if (question.includes("Email")) email = answer;
        if (question.includes("Mobile Number")) mobileNumber = answer;
        if (question.includes("best describes you")) role = answer;
        if (question.includes("speaking challenge")) speakingChallenge = answer;
        if (question.includes("consent")) consentUpdates = answer;
    }

    // Create email content
    var subject = "New Vault Registration: " + firstName + " " + lastName;
    var body =
        "A new person has registered for The Vault!\n\n" +
        "Name: " +
        firstName +
        " " +
        lastName +
        "\n" +
        "Email: " +
        email +
        "\n" +
        "Mobile: " +
        mobileNumber +
        "\n" +
        "Role: " +
        role +
        "\n" +
        "Speaking Challenge: " +
        speakingChallenge +
        "\n" +
        "Consent to Updates: " +
        (consentUpdates ? "Yes" : "No") +
        "\n\n" +
        "The next Vault session is on the first Friday at 12 PM MST.";

    // Send email to yourself
    MailApp.sendEmail({
        to: "joanna@trueinfluencemethod.com",
        subject: subject,
        body: body,
    });

    // Optional: Send confirmation email to the registrant
    var confirmationSubject = "Welcome to The Vault!";
    var confirmationBody =
        "Hi " +
        firstName +
        ",\n\n" +
        "Thank you for registering for The Vault! We're excited to have you join our monthly safe space for women leaders.\n\n" +
        "Our next session is on the first Friday at 12 PM MST. You'll receive a reminder with the meeting link before the session.\n\n" +
        "If you have any questions, feel free to reply to this email.\n\n" +
        "Best,\n" +
        "Joanna Horton McPherson";

    MailApp.sendEmail({
        to: email,
        subject: confirmationSubject,
        body: confirmationBody,
    });
}
```

3. Save the script (Ctrl/Cmd + S)
4. Click the **Triggers** icon (clock icon in the left sidebar)
5. Click **+ Add Trigger**
6. Configure as follows:
    - Choose which function to run: `onFormSubmit`
    - Select event source: `From form`
    - Select event type: `On form submit`
7. Click **Save**
8. You may need to authorize the script - follow the prompts

### Option C: Using Zapier (Easiest for Non-Technical Users)

1. Create a free account at [zapier.com](https://zapier.com)
2. Create a new Zap
3. **Trigger**: Google Forms → New Form Response
4. **Action**: Gmail → Send Email
5. Configure the email template with form data
6. Turn on the Zap

## Step 8: Test the Integration

1. Open your website and navigate to the Vault Registration page
2. Fill out the form with test data
3. Click "Unlock The Vault"
4. Check:
    - ✅ Success modal appears
    - ✅ Data appears in Google Forms Responses
    - ✅ Data appears in Google Sheets
    - ✅ Email notification is received

## Step 9: Customize the Confirmation Email

Edit the `confirmationBody` variable in the Apps Script to customize the welcome email sent to registrants. Include:

- Meeting date and time
- Meeting link (Zoom, Google Meet, etc.)
- What to expect
- Any preparation materials

## Important Notes

### CORS Limitations

The form submission uses `mode: "no-cors"` which means:

- You won't receive a response from Google Forms
- The fallback mechanism opens the form in a new tab if submission fails
- This is a limitation of browser security, not a bug

### Form Settings

In your Google Form settings:

- Go to **Settings** → **Presentation**
- Set a confirmation message: "Thank you for registering for The Vault! Check your email for meeting details."
- Uncheck "Allow respondents to edit after submit" if desired

### Data Privacy

- Ensure your Google Form is set to **"Limit to 1 response"** if you want unique registrations
- Consider adding a disclaimer about data usage in the form description
- The consent checkbox helps with GDPR compliance

### Testing

Always test the full flow before going live:

1. Form submission
2. Google Sheets population
3. Email notifications
4. User experience on mobile devices

## Troubleshooting

### Form Not Submitting

- Check that the Form Action URL is correct
- Verify all Entry IDs match your form
- Check browser console for errors

### No Email Received

- Verify the trigger is set up correctly in Apps Script
- Check Gmail spam folder
- Ensure the script has been authorized

### Data Not Appearing in Sheets

- Make sure the form is linked to the spreadsheet
- Check that the spreadsheet hasn't been deleted or moved
- Verify the form is accepting responses

## Next Steps

Once everything is working:

1. Share the form link with your team for testing
2. Set up a reminder system for the monthly Vault sessions
3. Prepare your meeting agenda and materials
4. Consider creating a mailing list from the consent checkbox responses
5. Set up analytics to track registration conversion rates

---

Need help? Check the [Google Forms Help Center](https://support.google.com/docs/topic/9045160) or [Google Apps Script Documentation](https://developers.google.com/apps-script).
