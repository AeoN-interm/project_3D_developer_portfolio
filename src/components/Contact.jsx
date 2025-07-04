import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

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

    return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
       <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact Me.</h3>

        <div className='mt-12 flex flex-col gap-6'>
          <div>
            <span className='text-white font-medium'>Email Id</span>
            <p className='text-secondary'>biswassaikatt@gmail.com</p>
          </div>

          <div>
            <span className='text-white font-medium'>Mobile & WhatsApp Number </span>
            <p className='text-secondary'>+91 9851208616</p>
          </div>

          <div>
            <span className='text-white font-medium'>LinkedIn: </span>
            <a
              href='https://www.linkedin.com/in/saikat-biswas-0a5433253/'
              target='_blank'
              rel='noopener noreferrer'
              className='text-blue-400 hover:underline'
            >
              https://www.linkedin.com/in/saikat-biswas-0a5433253/
            </a>
          </div>

          <div>
            <span className='text-white font-medium'>GitHub: </span>
            <a
              href='https://github.com/AeoN-interm'
              target='_blank'
              rel='noopener noreferrer'
              className='text-blue-400 hover:underline'
            >
              https://github.com/AeoN-interm
            </a>
          </div>
        </div>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
