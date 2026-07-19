import React from "react";
import { motion } from "framer-motion";
import SEO from "../SEO";
import { styles } from "../../styles";
import { textVariant } from "../../utils/motion";

const AboutBharath = () => {
  return (
    <div className="pt-[100px] pb-20 max-w-7xl mx-auto px-6 sm:px-16">
      <SEO 
        title="About BharathDotExe (Bharath V)" 
        description="Learn more about Bharath V (BharathDotExe), a passionate BCA student and software developer based in Bangalore." 
        url="/about-bharathdotexe" 
      />
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Behind the screen</p>
        <h1 className={styles.sectionHeadText}>About BharathDotExe.</h1>
      </motion.div>

      <div className="mt-12 bg-tertiary p-8 rounded-2xl shadow-card">
        <h3 className="text-white text-[24px] font-bold mb-4">The Creator</h3>
        <p className="text-secondary text-[18px] leading-relaxed mb-6">
          Behind the BharathDotExe moniker is <strong>Bharath V</strong>, a dedicated tech enthusiast from Bangalore, India. 
          Currently pursuing a Bachelor of Computer Applications (BCA) at Garden City University, Bharath maintains a stellar 9.5 CGPA while actively building industry-grade software.
        </p>
        <p className="text-secondary text-[18px] leading-relaxed mb-6">
          BharathDotExe isn't just a username; it's a philosophy of continuous learning. From mastering React and Node.js to diving deep into Python and Artificial Intelligence, the journey is about evolving alongside technology.
        </p>
        <ul className="list-disc list-inside text-secondary text-[18px] mb-8 space-y-2">
          <li><strong>Location:</strong> Bangalore, India</li>
          <li><strong>Education:</strong> BCA, Garden City University</li>
          <li><strong>Core Focus:</strong> AI, Web Development, Systems Architecture</li>
        </ul>
        <a href="/biography" className="bg-[#915EFF] text-white px-6 py-3 rounded-lg font-bold hover:bg-white hover:text-[#915EFF] transition-colors">
          View Full Biography
        </a>
      </div>
    </div>
  );
};

export default AboutBharath;
