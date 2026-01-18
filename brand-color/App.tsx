import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import SampleLanding from "./pages/SampleLanding";
import SampleLanding2 from "./pages/SampleLanding2";
import SampleLanding3 from "./pages/SampleLanding3";
import SampleLanding1 from "./pages/SampleLanding1";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/sample-landing" element={<SampleLanding />} />
      <Route path="/sample-landing1" element={<SampleLanding1 />} />
      <Route path="/sample-landing2" element={<SampleLanding2 />} />
      <Route path="/sample-landing3" element={<SampleLanding3 />} />
    </Routes>
  );
};

export default App;
