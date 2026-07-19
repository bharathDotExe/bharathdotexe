import React from "react";
import { motion } from "framer-motion";
import SEO from "./SEO";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const skillCategories = [
  {
    title: "Programming",
    skills: [
      { name: "Python", level: 90 },
      { name: "JavaScript", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "C++", level: 80 },
      { name: "C", level: 80 },
      { name: "Java", level: 75 },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "React", level: 95 },
      { name: "HTML & CSS", level: 95 },
      { name: "Tailwind CSS", level: 90 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Express", level: 85 },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "MongoDB", level: 85 },
      { name: "SQL", level: 80 },
    ],
  },
  {
    title: "Cloud & DevOps",
    skills: [
      { name: "Docker", level: 75 },
      { name: "Kubernetes", level: 60 },
    ],
  },
  {
    title: "AI & ML",
    skills: [
      { name: "Machine Learning", level: 80 },
      { name: "Deep Learning", level: 70 },
      { name: "Computer Vision", level: 75 },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git & GitHub", level: 90 },
      { name: "Linux", level: 85 },
      { name: "VS Code", level: 95 },
      { name: "Figma", level: 80 },
      { name: "Canva", level: 80 },
    ],
  },
];

const SkillBar = ({ name, level }) => (
  <div className="mb-4">
    <div className="flex justify-between mb-1">
      <span className="text-white text-sm font-medium">{name}</span>
      <span className="text-secondary text-sm font-medium">{level}%</span>
    </div>
    <div className="w-full bg-tertiary rounded-full h-2.5">
      <motion.div
        className="bg-[#915EFF] h-2.5 rounded-full"
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        transition={{ duration: 1, ease: "easeOut" }}
      />
    </div>
  </div>
);

const Tech = () => {
  return (
    <>
      <SEO title="Skills" description="Technical skills including Python, React, AI/ML, Cloud, and full-stack development." url="/skills" />
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Technical Expertise</p>
        <h2 className={styles.sectionHeadText}>Skills.</h2>
      </motion.div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10">
        {skillCategories.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-tertiary p-6 rounded-2xl shadow-card"
          >
            <h3 className="text-white text-[24px] font-bold mb-6">{category.title}</h3>
            {category.skills.map((skill) => (
              <SkillBar key={skill.name} name={skill.name} level={skill.level} />
            ))}
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "skills");
