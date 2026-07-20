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
        {/* Text block — strictly left half */}
        <div className='flex flex-col justify-start z-10 w-full md:w-[50%] pt-2 mt-10 sm:mt-20 pointer-events-auto'>
          <h1 className="font-bold text-white text-[35px] sm:text-[45px] lg:text-[55px] leading-tight mb-2">
            Hi, I'm
          </h1>
          <h2 className="font-black text-[#915EFF] text-[50px] sm:text-[60px] lg:text-[80px] leading-tight mb-8 relative inline-block self-start">
            Bharath V
            <div className="absolute bottom-0 left-0 w-[90%] h-[4px] bg-[#915EFF]"></div>
          </h2>
          <h3 className="font-semibold text-white text-[24px] sm:text-[28px] lg:text-[32px] mb-4">
            Full-Stack Developer
          </h3>
          <p className="text-secondary text-[16px] sm:text-[18px] max-w-md mb-10 leading-relaxed">
            I build modern web applications and AI-powered solutions.
          </p>
          <div className='flex flex-wrap gap-4 text-[15px] font-bold'>
            <Link
              to='/projects'
              className='bg-[#915EFF] hover:bg-white hover:text-[#915EFF] text-white px-7 py-3 rounded-xl transition-all shadow-md flex items-center justify-center'
            >
              View Projects
            </Link>
            <a
              href='https://github.com/bharathDotExe'
              target='_blank'
              rel='noopener noreferrer'
              className='bg-transparent hover:bg-white-100 text-white px-6 py-3 rounded-xl transition-all border border-white/20 flex items-center gap-2'
            >
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1.2em" width="1.2em" xmlns="http://www.w3.org/2000/svg"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg>
              GitHub
            </a>
            <a
              href='https://www.linkedin.com/in/bharath-v-442425352/'
              target='_blank'
              rel='noopener noreferrer'
              className='bg-transparent hover:bg-white-100 text-white px-6 py-3 rounded-xl transition-all border border-white/20 flex items-center gap-2'
            >
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1.2em" width="1.2em" xmlns="http://www.w3.org/2000/svg"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path></svg>
              LinkedIn
            </a>
            <a
              href='/resume.pdf'
              target='_blank'
              rel='noopener noreferrer'
              className='bg-transparent hover:bg-white-100 text-white px-6 py-3 rounded-xl transition-all border border-white/20 flex items-center gap-2'
            >
              Resume
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
