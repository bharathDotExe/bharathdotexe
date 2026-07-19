import React from "react";
import { motion } from "framer-motion";
import SEO from "../SEO";
import { styles } from "../../styles";
import { textVariant } from "../../utils/motion";

const BharathDotExe = () => {
  return (
    <div className="pt-[100px] pb-20 max-w-7xl mx-auto px-6 sm:px-16">
      <SEO 
        title="BharathDotExe | Official Developer Brand" 
        description="BharathDotExe is the official digital identity of Bharath V, an AI and Full-Stack Software Engineer." 
        url="/bharathdotexe" 
      />
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>The Digital Identity</p>
        <h1 className={styles.sectionHeadText}>BharathDotExe.</h1>
      </motion.div>

      <div className="mt-12 bg-tertiary p-8 rounded-2xl shadow-card">
        <p className="text-secondary text-[18px] leading-relaxed mb-6">
          <strong>BharathDotExe</strong> is the official online identity and personal brand of Bharath V. 
          When you see "Bharath.exe" or "BharathDotExe" on GitHub, LinkedIn, or across the web, it represents a commitment to high-quality software engineering, modern AI integration, and scalable full-stack development.
        </p>
        <p className="text-secondary text-[18px] leading-relaxed mb-6">
          The "DotExe" signifies a focus on executable results—turning ideas, designs, and raw data into functional, executable software products that users love. It bridges the gap between theoretical computer science and practical, deployed applications.
        </p>
        <div className="mt-8">
          <a href="/" className="text-[#915EFF] font-bold text-[18px] hover:text-white transition-colors">
            ← Back to Main Portfolio
          </a>
        </div>
      </div>
    </div>
  );
};

export default BharathDotExe;
