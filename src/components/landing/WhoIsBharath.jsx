import React from "react";
import { motion } from "framer-motion";
import SEO from "../SEO";
import { styles } from "../../styles";
import { textVariant } from "../../utils/motion";

const WhoIsBharath = () => {
  return (
    <div className="pt-[100px] pb-20 max-w-7xl mx-auto px-6 sm:px-16">
      <SEO 
        title="Who is BharathDotExe? | FAQs" 
        description="Frequently asked questions about BharathDotExe (Bharath V), his skills, projects, and AI development background." 
        url="/who-is-bharathdotexe" 
      />
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>FAQ & Quick Facts</p>
        <h1 className={styles.sectionHeadText}>Who is BharathDotExe?</h1>
      </motion.div>

      <div className="mt-12 space-y-6">
        {[
          {
            q: "Who is BharathDotExe?",
            a: "BharathDotExe is the professional online brand of Bharath V, an Indian software engineer specializing in AI and full-stack development."
          },
          {
            q: "What programming languages does BharathDotExe know?",
            a: "He is highly proficient in JavaScript, TypeScript, Python, Java, and C++, using them to build both web platforms and AI tools."
          },
          {
            q: "Is Bharath V available for freelance work?",
            a: "Yes! BharathDotExe is open to exciting freelance opportunities, open-source collaborations, and tech internships. Check the Contact page to reach out."
          },
          {
            q: "What is his most notable project?",
            a: "Projects like UniShark and Suraksha highlight his ability to merge complex backend systems with highly interactive frontends."
          }
        ].map((faq, index) => (
          <div key={index} className="bg-tertiary p-6 rounded-2xl shadow-card border-l-4 border-[#915EFF]">
            <h3 className="text-white text-[20px] font-bold mb-3">{faq.q}</h3>
            <p className="text-secondary text-[16px] leading-relaxed">{faq.a}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhoIsBharath;
