const express = require('express');
const app = express();

const multer = require('multer');
const upload = multer({ dest: 'uploads/' });



app.get('/api', (req, res) => {
  res.send('Hello World');
});

app.post('/api/upload', upload.single('file'), (req, res) => {
    res.send('File uploaded');
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});