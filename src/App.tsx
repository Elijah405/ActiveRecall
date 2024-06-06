import "./App.css";
import WelcomePage from "./CombinedComponets/WelcomePage";
import MainPage from "./Pages/MainPage";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/login" element={<MainPage />} />
      </Routes>
    </Router>
  );
}

export default App;
