# GitHub Actions CI/CD Setup Guide for cPanel FTP Deployment

## Overview

This guide explains how to set up automated deployment from GitHub to your cPanel hosting via FTP using GitHub Actions.

## Prerequisites

- GitHub repository with your code
- cPanel hosting account with FTP access
- Node.js project (Vite/React in this case)

## Setup Steps

### 1. Repository Secrets Configuration

1. Go to your GitHub repository
2. Navigate to: **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret** and add the following secrets:

   **Required Secrets:**
   - **Name**: `FTP_PASSWORD`
     **Value**: Your cPanel FTP password
   
   - **Name**: `GEMINI_API_KEY`
     **Value**: Your Gemini API key (for the build process)

### 2. Workflow File

The workflow file is already created at `.github/workflows/deploy.yml`. This file:

- Triggers on push to `main` branch
- Sets up Node.js and pnpm
- Installs dependencies
- Builds the project
- Deploys to cPanel via FTP

### 3. FTP Configuration Details

**Current Configuration:**
- **FTP Server**: ftp.skolyn.se
- **Username**: skolynse  
- **Port**: 21
- **Protocol**: FTP
- **Local Directory**: ./dist/ (build output)
- **Remote Directory**: ./public_html/ (cPanel web root)

### 4. Deployment Process

1. **Push to main branch**: Any push to the main branch triggers the deployment
2. **Build**: GitHub Actions runs `pnpm build` to create production files
3. **Deploy**: The `dist` folder contents are uploaded to your cPanel's `public_html` directory
4. **Live**: Your site is automatically updated at your domain

## Troubleshooting

### Common Issues:

1. **FTP Connection Failed**
   - Verify FTP credentials in GitHub secrets
   - Check that FTP is enabled in cPanel
   - Ensure port 21 is accessible

2. **Build Failures**
   - Check that all required environment variables are set in GitHub secrets
   - Verify Node.js version compatibility
   - Review build logs in GitHub Actions tab

3. **Files Not Uploading**
   - Confirm `server-dir` path is correct (usually `./public_html/`)
   - Check cPanel file permissions
   - Verify disk space availability

### Checking Deployment Status

1. Go to your GitHub repository
2. Click on **Actions** tab
3. View the latest workflow run to see deployment status and logs

## Security Best Practices

1. **Never commit sensitive data** like passwords or API keys to your repository
2. **Use GitHub Secrets** for all sensitive configuration
3. **Regularly rotate** FTP passwords and API keys
4. **Monitor deployment logs** for any security issues

## Alternative: SFTP/FTPS

If your cPanel supports SFTP or FTPS, you can modify the workflow to use more secure protocols:

```yaml
# For SFTP (if supported)
protocol: sftp
port: 22

# For FTPS (if supported)  
protocol: ftps
port: 21
security: strict
```

## Manual Deployment Backup

If automated deployment fails, you can always deploy manually:

1. Run `pnpm build` locally
2. Upload `dist` folder contents to cPanel File Manager → `public_html`
3. Or use an FTP client like FileZilla with the same credentials

## Support

For issues with:
- **GitHub Actions**: Check the Actions tab in your repository
- **cPanel/FTP**: Contact your hosting provider
- **Build Process**: Review the project's package.json and build configuration
