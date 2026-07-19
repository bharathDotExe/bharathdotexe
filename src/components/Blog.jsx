import React from "react";
import { motion } from "framer-motion";
import SEO from "./SEO";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { blogPosts } from "../constants";
import { textVariant } from "../utils/motion";

const BlogCard = ({ title, summary, date, category, link, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="bg-tertiary p-6 rounded-2xl shadow-card flex flex-col h-full hover:shadow-[0_0_20px_rgba(145,94,255,0.2)] transition-shadow"
  >
    <div className="flex justify-between items-center mb-4">
      <span className="text-secondary text-[14px]">{date}</span>
      <span className="px-3 py-1 bg-black-100 text-[#915EFF] rounded-full text-[12px] font-bold tracking-wider uppercase">
        {category}
      </span>
    </div>
    <h3 className="text-white text-[22px] font-bold mb-3 leading-tight">{title}</h3>
    <p className="text-secondary text-[15px] mb-6 flex-grow">{summary}</p>
    <a href={link} className="text-[#915EFF] font-bold text-[16px] hover:text-white transition-colors flex items-center gap-2 mt-auto">
      Read Article →
    </a>
  </motion.div>
);

const Blog = () => {
  return (
    <>
      <SEO title="Technical Blog" description="Read articles about AI, Software Engineering, SEO, and web development by Bharath V." url="/blog" />
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Thoughts & Tutorials</p>
        <h2 className={styles.sectionHeadText}>Technical Blog.</h2>
      </motion.div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post, index) => (
          <BlogCard key={post.title} index={index} {...post} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Blog, "blog");
