# Skolyn - Clinical Intelligence Platform

This contains everything you need to run your app locally and deploy it automatically to cPanel.

## Run Locally

**Prerequisites:** Node.js and pnpm

1. Install dependencies:
   ```bash
   pnpm install
   ```
2. Copy `.env.example` to `.env` and set your environment variables:
   ```bash
   cp .env.example .env
   ```
   Then edit `.env` and add your actual Gemini API key.

3. Run the app:
   ```bash
   pnpm dev
   ```

## Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build
- `pnpm type-check` - Run TypeScript type checking
- `pnpm clean` - Clean install (removes node_modules and reinstalls)

## CI/CD Deployment

This project is configured with GitHub Actions for automatic deployment to cPanel via FTP.

### Setup Instructions

1. **GitHub Secrets Configuration**
   Go to your GitHub repository → Settings → Secrets and variables → Actions, and add these secrets:
   
   - `FTP_PASSWORD`: Your cPanel FTP password
   - `GEMINI_API_KEY`: Your Gemini API key for the build process

2. **Deployment Trigger**
   - Automatic deployment occurs when you push to the `main` branch
   - The workflow builds the project and uploads the `dist` folder to your cPanel's `public_html` directory

3. **FTP Configuration**
   The deployment uses these settings:
   - **Server**: ftp.skolyn.se
   - **Username**: skolynse
   - **Port**: 21
   - **Local directory**: ./dist/
   - **Remote directory**: ./public_html/

### Manual Deployment

If you need to deploy manually:

1. Build the project:
   ```bash
   pnpm build
   ```

2. Upload the contents of the `dist` folder to your cPanel's `public_html` directory via FTP.

## Project Structure

```
├── components/          # React components
├── .github/workflows/   # GitHub Actions CI/CD
├── dist/               # Build output (auto-generated)
├── .env                # Environment variables (local)
├── .env.example        # Environment variables template
└── ...
```
