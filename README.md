# Skolyn - Clinical Intelligence Platform

This contains everything you need to run your app locally.

## Run Locally

**Prerequisites:** Node.js and pnpm

1. Install dependencies:
   ```bash
   pnpm install
   ```
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
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
