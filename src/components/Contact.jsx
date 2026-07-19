import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import SEO from "./SEO";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Bharath V",
          from_email: form.email,
          to_email: "bharath33053305@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "mainEntity": {
      "@type": "Person",
      "name": "Bharath V",
      "email": "bharath33053305@gmail.com",
      "telephone": "+918618463182"
    }
  };

  return (
    <>
    <SEO title="Contact" description="Get in touch with Bharath V. Contact for freelance, full-time opportunities, or networking." url="/contact" schema={contactSchema} />
    <div
      className={`xl:mt-0 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        
        <p className="text-white-100 mt-3 text-[18px]">
          <b>Email:</b> <a href="mailto:bharath33053305@gmail.com">bharath33053305@gmail.com</a> <br />
          <b>Phone:</b> <a href="tel:+918618463182">+91 8618463182</a>
        </p>

        <div className="flex gap-4 mt-6">
          <a href="https://github.com/bharathDotExe" target="_blank" rel="noopener noreferrer me" className="text-secondary hover:text-white text-2xl transition-colors">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/bharath-v-442425352/" target="_blank" rel="noopener noreferrer me" className="text-secondary hover:text-[#915EFF] text-2xl transition-colors">
            <FaLinkedin />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer me" className="text-secondary hover:text-[#915EFF] text-2xl transition-colors">
            <FaTwitter />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer me" className="text-secondary hover:text-pink-500 text-2xl transition-colors">
            <FaInstagram />
          </a>
        </div>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              required
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              required
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              required
            />
          </label>

          <button
            type='submit'
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
    </>
  );
};

export default SectionWrapper(Contact, "contact");
