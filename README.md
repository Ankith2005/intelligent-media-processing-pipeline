# Backend AI Engineering Take-Home Assignment

## Overview

This project is a Node.js and Express backend application that accepts image uploads, processes them asynchronously, stores metadata in MySQL, and provides APIs to check processing status and retrieve analysis results.

---

## Features

- Image upload API
- Asynchronous image processing
- MySQL database integration
- OCR using Tesseract.js
- Number plate detection
- Brightness check
- Blur check
- Duplicate image check
- Status tracking API
- Results API

---

## Technologies Used

- Node.js
- Express.js
- MySQL
- Multer
- Tesseract.js
- UUID
- dotenv

---

## Project Structure

```
Backend_AI_Engineering_Take-Home_Assignment
│
├── database
├── src
│   ├── config
│   ├── controllers
│   ├── queue
│   ├── routes
│   ├── services
│   ├── utils
│   ├── app.js
│   └── server.js
│
├── uploads
├── tests
├── package.json
├── .env
└── README.md
```

---

## Installation

Clone the repository

```bash
git clone <repository-url>
```

Install dependencies

```bash
npm install
```

---

## Environment Variables

Create a `.env` file:

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=backend_ai_assignment
PORT=3000
```

---

## Run the Project

Development

```bash
npm run dev
```

Production

```bash
npm start
```

---

## API Endpoints

### Upload Image

```
POST /api/upload
```

### Check Processing Status

```
GET /api/status/:processing_id
```

### Get Analysis Result

```
GET /api/results/:processing_id
```

---

## Sample Workflow

1. Upload an image.
2. Receive a processing ID.
3. Check processing status.
4. Retrieve analysis results.

---

## Author

Ankith PG