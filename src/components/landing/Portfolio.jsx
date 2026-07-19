import React from "react";
import { motion } from "framer-motion";
import SEO from "../SEO";
import { styles } from "../../styles";
import { textVariant } from "../../utils/motion";
import { projects } from "../../constants";

const Portfolio = () => {
  return (
    <div className="pt-[100px] pb-20 max-w-7xl mx-auto px-6 sm:px-16">
      <SEO 
        title="BharathDotExe Portfolio | Full-Stack Projects" 
        description="Explore the software portfolio of BharathDotExe, featuring AI apps, e-commerce sites, and immersive 3D experiences." 
        url="/portfolio" 
      />
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Work</p>
        <h1 className={styles.sectionHeadText}>Portfolio.</h1>
      </motion.div>

      <div className="mt-12 bg-tertiary p-8 rounded-2xl shadow-card">
        <p className="text-secondary text-[18px] leading-relaxed mb-8">
          The <strong>BharathDotExe Portfolio</strong> is a collection of high-impact software projects built with modern web technologies and AI frameworks. 
          From intelligent multi-agent systems to beautifully crafted React frontends, this portfolio demonstrates a versatile engineering skill set.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.slice(0, 3).map((project, index) => (
            <div key={index} className="bg-black-100 p-5 rounded-2xl">
              <h3 className="text-white font-bold text-[20px] mb-2">{project.name}</h3>
              <p className="text-secondary text-[14px] line-clamp-3 mb-4">{project.description}</p>
              <a href={`/projects`} className="text-[#915EFF] font-semibold hover:text-white transition-colors">
                View All Projects →
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
