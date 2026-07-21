# Backend AI Engineering Take-Home Assignment

## Overview

This project is a backend application developed using **Node.js**, **Express.js**, and **MySQL** for asynchronous image processing.

The application allows users to upload an image, processes it in the background, stores image metadata in the database, and provides APIs to check processing status and retrieve analysis results.

The image analysis includes:
- OCR (Optical Character Recognition)
- Number plate extraction
- Brightness analysis
- Blur detection
- Duplicate image detection

---

# Features

- Upload images through REST API
- Asynchronous image processing using a background worker
- OCR using Tesseract.js
- Number plate extraction from OCR text
- Brightness analysis
- Blur detection
- Duplicate image detection
- Store image metadata in MySQL
- Track image processing status
- Retrieve complete analysis results

---

# Technologies Used

- Node.js
- Express.js
- MySQL
- Multer
- Tesseract.js
- UUID
- dotenv
- CORS

---

# Project Structure

```
Backend_AI_Engineering_Take-Home_Assignment
│
├── src
│   │
│   ├── config
│   │   ├── db.js
│   │   └── multer.js
│   │
│   ├── controllers
│   │   ├── uploadController.js
│   │   ├── statusController.js
│   │   └── resultController.js
│   │
│   ├── queue
│   │   ├── queue.js
│   │   └── worker.js
│   │
│   ├── routes
│   │   ├── uploadRoutes.js
│   │   ├── statusRoutes.js
│   │   └── resultRoutes.js
│   │
│   ├── services
│   │   │
│   │   ├── checks
│   │   │   ├── ocrCheck.js
│   │   │   ├── numberPlateCheck.js
│   │   │   ├── brightnessCheck.js
│   │   │   ├── blurCheck.js
│   │   │   └── duplicateCheck.js
│   │   │
│   │   └── imageProcessor.js
│   │
│   ├── app.js
│   └── server.js
│
├── uploads
│
├── package.json
├── package-lock.json
├── .gitignore
├── .env
└── README.md
```

---

# Installation

### 1. Clone the repository

```bash
git clone <repository-url>
```

### 2. Navigate to the project folder

```bash
cd Backend_AI_Engineering_Take-Home_Assignment
```

### 3. Install dependencies

```bash
npm install
```

### 4. Configure Environment Variables

Create a `.env` file.

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=backend_ai_assignment
PORT=3000
```

---

# Run the Project

Development Mode

```bash
npm run dev
```

Production Mode

```bash
npm start
```

---

# API Endpoints

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | `/api/upload` | Upload an image |
| GET | `/api/status/:processing_id` | Check image processing status |
| GET | `/api/results/:processing_id` | Retrieve image analysis result |

---

# Workflow

1. Upload an image.
2. Receive a Processing ID.
3. Image is processed asynchronously.
4. Check processing status.
5. Retrieve analysis results.

---

# Sample Analysis Result

```json
{
  "image_id": "processing-id",
  "status": "completed",
  "analysis_result": {
    "ocr": {
      "success": true,
      "extractedText": "..."
    },
    "numberPlate": {
      "success": false,
      "plateNumber": null
    },
    "brightness": {
      "success": true,
      "brightness": "normal"
    },
    "blur": {
      "success": true,
      "blur": "not_blurry"
    },
    "duplicate": {
      "success": true,
      "duplicate": false
    }
  }
}
```

---

# Notes

- Image processing runs asynchronously using a background worker.
- OCR is implemented using Tesseract.js.
- Image metadata and analysis results are stored in MySQL.
- Each uploaded image is identified using a unique Processing ID.

---

# Author

**Ankith PG**