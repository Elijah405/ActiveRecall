import "./App.css";
import WelcomePage from "./CombinedComponets/WelcomePage";
import UploadPage from "./Pages/UploadPage";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PDFPage from "./Pages/PDFPage";
import RandomizerPage from "./Pages/RandomizerPage";
import LoginPage from "./CombinedComponets/LoginPage";
import ContextProvider from "./componets/ContextProvider";

function App() {
  return (
    <div>
      <ContextProvider>
        <Router>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/welcome" element={<WelcomePage />} />
            <Route path="/upload" element={<UploadPage />} />
            <Route path="/view" element={<PDFPage />} />
            <Route path="/study" element={<RandomizerPage />} />
          </Routes>
        </Router>
      </ContextProvider>
    </div>
  );
}

export default App;

// app.get('/api/pdfs', async (req, res) => {
//   const userSub = req.headers['user-sub']; // Assume the sub is passed in the headers
//   if (!userSub) {
//     return res.status(400).send('No user sub provided.');
//   }

//   try {
//     const [files] = await storage.bucket(bucketName).getFiles({
//       prefix: `users/${userSub}/`
//     });
//     const pdfFiles = files.filter(file => file.name.endsWith('.pdf')).map(file => file.name);
//     res.json(pdfFiles);
//   } catch (error) {
//     console.error("Error fetching PDFs:", error);
//     res.status(500).send("Error fetching PDFs");
//   }
// });
