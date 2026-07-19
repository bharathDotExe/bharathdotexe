import React from "react";
import { motion } from "framer-motion";
import SEO from "./SEO";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { certifications } from "../constants";
import { textVariant } from "../utils/motion";

const CertificationCard = ({ name, issuer, date, image, link, index }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="bg-tertiary p-5 rounded-2xl shadow-card flex flex-col"
  >
    <div className="w-full h-[150px] bg-black-100 rounded-xl mb-4 flex items-center justify-center overflow-hidden">
      <img src={image} alt={name} className="object-cover w-full h-full opacity-50 hover:opacity-100 transition-opacity" />
    </div>
    <div className="flex-grow">
      <h3 className="text-white font-bold text-[18px] mb-2">{name}</h3>
      <p className="text-secondary text-[14px]">{issuer}</p>
    </div>
    <div className="mt-4 flex justify-between items-center">
      <span className="text-[#915EFF] text-[14px] font-medium">{date}</span>
      <a href={link} target="_blank" rel="noopener noreferrer" className="text-white text-[14px] bg-black-200 px-4 py-2 rounded-lg hover:bg-[#915EFF] transition-colors">
        Verify
      </a>
    </div>
  </motion.div>
);

const Certifications = () => {
  return (
    <>
      <SEO title="Certifications" description="Professional certifications achieved by Bharath V in Cloud, Data, and AI." url="/certifications" />
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Continuous Learning</p>
        <h2 className={styles.sectionHeadText}>Certifications.</h2>
      </motion.div>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {certifications.map((cert, index) => (
          <CertificationCard key={cert.name} index={index} {...cert} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Certifications, "certifications");
