import React from "react";
import { motion } from "framer-motion";
import SEO from "./SEO";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { biographyTimeline } from "../constants";
import { textVariant } from "../utils/motion";

const BiographyCard = ({ year, title, description, index }) => (
  <motion.div
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="flex flex-col md:flex-row gap-6 bg-tertiary p-6 rounded-2xl shadow-card w-full mb-8 relative border-l-4 border-[#915EFF]"
  >
    <div className="md:w-1/4">
      <h3 className="text-[#915EFF] font-black text-[24px]">{year}</h3>
    </div>
    <div className="md:w-3/4">
      <h4 className="text-white font-bold text-[20px] mb-2">{title}</h4>
      <p className="text-secondary text-[16px] leading-[30px]">{description}</p>
    </div>
  </motion.div>
);

const Biography = () => {
  return (
    <>
      <SEO title="Biography & Journey" description="Professional timeline and biography of Bharath V." url="/biography" />
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Journey</p>
        <h2 className={styles.sectionHeadText}>Biography.</h2>
      </motion.div>

      <div className="mt-12 max-w-4xl">
        <div className="mb-12">
          <p className="text-secondary text-[17px] leading-[30px]">
            Hi, I'm Bharath V, a passionate Software Engineer and AI Agent Builder from Bangalore. 
            I'm currently pursuing my BCA at Garden City University (9.5 CGPA).
            I love building scalable software architectures, highly interactive frontends, and multi-agent AI systems that solve real-world problems.
          </p>
        </div>

        <div className="relative">
          {biographyTimeline.map((item, index) => (
            <BiographyCard key={item.year} index={index} {...item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Biography, "biography");
