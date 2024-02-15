import { Router } from 'express';
const router = Router();
import { downloadVideo, uploadVideo } from '../services/googleDriveServices.js';

router.get('/download-video', async (req, res) => {
    try {
        const fileId = req.query.fileId;
        const destinationPath = './downloaded_video.mp4';
        await downloadVideo(fileId, destinationPath);
        res.status(200).json({ message: 'Video downloaded successfully.', destinationPath });
    } catch (error) {
        console.error('Error downloading video:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.get('/upload-video', async (req, res) => {
    try {
        const sourcePath = './downloaded_video.mp4';
        const destinationFolderId = req.query.destinationFolderId;
        const uploadedFileId = await uploadVideo(sourcePath, destinationFolderId);
        res.status(200).json({ message: 'Video uploaded successfully.', uploadedFileId });
    } catch (error) {
        console.error('Error uploading video:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

export default router;
