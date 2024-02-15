# Video Uploader API

## Overview
The Video Uploader API is a Node.js application that allows users to download and upload video files to Google Drive. It provides endpoints for downloading videos from Google Drive and uploading videos to a specified folder in Google Drive.

## Features
- Download video files from Google Drive.
- Upload video files to Google Drive.
- Specify destination folder for uploading videos.

## Prerequisites
Before running the application, ensure you have the following installed/configured:
- Node.js version 20.10.0 and npm (Node Package Manager)
- Google Cloud Platform project with Drive API enabled
- Google Service Account with appropriate permissions and credentials
- Environment variables configured in a `.env` file (See `.env.example` for required variables)

## Installation
1. Clone the repository:

```bash
git clone https://github.com/yourusername/video-uploader-api.git
```

2. Navigate to the project directory:

```bash
cd video-uploader-api
```

3. Install dependencies:

```bash
npm install
```

4. Create a `.env` file in the root directory and add your environment variables:

```
PORT=3000
GOOGLE_CLIENT_EMAIL=your-client-email
GOOGLE_PRIVATE_KEY=your-private-key
```

5. Run the application:

```bash
npm start
```

## Usage
### Download Video Endpoint
Endpoint: `/api/download-video`
- Method: GET
- Parameters:
  - `fileId`: ID of the video file in Google Drive to download
- Example Usage:
  ```
  GET http://localhost:3000/download-video?fileId=your-file-id
  ```

### Upload Video Endpoint
Endpoint: `/api/upload-video`
- Method: GET
- Parameters:
  - `destinationFolderId`: ID of the destination folder in Google Drive
- Example Usage:
  ```
  GET http://localhost:3000/upload-video?destinationFolderId=your-folder-id
  ```

## License
This project is licensed under the [MIT License](LICENSE).
