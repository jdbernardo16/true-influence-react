# Google Forms Setup Guide - Private Application Form

This guide documents the Google Form that has been created for the Private Application Form.

## Google Form Details

**Form URL:** https://docs.google.com/forms/d/e/1FAIpQLSc50Q_kfTRfXM5BHHZqBzyfsweu8l4YtoNd_FryRNLeXK81XQ/viewform

**Form ID:** 1FAIpQLSc50Q_kfTRfXM5BHHZqBzyfsweu8l4YtoNd_FryRNLeXK81XQ

## Form Questions

The Google Form contains the following 13 questions:

### Section 1: Basic Info

1. **First Name** (Short answer) - Required
    - Entry ID: `entry.1698058784`

2. **Last Name** (Short answer) - Required
    - Entry ID: `entry.1178654855`

3. **Email** (Short answer) - Required
    - Entry ID: `entry.885595271`

4. **Phone** (Short answer) - Required
    - Entry ID: `entry.1748238758`

5. **Website** (Short answer) - Required
    - Entry ID: `entry.729632185`

6. **Social Media Links** (Paragraph) - Required
    - Entry ID: `entry.862719611`

### Section 2: Leadership Profile

7. **Current Revenue Range** (Dropdown) - Required
    - Entry ID: `entry.1710848327`
    - Options:
        - Under 100k
        - 100k–500k
        - 500k–1M
        - 1M+

8. **Years in Business** (Short answer) - Required
    - Entry ID: `entry.1351873553`

### Section 3: Clarity & Desire

9. **What stage are you preparing for?** (Paragraph) - Required
    - Entry ID: `entry.446459776`

10. **What feels blocked in your voice right now?** (Paragraph) - Required
    - Entry ID: `entry.1636061298`

11. **Why now?** (Paragraph) - Required
    - Entry ID: `entry.1161710152`

12. **What would working privately change for you?** (Paragraph) - Required
    - Entry ID: `entry.462357243`

### Section 4: Investment

13. **Are you ready to invest at the private advisory level?** (Multiple Choice) - Required
    - Entry ID: `entry.351479601`
    - Options:
        - Yes
        - No

## React Component Configuration

The React component [`src/components/PrivateApplicationForm.tsx`](src/components/PrivateApplicationForm.tsx:1) has been configured with the correct Google Form URL and entry IDs.

### Google Form Action URL

```typescript
const GOOGLE_FORM_ACTION =
    "https://docs.google.com/forms/d/e/1FAIpQLSc50Q_kfTRfXM5BHHZqBzyfsweu8l4YtoNd_FryRNLeXK81XQ/formResponse";
```

### Entry IDs

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

## Accessing the Form

The application form is accessible at:

- **Development:** `http://localhost:5173/private-application`
- **Production:** `https://yourdomain.com/private-application`

## Testing the Form

1. Start your development server: `npm run dev`
2. Navigate to `http://localhost:5173/private-application`
3. Fill out the form with test data
4. Submit the form
5. Check your Google Form responses to verify the data was submitted

## Email Notifications

To set up automated email notifications:

1. Open your Google Form
2. Click the "Responses" tab
3. Click the three dots (⋮) in the top right
4. Select "Get email notifications for new responses"

For more advanced email automation with custom templates, use the [`PRIVATE_EMAIL_SCRIPT.gs`](PRIVATE_EMAIL_SCRIPT.gs:1) Google Apps Script.

## Calendly Integration

The form includes a direct link to your Calendly page for booking strategy calls:

```
https://calendly.com/joannahortonmcpherson/discovery
```

After successful form submission, users see a success modal with a button to book their Private Strategy Call.

## Notes

- The form uses `no-cors` mode for submission, which means we can't read the response from Google Forms
- If the fetch fails, there's a fallback that opens the form in a new tab
- All fields are required as specified
- The form redirects users to book a Calendly call after successful submission
- The "Speaking Experience Level" question is not included in the Google Form (13 questions total)

## Form URL

The live Google Form can be accessed at:

```
https://docs.google.com/forms/d/e/1FAIpQLSc50Q_kfTRfXM5BHHZqBzyfsweu8l4YtoNd_FryRNLeXK81XQ/viewform
```

## Email Template

When you receive form submissions, you can use this email template:

---

**Subject:** New Private Application - [Applicant Name]

Thank you for your interest in our private advisory services!

I need more details about your application.

Here's a summary of what you've shared:

**Basic Info:**

- Name: [First Name] [Last Name]
- Email: [Email]
- Phone: [Phone]
- Website: [Website]
- Social Media: [Social Media Links]

**Leadership Profile:**

- Revenue Range: [Revenue Range]
- Years in Business: [Years in Business]

**Clarity & Desire:**

- Preparing For: [Preparing For]
- Blocked Voice: [Blocked Voice]
- Why Now: [Why Now]
- Change For You: [Change For You]

**Investment:**

- Ready to Invest: [Investment Ready]

**Next Steps:**
The next step is to book your Private Strategy Call:
https://calendly.com/joannahortonmcpherson/discovery

I look forward to speaking with you!

Best regards,
Joanna Horton McPherson

---

You can set up automated emails using Google Apps Script. See the [`PRIVATE_EMAIL_SCRIPT.gs`](PRIVATE_EMAIL_SCRIPT.gs:1) file for the script.
