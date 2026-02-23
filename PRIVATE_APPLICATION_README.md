# Private Application Form - Setup Guide

## Overview

A new Private Application Form has been created for your private advisory services. This form collects comprehensive information from potential clients and redirects them to book a Calendly strategy call after submission.

## What Was Created

### 1. React Component

**File:** [`src/components/PrivateApplicationForm.tsx`](src/components/PrivateApplicationForm.tsx:1)

A fully functional form component with:

- **Section 1: Basic Info**
    - First Name \*
    - Last Name \*
    - Email \*
    - Phone \*
    - Website \*
    - Social Media Links \*

- **Section 2: Leadership Profile**
    - Current Revenue Range (Under 100k, 100k–500k, 500k–1M, 1M+)
    - Years in Business

- **Section 3: Clarity & Desire**
    - What stage are you preparing for?
    - What feels blocked in your voice right now?
    - Why now?
    - What would working privately change for you?

- **Section 4: Investment**
    - Are you ready to invest at the private advisory level? (Yes/No)

### 2. Route Configuration

**File:** [`src/App.tsx`](src/App.tsx:18)

Added route: `/private-application`

Access the form at: `http://localhost:5173/private-application`

### 3. Google Forms Setup Guide

**File:** [`GOOGLE_FORMS_SETUP_PRIVATE.md`](GOOGLE_FORMS_SETUP_PRIVATE.md:1)

Complete documentation for the Google Form including:

- Form URL and ID
- All 13 questions with entry IDs
- Testing instructions
- Email notification setup

### 4. Email Automation Script

**File:** [`PRIVATE_EMAIL_SCRIPT.gs`](PRIVATE_EMAIL_SCRIPT.gs:1)

Google Apps Script that automatically sends:

- **To Applicant:** Beautiful confirmation email with their application details and Calendly link
- **To Admin:** Notification email with all applicant information

## Google Form Configuration

The Google Form is already created and configured:

**Form URL:** https://docs.google.com/forms/d/e/1FAIpQLSc50Q_kfTRfXM5BHHZqBzyfsweu8l4YtoNd_FryRNLeXK81XQ/viewform

**Form ID:** 1FAIpQLSc50Q_kfTRfXM5BHHZqBzyfsweu8l4YtoNd_FryRNLeXK81XQ

### Entry IDs (Already Configured)

```typescript
const FORM_ENTRY_IDS = {
    firstName: "entry.1698058784",
    lastName: "entry.1178654855",
    email: "entry.885595271",
    phone: "entry.1748238758",
    website: "entry.729632185",
    socialMediaLinks: "entry.862719611",
    revenueRange: "entry.1710848327",
    yearsInBusiness: "entry.1351873553",
    preparingFor: "entry.446459776",
    blockedVoice: "entry.1636061298",
    whyNow: "entry.1161710152",
    changeForYou: "entry.462357243",
    investmentReady: "entry.351479601",
};
```

## Setup Steps

### Step 1: Verify the Google Form

1. Visit the Google Form: https://docs.google.com/forms/d/e/1FAIpQLSc50Q_kfTRfXM5BHHZqBzyfsweu8l4YtoNd_FryRNLeXK81XQ/viewform
2. Verify all questions are present and correct
3. Check that all entry IDs match the configuration above

### Step 2: Test the Form

1. Start your dev server: `npm run dev`
2. Navigate to `http://localhost:5173/private-application`
3. Fill out and submit the form
4. Check your Google Form responses to verify the data was submitted

### Step 3: Set Up Email Notifications (Optional but Recommended)

#### Simple Email Notifications

1. Open your Google Form
2. Click the "Responses" tab
3. Click the three dots (⋮) in the top right
4. Select "Get email notifications for new responses"

#### Advanced Email Automation

1. Open your Google Form
2. Click Extensions > Apps Script
3. Copy the entire contents of [`PRIVATE_EMAIL_SCRIPT.gs`](PRIVATE_EMAIL_SCRIPT.gs:1)
4. Paste it into the Apps Script editor
5. Update the configuration at the top:
    ```javascript
    const ADMIN_EMAIL = "your-email@example.com"; // Your email
    const CALENDLY_LINK =
        "https://calendly.com/joannahortonmcpherson/discovery";
    const YOUR_NAME = "Joanna Horton McPherson";
    ```
6. Save the script
7. Set up a trigger (see instructions in the script comments)

## Features

### Design

- Consistent with existing VaultRegistrationForm styling
- Dark theme with gold accents (#d4952a)
- Smooth animations using Framer Motion
- Responsive design for mobile and desktop
- Section dividers for visual organization

### User Experience

- All required fields marked with asterisks
- Clear section headers
- Form validation
- Loading state during submission
- Success modal with Calendly link
- Navigation back to home page

### After Submission

- Success modal displays confirmation message
- Direct link to Calendly: https://calendly.com/joannahortonmcpherson/discovery
- Form resets after successful submission
- User can close modal or navigate to home

### Email Notifications (if configured)

- **Applicant Email:** Beautiful HTML email with:
    - Confirmation message
    - Summary of their application
    - Direct Calendly link
    - Professional branding
- **Admin Email:** Notification with:
    - All applicant details
    - Quick action links
    - Timestamp

## File Structure

```
src/
├── components/
│   └── PrivateApplicationForm.tsx    # Main form component
├── App.tsx                            # Updated with new route

GOOGLE_FORMS_SETUP_PRIVATE.md          # Google Forms setup guide
PRIVATE_EMAIL_SCRIPT.gs               # Email automation script
PRIVATE_APPLICATION_README.md         # This file
```

## Important Notes

1. **Google Form Already Created:** The Google Form is already created and configured with the correct entry IDs.

2. **13 Questions Total:** The form has 13 questions (not including "Speaking Experience Level" which was not in the original requirements).

3. **Email Automation:** The email script is optional but highly recommended for a professional experience.

4. **Calendly Link:** The form uses `https://calendly.com/joannahortonmcpherson/discovery` - verify this is the correct link.

5. **Testing:** Always test the form thoroughly before going live.

## Troubleshooting

### Form Not Submitting

- Verify the Google Form URL is correct
- Check that all entry IDs match your form
- Check browser console for errors

### Emails Not Sending

- Verify the trigger is set up correctly
- Check the Apps Script execution logs
- Ensure the script is authorized

### Styling Issues

- Ensure Tailwind CSS is properly configured
- Check that all color variables are correct

## Next Steps

1. ✅ Verify the Google Form is correct
2. ✅ Test the form locally
3. ✅ Set up email automation (optional)
4. ✅ Deploy to production
5. ✅ Test the live form

## Support

For issues or questions:

- Check the Google Forms setup guide for detailed instructions
- Review the email script comments for automation help
- Verify all IDs and URLs are correct

## License

This form is part of your private advisory services application.
