# Chat-App

A simple real-time chat application (React + Express + MongoDB). This repository contains a `client` (Vite/React) and a `server` (Express) folder. The app supports user registration, login, protected routes, and basic messaging.

**Contents**
- `client/` — React frontend built with Vite
- `server/` — Express backend with auth and API routes

**Features**
- User registration and login (JWT token returned from server)
- Protected frontend routes that require authentication
- List of users and one-to-one chat UI skeleton

**Prerequisites**
- Node.js (16+ recommended)
- npm or yarn
- MongoDB (local or Atlas)

**Environment variables (server)**
Create a `.env` file inside the `server/` folder with the following values:

```
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000
```

**Install & Run (Windows PowerShell)**

1) Server

```powershell
cd server
npm install
npm run dev
```

2) Client

```powershell
cd client
npm install
npm run dev
```

Open the client in a browser (Vite normally runs at `http://localhost:5173` or the port shown in the terminal). The frontend expects the backend API at `http://localhost:5000` by default.

**Auth flow / Protected Routes**
- The server returns a `userToken` and `userId` on successful login/register. The frontend stores these in `localStorage` (keys: `userToken`, `userId`, `loggedIn`) and uses an `AuthContext` to drive protected routes.
- If you change API endpoints or ports, update the axios requests in the client pages (`/login`, `/register`, etc.).

**Useful scripts**
- `server`: `npm run dev` — start the Express server (uses `nodemon` if configured)
- `client`: `npm run dev` — start Vite dev server

**Troubleshooting**
- If protected routes keep redirecting to `/login` after sign-in:
	- Verify backend returns `status: 'ok'` and `userToken` in the response.
	- Check `localStorage` for `userToken`, `userId`, and `loggedIn` keys.
	- Ensure the client `AuthProvider` is mounted (see `client/src/main.jsx`).
- If server fails to start, confirm `.env` values and MongoDB connectivity.

**Next steps / improvements**
- Add middleware to protect server endpoints (verify JWT on API routes).
- Improve token storage (consider httpOnly cookies) and refresh tokens.
- Add real-time messaging using WebSockets (there is a `websocket/` folder skeleton).

**License & Contributing**
This project is for learning/demonstration. Feel free to open issues or contribute improvements.
