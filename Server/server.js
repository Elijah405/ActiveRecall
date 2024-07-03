const express = require('express');
const app = express();
const cors = require('cors');
const multer = require('multer');
const storage = require('./googleCloudConfig');

app.use(cors());
app.use(express.json());
const bucketName = 'studybear-problemsets';


const multerStorage = multer.memoryStorage(); // Store files in memory temporarily
const upload = multer({
  storage: multerStorage,
});

app.post('/api/upload', upload.single('file'), (req, res) => {
  console.log('Received file upload request');
  const userId = req.body.sub;
    if (!userId) {
        return res.status(400).send('User ID not provided.');
    }

  if (!req.file) {
    console.log('No file uploaded');
    return res.status(400).send('No file uploaded.');
  }

   // Define the file path in the bucket
   const fileName = `${Date.now()}-${req.file.originalname}`;
   const userFolder = `users/${userId}`;
   const filePath = `${userFolder}/${fileName}`;

   // Create a writable stream for the file
   const blob = storage.bucket(bucketName).file(filePath);
   const blobStream = blob.createWriteStream();

  blobStream.on('error', (err) => {
    console.error('Error uploading to Google Cloud Storage:', err);
    res.status(500).send({ error: 'Error uploading to Google Cloud Storage' });
  });

  blobStream.on('finish', () => {
    console.log('File uploaded successfully');
    res.status(200).send({ message: 'File uploaded successfully' });
  });

  blobStream.end(req.file.buffer);

});


app.get('/api/pdfs', async (req, res) => {
  const userSub = req.headers['user-sub']; // Assume the sub is passed in the headers
  if (!userSub) {
    return res.status(400).send('No user sub provided.');
  }

  try {
    const [files] = await storage.bucket(bucketName).getFiles({
      prefix: `users/${userSub}/`
    });

    const promises = files
      .filter(file => file.name.endsWith('.pdf'))
      .map(async (file) => {
        const options = {
          version: 'v4',
          action: 'read',
          expires: Date.now() + 1000 * 60 * 60, // 1 hour
        };
        const [url] = await file.getSignedUrl(options);
        return url;
      });

    const pdfUrls = await Promise.all(promises);
    res.json(pdfUrls);
  } catch (error) {
    console.error("Error fetching PDFs:", error);
    res.status(500).send("Error fetching PDFs");
  }
});



const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});