import { google } from 'googleapis';
import { createWriteStream, createReadStream } from 'fs';
import path from 'path';

// Function to authenticate with Google Drive API
async function authenticate() {
    const auth = new google.auth.GoogleAuth({
        credentials: {
            client_email: process.env.GOOGLE_CLIENT_EMAIL,
            private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
        },
        scopes: ['https://www.googleapis.com/auth/drive'],
    });
    const drive = google.drive({ version: 'v3', auth });
    return drive;
}

// Function to download a video file from Google Drive
async function downloadVideo(fileId, destinationPath) {
    const drive = await authenticate();
    const dest = createWriteStream(destinationPath);
    const response = await drive.files.get({ fileId, alt: 'media' }, { responseType: 'stream' });
    response.data.on('error', err => {
        console.error('Error downloading video:', err);
        dest.end();
        throw err;
    }).pipe(dest);
}

// Function to upload a video file to Google Drive
async function uploadVideo(sourcePath, destinationFolderId) {
    const drive = await authenticate();
    const fileMetadata = {
        name: path.basename(sourcePath),
        parents: [destinationFolderId],
    };
    const media = {
        mimeType: 'video/mp4',
        body: createReadStream(sourcePath),
    };
    const res = await drive.files.create({ requestBody: fileMetadata, media });
    console.log('Video uploaded successfully:', res.data);
    return res.data.id;
}

export { downloadVideo, uploadVideo };
