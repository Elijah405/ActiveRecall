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

// <!DOCTYPE html>
// <html lang="en">
//   <head>
//     <meta charset="UTF-8" />
//     <link rel="icon" type="image/svg+xml" href="/vite.svg" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <title>StudyBear.Online</title>
//     <script src="https://accounts.google.com/gsi/client" async defer></script>
//   </head>
//   <body>
//     <div id="root"></div>
//     <script type="module" src="/src/main.tsx"></script>
//   </body>
// </html>
