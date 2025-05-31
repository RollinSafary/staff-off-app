# React TypeScript Firebase Monorepo Template

This is a template project that provides a monorepo structure for building applications with React, TypeScript, and Firebase. The monorepo is set up using pnpm workspaces.

## Project Structure

```
.
├── apps/
│   ├── frontend/ - React application using Vite
│   └── backend/  - Firebase Functions backend
├── packages/
│   ├── schemas/  - Shared data schemas
│   └── shared/   - Shared utilities and components
```

## Prerequisites

- Node.js v20.x
- [pnpm](https://pnpm.io/) v10.11.0 or higher
- [Firebase CLI](https://firebase.google.com/docs/cli) (for backend development)

## Getting Started

### 1. Clone the repository

```bash
git clone <repository-url>
cd staff-off-app
```

### 2. Install dependencies

```bash
pnpm install
```

### 3. Configure environment variables

#### Frontend

Create or update the `.env` file in the `apps/frontend` directory:

```
VITE_FIREBASE_API_KEY=your-api-key
VITE_FEATURE_FLAG_X=true
```

#### Backend

Configure your Firebase project in `apps/backend/.firebaserc`:

```json
{
  "projects": {
    "default": "your-firebase-project-id"
  }
}
```

### 4. Start the development servers

#### Start the backend (Firebase emulators)

```bash
pnpm backend
```

This will start Firebase emulators for Functions, Firestore, Realtime Database, and more. The Firebase Emulator UI will be available at http://localhost:3030.

#### Start the frontend

```bash
pnpm frontend
```

This will start the Vite dev server for the React application. The application will be available at http://localhost:5173.

## Available Scripts

### Root Scripts

- `pnpm frontend` - Start the frontend development server
- `pnpm backend` - Start the backend Firebase emulators
- `pnpm test` - Run tests for all workspaces

### Frontend Scripts

- `pnpm --filter frontend run start` - Start the development server
- `pnpm --filter frontend run build` - Build for production
- `pnpm --filter frontend run preview` - Preview production build
- `pnpm --filter frontend run test` - Run tests
- `pnpm --filter frontend run t:generate` - Generate translation files

### Backend Scripts

- `pnpm --filter backend run start` - Start Firebase emulators
- `pnpm --filter backend run start-with-export` - Start Firebase emulators with data import/export
- `pnpm --filter backend run test` - Run tests

## Development Workflow

1. Make changes to shared packages when needed
2. Develop frontend and backend applications that use these shared packages
3. Test your changes
4. Build and deploy

## For local run
1. Create .env file in apps/frontend
2. past the content below
```plaintext
VITE_FIREBASE_API_KEY=demo-key
VITE_FIREBASE_AUTH_DOMAIN=localhost
VITE_FIREBASE_PROJECT_ID=demo-project
VITE_FIREBASE_STORAGE_BUCKET=demo-project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=123456789
VITE_FIREBASE_APP_ID=demo-app-id
VITE_FIREBASE_MEASUREMENT_ID=G-XXXXXXX

# Optional: point to emulators
VITE_USE_FIREBASE_EMULATORS=true
```

## License

ISC