import Image from "@/components/ui/Image";
import project from "@/assets/images/project.jpeg";

import { motion } from "motion/react";

function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-full  flex flex-col"
    >
      <h2 className="text-3xl flex items-center justify-center ">About Me</h2>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex flex-col md:flex-row items-center justify-between gap-5  "
      >
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          whileTap={{ scale: 1.05 }}
          className="md:w-1/2 relative flex items-center justify-center"
        >
          <Image src={project} />
        </motion.div>

     
          <motion.p initial={{x:100 , opacity:0}} whileInView={{x: 0 ,opacity:1}} className="md:w-1/2 relative flex items-center justify-center text-center">
            I’m a designer passionate about creating user-friendly and visually
            engaging interfaces for brands and businesses. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Exercitationem ipsum
            dictadffffffffffffffffffsssssss repudiandae, ad officiis voluptatum
            accusantium nobis ullam unde autem ratione at beatae, asperiores
            sed, explicabo veniam sint rem harum.
          </motion.p>

      </motion.div>
    </motion.div>
  );
}

export default About;
