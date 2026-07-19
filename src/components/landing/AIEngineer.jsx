import React from "react";
import { motion } from "framer-motion";
import SEO from "../SEO";
import { styles } from "../../styles";
import { textVariant } from "../../utils/motion";

const AIEngineer = () => {
  return (
    <div className="pt-[100px] pb-20 max-w-7xl mx-auto px-6 sm:px-16">
      <SEO 
        title="AI Engineer & Agent Builder | BharathDotExe" 
        description="BharathDotExe specializes in AI Engineering, building multi-agent systems, integrating LLMs, and creating smart applications." 
        url="/ai-engineer" 
      />
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Artificial Intelligence</p>
        <h1 className={styles.sectionHeadText}>AI Engineer.</h1>
      </motion.div>

      <div className="mt-12 bg-tertiary p-8 rounded-2xl shadow-card">
        <h3 className="text-white text-[24px] font-bold mb-4">Building Intelligent Systems</h3>
        <p className="text-secondary text-[18px] leading-relaxed mb-6">
          As an <strong>AI Engineer</strong>, BharathDotExe designs and deploys next-generation artificial intelligence solutions. 
          This goes beyond simple API calls; it involves architecting complex, multi-agent systems that can autonomously reason, plan, and execute tasks.
        </p>
        
        <div className="space-y-6 mt-8">
          <div className="border-l-4 border-[#915EFF] pl-6 py-2">
            <h4 className="text-white font-bold text-[20px] mb-2">LLM Integration & Prompt Engineering</h4>
            <p className="text-secondary text-[16px]">Integrating cutting-edge models (OpenAI, Gemini, Claude) into web applications to provide conversational interfaces and automated workflows.</p>
          </div>
          <div className="border-l-4 border-pink-500 pl-6 py-2">
            <h4 className="text-white font-bold text-[20px] mb-2">Multi-Agent Architectures</h4>
            <p className="text-secondary text-[16px]">Designing ecosystems where specialized AI agents collaborate to solve complex, multi-step user requests efficiently.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIEngineer;
