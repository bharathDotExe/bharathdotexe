import React from "react";
import { motion } from "framer-motion";
import SEO from "./SEO";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const Resume = () => {
  return (
    <>
      <SEO title="Resume" description="View and download the professional software engineering resume of Bharath V." url="/resume" />
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Professional Experience</p>
        <h2 className={styles.sectionHeadText}>Resume.</h2>
      </motion.div>

      <div className="mt-12 bg-tertiary p-8 rounded-2xl max-w-4xl mx-auto flex flex-col items-center">
        <p className="text-secondary text-[18px] text-center mb-8 max-w-2xl leading-relaxed">
          You can view a comprehensive list of my skills, experiences, and educational background in my formal resume.
        </p>
        
        <div className="flex flex-wrap justify-center gap-6 w-full">
          <a 
            href="/resume.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-[#915EFF] hover:bg-white hover:text-[#915EFF] text-white py-3 px-6 rounded-xl font-bold text-[16px] transition-all shadow-md flex items-center gap-2"
          >
            Download Resume 1
          </a>
          <a 
            href="/resume1.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-[#915EFF] hover:bg-white hover:text-[#915EFF] text-white py-3 px-6 rounded-xl font-bold text-[16px] transition-all shadow-md flex items-center gap-2"
          >
            Download Resume 2
          </a>
          <a 
            href="/resume2.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-[#915EFF] hover:bg-white hover:text-[#915EFF] text-white py-3 px-6 rounded-xl font-bold text-[16px] transition-all shadow-md flex items-center gap-2"
          >
            Download Resume 3
          </a>
          
          <a 
            href="https://www.linkedin.com/in/bharath-v-442425352/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-black-100 hover:bg-tertiary text-white py-3 px-6 rounded-xl font-bold text-[16px] transition-all shadow-md border border-white/10"
          >
            View on LinkedIn
          </a>
        </div>
        
        <div className="mt-16 w-full text-center flex flex-col gap-10">
           <h3 className="text-white text-[24px] font-bold">My Resumes</h3>
           
           <div className="w-full">
             <h4 className="text-secondary mb-4 font-semibold text-lg text-left">Resume Version 1</h4>
             <div className="w-full h-[600px] md:h-[800px] rounded-xl overflow-hidden border border-white/10 shadow-[0_0_15px_rgba(145,94,255,0.2)] bg-black-200">
               <iframe src="/resume.pdf" width="100%" height="100%" title="Resume 1" className="border-none" />
             </div>
           </div>

           <div className="w-full">
             <h4 className="text-secondary mb-4 font-semibold text-lg text-left">Resume Version 2</h4>
             <div className="w-full h-[600px] md:h-[800px] rounded-xl overflow-hidden border border-white/10 shadow-[0_0_15px_rgba(145,94,255,0.2)] bg-black-200">
               <iframe src="/resume1.pdf" width="100%" height="100%" title="Resume 2" className="border-none" />
             </div>
           </div>

           <div className="w-full">
             <h4 className="text-secondary mb-4 font-semibold text-lg text-left">Resume Version 3</h4>
             <div className="w-full h-[600px] md:h-[800px] rounded-xl overflow-hidden border border-white/10 shadow-[0_0_15px_rgba(145,94,255,0.2)] bg-black-200">
               <iframe src="/resume2.pdf" width="100%" height="100%" title="Resume 3" className="border-none" />
             </div>
           </div>
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Resume, "resume");
