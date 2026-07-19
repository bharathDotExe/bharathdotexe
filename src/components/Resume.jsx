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
          {/* Note: User will need to add their actual resume.pdf to the public folder */}
          <a 
            href="/resume.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-[#915EFF] hover:bg-white hover:text-[#915EFF] text-white py-4 px-10 rounded-xl font-bold text-[18px] transition-all shadow-md flex items-center gap-3"
          >
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1.2em" width="1.2em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"></path></svg>
            Download PDF Resume
          </a>
          
          <a 
            href="https://www.linkedin.com/in/bharath-v-442425352/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-black-100 hover:bg-tertiary text-white py-4 px-10 rounded-xl font-bold text-[18px] transition-all shadow-md border border-white/10"
          >
            View on LinkedIn
          </a>
        </div>
        
        <div className="mt-16 w-full text-left">
           <h3 className="text-white text-[24px] font-bold mb-4">Quick Summary</h3>
           <ul className="list-disc list-inside text-secondary space-y-3 text-[16px]">
              <li>BCA Student at Garden City University (9.5 CGPA).</li>
              <li>Founder & Sole Technical Developer of UniShark.</li>
              <li>Expertise in React, Python, Node.js, Next.js, and GenAI.</li>
              <li>Strong track record of building production-ready architectures and systems.</li>
           </ul>
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Resume, "resume");
