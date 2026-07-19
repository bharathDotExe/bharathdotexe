import { useState, useCallback } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
    {/* Optional: Add a brief preview of other sections on home page */}
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

        <div className='relative z-0'>
          <StarsCanvas />
          <footer className='bg-tertiary text-secondary py-10 mt-12 z-10 relative border-t border-black-200'>
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              <div>
                <h4 className="text-white font-bold text-[18px] mb-4">BharathDotExe</h4>
                <p className="text-[14px] leading-relaxed mb-4">
                  BharathDotExe is the official developer identity of Bharath V. 
                  Specializing in AI, Machine Learning, and Full-Stack Architecture.
                </p>
                <p className="text-[14px]">
                  &copy; {new Date().getFullYear()} Bharath V. All rights reserved.
                </p>
              </div>
              
              <div>
                <h4 className="text-white font-bold text-[18px] mb-4">Discover</h4>
                <ul className="flex flex-col gap-2 text-[14px]">
                  <li><Link to="/bharathdotexe" className="hover:text-[#915EFF]">What is BharathDotExe?</Link></li>
                  <li><Link to="/about-bharathdotexe" className="hover:text-[#915EFF]">About Bharath</Link></li>
                  <li><Link to="/who-is-bharathdotexe" className="hover:text-[#915EFF]">Who is Bharath V?</Link></li>
                  <li><Link to="/developer" className="hover:text-[#915EFF]">Software Engineer</Link></li>
                  <li><Link to="/portfolio" className="hover:text-[#915EFF]">Full Portfolio</Link></li>
                </ul>
              </div>

              <div>
                <h4 className="text-white font-bold text-[18px] mb-4">Expertise</h4>
                <ul className="flex flex-col gap-2 text-[14px]">
                  <li><Link to="/ai-engineer" className="hover:text-[#915EFF]">AI Engineer</Link></li>
                  <li><Link to="/machine-learning" className="hover:text-[#915EFF]">Machine Learning</Link></li>
                  <li><Link to="/open-source" className="hover:text-[#915EFF]">Open Source</Link></li>
                </ul>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
