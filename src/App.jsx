import { useState, useCallback } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
  Biography,
  Certifications,
  Resume,
  Achievements,
  Blog,
  ProjectDetails
} from "./components";
import GlobalLoader from "./components/GlobalLoader";
import BharathDotExe from "./components/landing/BharathDotExe";
import AboutBharath from "./components/landing/AboutBharath";
import WhoIsBharath from "./components/landing/WhoIsBharath";
import Developer from "./components/landing/Developer";
import Portfolio from "./components/landing/Portfolio";
import AIEngineer from "./components/landing/AIEngineer";
import MachineLearning from "./components/landing/MachineLearning";
import OpenSource from "./components/landing/OpenSource";

const Home = () => (
  <>
    <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
      <Hero />
    </div>
    <About />
    <Experience />
    <Tech />
    <Works />
    <Feedbacks />
    <div className='relative z-0'>
      <Contact />
      <StarsCanvas />
    </div>
  </>
);

const App = () => {
  const [loading, setLoading] = useState(true);

  const handleFinish = useCallback(() => {
    setLoading(false);
  }, []);

  return (
    <BrowserRouter>
      <AnimatePresence>
        {loading && <GlobalLoader key="loader" onFinish={handleFinish} />}
      </AnimatePresence>

      <div
        className='relative z-0 bg-primary min-h-screen flex flex-col'
        style={{ visibility: loading ? "hidden" : "visible" }}
      >
        <Navbar />
        
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/biography" element={<Biography />} />
            <Route path="/skills" element={<Tech />} />
            <Route path="/projects" element={<Works />} />
            <Route path="/projects/:id" element={<ProjectDetails />} />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/achievements" element={<Achievements />} />
            <Route path="/blog" element={<Blog />} />
            
            {/* Landing Pages */}
            <Route path="/bharathdotexe" element={<BharathDotExe />} />
            <Route path="/about-bharathdotexe" element={<AboutBharath />} />
            <Route path="/who-is-bharathdotexe" element={<WhoIsBharath />} />
            <Route path="/developer" element={<Developer />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/ai-engineer" element={<AIEngineer />} />
            <Route path="/machine-learning" element={<MachineLearning />} />
            <Route path="/open-source" element={<OpenSource />} />
          </Routes>
        </div>

      </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
