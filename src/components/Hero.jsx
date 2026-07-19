import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SEO from "./SEO";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto overflow-hidden`}>
      <SEO title="Home" description="Portfolio of Bharath V, an expert Software Engineer, AI Engineer, and Full Stack Developer based in Bangalore, India." url="/" />

      {/* Content row: text left, 3D right — NO absolute overlap */}
      <div
        className={`absolute inset-0 top-[100px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start`}
      >
        {/* Purple accent line */}
        <div className='flex flex-col justify-center items-center mt-5 mr-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        {/* Text block — strictly left half */}
        <div className='flex flex-col justify-start z-10 w-full md:w-[50%] pt-2 pointer-events-auto'>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Bharath V</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100 max-w-md`}>
            Welcome to the official portfolio of BharathDotExe.
            <br />
            Full-Stack Developer // AI Agent Builder
            <br />
            BCA student at Garden City University, building AI-powered systems and full-stack products.
          </p>
          <div className='flex flex-wrap gap-4 mt-8 text-[15px] font-bold'>
            <a
              href='https://github.com/bharathDotExe'
              target='_blank'
              rel='noopener noreferrer'
              className='bg-[#915EFF] hover:bg-white hover:text-[#915EFF] text-white px-7 py-3 rounded-xl transition-all shadow-md'
            >
              GitHub
            </a>
            <a
              href='#'
              target='_blank'
              rel='noopener noreferrer'
              className='bg-tertiary hover:bg-[#915EFF] text-white px-7 py-3 rounded-xl transition-all shadow-md border border-[#915EFF]/30'
            >
              Resume
            </a>
            <a
              href='https://www.linkedin.com/in/bharath-v-442425352/'
              target='_blank'
              rel='noopener noreferrer'
              className='bg-tertiary hover:bg-[#915EFF] text-white px-7 py-3 rounded-xl transition-all shadow-md border border-[#915EFF]/30'
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* 3D Canvas — right half, hidden on mobile */}
        <div className='hidden md:flex flex-1 h-[75vh] items-center justify-center'>
          <ComputersCanvas />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <Link to='/about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
