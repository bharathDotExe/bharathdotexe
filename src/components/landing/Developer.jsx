import React from "react";
import { motion } from "framer-motion";
import SEO from "../SEO";
import { styles } from "../../styles";
import { textVariant } from "../../utils/motion";

const Developer = () => {
  return (
    <div className="pt-[100px] pb-20 max-w-7xl mx-auto px-6 sm:px-16">
      <SEO 
        title="Software Engineer | BharathDotExe" 
        description="BharathDotExe's software engineering philosophy, clean code practices, and full-stack architecture expertise." 
        url="/developer" 
      />
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>The Craft</p>
        <h1 className={styles.sectionHeadText}>Software Engineer.</h1>
      </motion.div>

      <div className="mt-12 bg-tertiary p-8 rounded-2xl shadow-card">
        <h3 className="text-white text-[24px] font-bold mb-4">Engineering Philosophy</h3>
        <p className="text-secondary text-[18px] leading-relaxed mb-6">
          As a Software Engineer, <strong>BharathDotExe</strong> believes in writing clean, scalable, and self-documenting code. 
          Software isn't just about making things work; it's about building systems that are robust, maintainable, and highly performant.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 mt-8">
          <div className="bg-black-200 p-6 rounded-xl">
            <h4 className="text-[#915EFF] font-bold text-[18px] mb-2">Frontend Excellence</h4>
            <p className="text-secondary text-[15px]">Creating immersive, 3D-integrated, and highly responsive user interfaces using React, Next.js, Framer Motion, and Tailwind CSS.</p>
          </div>
          <div className="bg-black-200 p-6 rounded-xl">
            <h4 className="text-[#915EFF] font-bold text-[18px] mb-2">Backend Scalability</h4>
            <p className="text-secondary text-[15px]">Architecting secure REST and GraphQL APIs with Node.js, Express, Python, and integrating with PostgreSQL and MongoDB.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Developer;
