import "./App.css";
import WelcomePage from "./CombinedComponets/WelcomePage";
import MainPage from "./Pages/MainPage";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PDFPage from "./Pages/PDFPage";
import RandomizerPage from "./Pages/RandomizerPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/login" element={<MainPage />} />
        <Route path="/upload" element={<PDFPage />} />
        <Route path="/study" element={<RandomizerPage />} />
      </Routes>
    </Router>
  );
}

export default App;
