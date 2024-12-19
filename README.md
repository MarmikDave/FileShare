# Simple File Sharing Application 

A simple file sharing application that allows users to upload files up to 5MB and share download links instantly. The application is built using Node.js for the backend and React for the frontend.
https://file-share-theta-flax.vercel.app/

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)

## Features

- Upload files with a maximum size of 5MB.
- Generate and share download links for uploaded files.
- Error handling for file size limits and upload failures.
- Responsive design for a better user experience.

## Technologies Used

- **Frontend:**
  - React
  - Tailwind CSS (for styling)
  
- **Backend:**
  - Node.js
  - Express.js
  - MongoDB (for database)
  - Multer (for file uploads)
  
- **Environment:**
  - dotenv (for environment variable management)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/MarmikDave/FileShare.git
   cd FileShare
   ```

2. Navigate to the server directory and install dependencies:
   ```bash
   cd server
   npm install
   ```

3. Navigate to the client directory and install dependencies:
   ```bash
   cd ../client
   npm install
   ```

4. Create a `.env` file in the `server` directory and add your MongoDB URI:
   ```plaintext
   MONGODB_URI=your_mongodb_uri
   BACKEND_URL=your_backend_url
   ```

## Usage

1. Start the backend server:
   ```bash
   cd server
   npm start
   ```

2. Start the frontend application:
   ```bash
   cd client
   npm run dev
   ```

3. Open your browser and navigate to `http://localhost:5173` to access the application.

## API Endpoints

- **POST /api/upload**
  - Upload a file.
  - Request body: FormData containing the file.
  
- **GET /api/file/:id**
  - Download a file by its ID.
