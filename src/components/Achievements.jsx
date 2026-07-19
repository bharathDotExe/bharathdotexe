import React from "react";
import { motion } from "framer-motion";
import SEO from "./SEO";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { achievements } from "../constants";
import { textVariant } from "../utils/motion";

const AchievementCard = ({ title, organization, date, description, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="bg-tertiary p-6 rounded-2xl shadow-card"
  >
    <div className="flex justify-between items-start mb-4">
      <h3 className="text-white text-[20px] font-bold">{title}</h3>
      <span className="text-[#915EFF] text-sm font-medium px-3 py-1 bg-[#915EFF]/10 rounded-full">{date}</span>
    </div>
    <p className="text-secondary text-sm font-semibold mb-3">{organization}</p>
    <p className="text-secondary text-[15px] leading-relaxed">{description}</p>
  </motion.div>
);

const Achievements = () => {
  return (
    <>
      <SEO title="Achievements" description="Hackathons, awards, and recognitions earned by Bharath V." url="/achievements" />
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Milestones</p>
        <h2 className={styles.sectionHeadText}>Achievements.</h2>
      </motion.div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        {achievements.map((item, index) => (
          <AchievementCard key={item.title} index={index} {...item} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Achievements, "achievements");
