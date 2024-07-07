import "./App.css";
import WelcomePage from "./CombinedComponets/WelcomePage";
import UploadPage from "./Pages/UploadPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PDFPage from "./Pages/PDFPage";
import RandomizerPage from "./Pages/RandomizerPage";
import LoginPage from "./CombinedComponets/LoginPage";
import ContextProvider from "./componets/ContextProvider";

// Set the basename based on the environment
const basename = process.env.NODE_ENV === "production" ? "/ActiveRecall" : "/";

function App() {
  return (
    <div>
      <ContextProvider>
        <Router basename={basename}>
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
