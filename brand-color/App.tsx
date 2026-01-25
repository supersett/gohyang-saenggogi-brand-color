import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import SampleLanding from "./pages/SampleLanding";
import SampleLanding2 from "./pages/SampleLanding2";
import SampleLanding3 from "./pages/SampleLanding3";
import SampleLanding1 from "./pages/SampleLanding1";
import SampleLanding4 from "./pages/SampleLanding4";
import Sample1 from "./pages/Sample1";
import Sample2 from "./pages/Sample2";
import Sample3 from "./pages/Sample3";
import Sample4 from "./pages/Sample4";
import Sample5 from "./pages/Sample5";
import Sample6 from "./pages/Sample6";
import Sample7 from "./pages/Sample7";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/sample-landing" element={<SampleLanding />} />
      <Route path="/sample-landing1" element={<SampleLanding1 />} />
      <Route path="/sample-landing2" element={<SampleLanding2 />} />
      <Route path="/sample-landing3" element={<SampleLanding3 />} />
      <Route path="/sample-landing4" element={<SampleLanding4 />} />
      <Route path="/sample1" element={<Sample1 />} />
      <Route path="/sample2" element={<Sample2 />} />
      <Route path="/sample3" element={<Sample3 />} />
      <Route path="/sample4" element={<Sample4 />} />
      <Route path="/sample5" element={<Sample5 />} />
      <Route path="/sample6" element={<Sample6 />} />
      <Route path="/sample7" element={<Sample7 />} />
    </Routes>
  );
};

export default App;
