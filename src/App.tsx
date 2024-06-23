import "./App.css";
import WelcomePage from "./CombinedComponets/WelcomePage";
import MainPage from "./Pages/MainPage";

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
            <Route path="/upload" element={<MainPage />} />
            <Route path="/view" element={<PDFPage />} />
            <Route path="/study" element={<RandomizerPage />} />
          </Routes>
        </Router>
      </ContextProvider>
    </div>
  );
}

export default App;
