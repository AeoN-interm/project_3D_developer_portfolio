import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import logo from "../assets/logo.jpg";
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
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <div>
        <img 
          src={logo} 
          alt="Logo" 
          className="w-32 h-32 object-right-top border" 
        />
      </div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Enthusiastic and detail-oriented Full-Stack Developer with strong expertise in the MERN stack (MongoDB, Express, React, Node.js) and hands-on experience
        in cloud deployment using AWS, Render, and Vercel. Proficient in building scalable web applications with clean, maintainable code. Strong knowledge of
        Blockchain technology and OpenAI integration. Committed to continuous learning and staying up to date with the latest technologies. I'm a quick learner and collaborate closely with clients to
        create efficient, scalable, and user-friendly solutions that solve
        real-world problems. Let's work together to bring your ideas to life!
      </motion.p>

      {/* ✅ CV Link Button */}
      <div className="mt-6">
        <a
  href="https://drive.google.com/file/d/1oBjkINlRJiyPTyqCxW6GBSV1Y5rKZZHY/view?usp=sharing"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block bg-blue-800 text-white px-6 py-2 rounded-md hover:bg-blue-500 transition"
>
  View My CV
</a>
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
