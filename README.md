# SAMA Portfolio

React, TypeScript, and Tailwind portfolio for Maryam Mahmoudi. The app is converted from the original `sama-portfolio.html` and keeps the same visual design, copy, sections, and interactions.

## Features

- Vite React app with TypeScript
- Tailwind implementation of the original HTML design
- Atomic design structure: atoms, molecules, organisms, templates, pages
- Portfolio sections for hero, about, stack, experience, inventions, contact, and footer
- Scroll reveal, typewriter, active navigation, scroll progress, custom cursor, and certificate gallery interactions
- Firebase Hosting configuration for production deployment
- Basic GitHub Actions CI and production deploy workflows
- Husky pre-commit, pre-push, commit message, and secret scan hooks

## Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- Firebase Hosting
- GitHub Actions
- Husky
- pnpm

## Requirements

- Node.js 20+
- pnpm 9+

## Local Setup

```bash
pnpm install
pnpm dev
```

Open the local URL shown by Vite.

If you add or change environment variables, stop and restart Vite so the new values are loaded.

## Scripts

```bash
pnpm dev
pnpm build
pnpm preview
pnpm lint
pnpm typecheck
pnpm format
pnpm format:check
```

## Project Structure

```text
src/
  components/
    atoms/
    molecules/
    organisms/
    templates/
  content/
  hooks/
  pages/
  styles/
  types/
```

## GitHub Repository Setup

Create a GitHub repository named `SAMA portfolio`, then connect this local project:

```bash
git init
git branch -M main
git remote add origin git@github.com:<your-username>/<repo-name>.git
git add .
git commit -m "feat: create sama portfolio react app"
git push -u origin main
```

GitHub URLs usually use a slug, for example `SAMA-portfolio`, even if the display name is `SAMA portfolio`.

## Firebase Setup

This project does not create a Firebase project. Create one from the Firebase Console when you are ready.

After creating the project, update `.firebaserc`:

```json
{
  "projects": {
    "default": "your-firebase-project-id"
  }
}
```

Local deploy after setup:

```bash
pnpm build
pnpm exec firebase deploy --only hosting
```

## Contact Form Setup

The contact form sends messages with EmailJS. It does not use `mailto`; messages are submitted from the browser through EmailJS and delivered to the inbox connected to your EmailJS service.

### 1. Create the EmailJS service

1. Go to [EmailJS](https://www.emailjs.com/) and create an account.
2. Open **Email Services**.
3. Connect the inbox provider you want to receive messages in, for example Gmail or Outlook.
4. Copy the generated **Service ID**.

### 2. Create the EmailJS template

1. Open **Email Templates**.
2. Create a template for portfolio contact messages.
3. Add these variables to the template:

- `{{user_name}}`
- `{{user_email}}`
- `{{message}}`

Example template body:

```text
New portfolio message

Name: {{user_name}}
Email: {{user_email}}

Message:
{{message}}
```

4. Copy the **Template ID** from the template settings.

### 3. Get the public key

1. Open **Account** in EmailJS.
2. Copy the **Public Key**.

### 4. Add local environment variables

Create a local `.env` file in the project root:

```bash
VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxx
```

Restart the dev server after creating or changing `.env`:

```bash
pnpm dev
```

### Message sending flow

1. Visitor enters name, email, and message.
2. The app validates the fields:
   - name is required
   - email must look valid
   - message must be at least 10 characters
   - message must stay under 2000 characters
3. Submit button changes to `Sending Message…` and becomes disabled.
4. `src/services/contact-email.ts` calls `emailjs.send(...)` with:
   - `user_name`
   - `user_email`
   - `message`
5. EmailJS sends the message using your configured service and template.
6. On success, the form resets and shows: `Thank you. Your message has been sent.`
7. On failure, the app shows a safe error message without exposing provider details.

### Production environment variables

Add the same `VITE_EMAILJS_*` values to the environment used by GitHub Actions/Firebase production builds.

For GitHub Actions, add these as repository secrets or environment variables and expose them during the build if needed:

- `VITE_EMAILJS_SERVICE_ID`
- `VITE_EMAILJS_TEMPLATE_ID`
- `VITE_EMAILJS_PUBLIC_KEY`

EmailJS public keys are designed for browser usage, but do not put private keys in Vite environment variables. Use EmailJS origin restrictions, rate limits, and reCAPTCHA if the form becomes public.

## GitHub Actions Secrets

Add these repository secrets in GitHub before production deployment:

- `FIREBASE_PROJECT_ID`: Firebase project ID
- `FIREBASE_SERVICE_ACCOUNT`: Firebase service account JSON for Hosting deploys

The production deploy workflow runs on pushes to `main` and manual dispatch. It installs dependencies, runs lint, typecheck, build, then deploys to Firebase Hosting live.

## Validation Checklist

Run before pushing:

```bash
pnpm lint
pnpm typecheck
pnpm build
```

## Husky

Hooks are configured for:

- `pre-commit`: lint-staged and secret scanning
- `pre-push`: typecheck and build
- `commit-msg`: conventional commit validation

If hooks are not installed after cloning, run:

```bash
pnpm install
```
