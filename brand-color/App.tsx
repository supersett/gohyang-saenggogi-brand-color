import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import SampleLanding from "./pages/SampleLanding";
const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/sample-landing" element={<SampleLanding />} />
    </Routes>
  );
};

export default App;
