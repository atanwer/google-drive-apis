import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
import videoController from './controllers/videoController.js';


app.get('/', (req, res) => {
    res.send('Welcome to the Video Uploader API! 🚀\n\nServer is up and running smoothly.');
});

app.use('/api', videoController);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});