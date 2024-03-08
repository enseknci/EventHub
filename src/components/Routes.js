import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import FutbolPage from "../pages/FutbolPage";
import MüzikPage from "../pages/MüzikPage";
import SahnePage from "../pages/SahnePage";
import MüzePage from "../pages/MüzePage";
import WorkshopPage from "../pages/WorkshopPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Futbol" element={<FutbolPage />} />
        <Route path="/Müzik" element={<MüzikPage />} />
        <Route path="/Sahne" element={<SahnePage />} />
        <Route path="/Müze" element={<MüzePage />} />
        <Route path="/Workshop" element={<WorkshopPage />} />
      </Routes>
    </Router>
  );
};

export default App;
