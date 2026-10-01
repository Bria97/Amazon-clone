# Base44 Dev Environment

## Project Overview
Amazon clone — a Create React App (React 17, react-scripts 4.0.3) in the `amazon-clone/` subdirectory. Uses Firebase (Auth + Firestore) with credentials hardcoded in `src/firebase.js`. No external secrets required.

## Running
- `docker compose -f docker-compose.base44.yml up -d` from repo root.
- The app runs on port 3000 (CRA dev server with live reload).
- Node 16 is used because react-scripts 4 (webpack 4 / old postcss) is incompatible with Node 18's strict ESM exports.
- `DANGEROUSLY_DISABLE_HOST_CHECK=true` is set so the preview's external hostname is accepted.
- `CHOKIDAR_USEPOLLING=true` enables file watching on the bind mount.

## Architecture
- Frontend only; Firebase is a hosted backend (no local DB or API service).
- Login uses Google popup auth (`src/Login.js`); Firestore stores cart items (`src/App.js`).
- React Router 5 for navigation between Home and Cart pages.

## Notes
- `npm install` runs on container startup (deps are in a named volume to avoid host/node_modules conflicts).
- The Firebase project is `clone-b4a4a`. Google sign-in popup requires the preview origin to be authorized in the Firebase console — if login fails, that's the likely cause.
