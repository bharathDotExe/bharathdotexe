import React from "react";
import { motion } from "framer-motion";
import SEO from "../SEO";
import { styles } from "../../styles";
import { textVariant } from "../../utils/motion";

const MachineLearning = () => {
  return (
    <div className="pt-[100px] pb-20 max-w-7xl mx-auto px-6 sm:px-16">
      <SEO 
        title="Machine Learning Developer | BharathDotExe" 
        description="Machine Learning expertise of BharathDotExe. Explore ML models, data science pipelines, and predictive algorithms." 
        url="/machine-learning" 
      />
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Data Science & Algorithms</p>
        <h1 className={styles.sectionHeadText}>Machine Learning.</h1>
      </motion.div>

      <div className="mt-12 bg-tertiary p-8 rounded-2xl shadow-card">
        <h3 className="text-white text-[24px] font-bold mb-4">Data-Driven Intelligence</h3>
        <p className="text-secondary text-[18px] leading-relaxed mb-6">
          <strong>BharathDotExe</strong> leverages Machine Learning to extract insights and build predictive models from raw data. 
          By combining strong statistical foundations with modern Python frameworks like TensorFlow, PyTorch, and Scikit-Learn, complex datasets are transformed into actionable intelligence.
        </p>

        <ul className="list-disc list-inside text-secondary text-[18px] space-y-3">
          <li><strong>Computer Vision:</strong> Image classification, object detection, and facial recognition models.</li>
          <li><strong>Natural Language Processing (NLP):</strong> Sentiment analysis, text generation, and named entity recognition.</li>
          <li><strong>Predictive Analytics:</strong> Time-series forecasting and regression models for business intelligence.</li>
          <li><strong>MLOps:</strong> Deploying and scaling machine learning models in production environments.</li>
        </ul>
      </div>
    </div>
  );
};

export default MachineLearning;
