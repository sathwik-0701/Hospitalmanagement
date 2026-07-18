link : https://hospitalmanagement-frontend-m8q0.onrender.com
# Prescripto - Hospital Management System
A modern MERN stack hospital management and doctor appointment booking system. The project is split into three main components: a client facing frontend, an admin/doctor portal, and a backend API.
## Project Structure
- **`frontend`**: The client-facing website where patients can view doctors, book appointments, and manage their profiles.
- **`admin-portal`**: The dashboard for administrators and doctors to manage appointments, schedules, and profiles.
- **`backend`**: The Node.js / Express API and database connection.
---
## Deployment Configuration (Render)
This project is deployed on Render using the following settings:
### 1. Backend Service (`backend`)
- **Service Type**: Web Service
- **Build Command**: `npm run build` (or your backend build command)
- **Start Command**: `npm start`
- **Environment Variables**: Set your database URI, JWT secret, and port as needed.
- **Live URL**: `https://hospitalmanagement-backend-moev.onrender.com`
### 2. Admin Portal Service (`admin-portal`)
- **Service Type**: Static Site (or Web Service)
- **Root Directory**: `admin-portal`
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`
- **Environment Variables**:
  | Key | Value | Description |
  | :--- | :--- | :--- |
  | **`VITE_BACKEND_URL`** | `https://hospitalmanagement-backend-moev.onrender.com` | Points to your deployed Backend API |
- **Live URL**: `https://hospitalmanagement-admin-portal.onrender.com`
### 3. Frontend Service (`frontend`)
- **Service Type**: Static Site (or Web Service)
- **Root Directory**: `frontend`
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`
- **Environment Variables**:
  | Key | Value | Description |
  | :--- | :--- | :--- |
  | **`VITE_BACKEND_URL`** | `https://hospitalmanagement-backend-moev.onrender.com` | Points to your deployed Backend API |
  | **`VITE_ADMIN_URL`** | `https://hospitalmanagement-admin-portal.onrender.com` | Points to your deployed Admin/Doctor Portal |
- **Live URL**: `https://hospitalmanagement-frontend-m8q0.onrender.com`
---
## Local Development Setup
To run the application locally on your machine, follow these steps:
### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed.
### 1. Run the Backend
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up your `.env` file with your Mongo DB URI and JWT Secret.
4. Start the development server:
   ```bash
   npm run dev
   ```
### 2. Run the Admin Portal
1. Navigate to the admin-portal directory:
   ```bash
   cd ../admin-portal
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the dev server:
   ```bash
   npm run dev
   ```
   *(By default, runs on `http://localhost:5174`)*
### 3. Run the Frontend Client
1. Navigate to the frontend directory:
   ```bash
   cd ../frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the dev server:
   ```bash
   npm run dev
   ```
   *(By default, runs on `http://localhost:5173`)*
