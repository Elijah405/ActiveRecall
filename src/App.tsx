import "./App.css";
import WelcomePage from "./CombinedComponets/WelcomePage";
import MainPage from "./Pages/MainPage";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PDFPage from "./Pages/PDFPage";
import RandomizerPage from "./Pages/RandomizerPage";
import Login from "./componets/Login";
import LoginPage from "./CombinedComponets/LoginPage";

function App() {
  /* global google */
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />

        <Route path="/welcome" element={<WelcomePage />} />
        <Route path="/upload" element={<MainPage />} />
        <Route path="/view" element={<PDFPage />} />
        <Route path="/study" element={<RandomizerPage />} />
      </Routes>
    </Router>
  );
}

export default App;
