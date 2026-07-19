import React from "react";
import SEO from "./SEO";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { GitHubCalendar } from "react-github-calendar";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <SEO title="About Me" description="Learn more about Bharath V, an AI Engineer and Full Stack Developer based in Bangalore." url="/about" />
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        BCA undergrad specializing in full-stack web development and applied AI/ML. Founder of UniShark. Builds across Android development, AI automation, and client web platforms. Strong foundation in DSA, DBMS, OS. Currently building Suraksha, a multi-agent AI system to detect fake job/internship offers, for a national AI Agent Builder hackathon.<br /><br />
        <b>Location:</b> Bengaluru, India<br />
        <b>Education:</b> Garden City University, 2024–2027 (BCA, CGPA 9.5)<br />
        <b>Currently learning:</b> Docker, Kubernetes, Cloud Computing
      </motion.p>

      <div className='mt-20'>
        <motion.div variants={textVariant()}>
          <h2 className={styles.sectionHeadText}>GitHub Activity.</h2>
        </motion.div>
        <motion.div variants={fadeIn("", "", 0.1, 1)} className='mt-4 flex justify-center bg-tertiary p-5 rounded-2xl'>
          <GitHubCalendar username="bharathDotExe" blockSize={15} blockMargin={5} color="#915EFF" fontSize={16} />
        </motion.div>
      </div>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
