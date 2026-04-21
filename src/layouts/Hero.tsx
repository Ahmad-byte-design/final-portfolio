import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";
import Image from "@/components/ui/Image";
import TextType from "@/lib/reactbits/TextType";

import  project  from "@/assets/images/project.jpeg"

import { social_media } from "@/data/SocialMeadia";

import { motion } from "motion/react"

function Hero() {

  

  return (
    <motion.div initial={{opacity:0}} whileInView={{opacity:1}} className="w-full flex flex-col items-center md:items-start md:flex-row  mt-5 gap-2 ">
      <motion.div initial={{x:-100 , opacity:0 }} whileInView={{x:0 ,opacity:1}} className="flex flex-col order-1 md:order-0  items-center  md:items-start p-2 justify-center gap-5 md:w-1/2 ">
        <span className="name text-xl">Hi, I'm Ahmad Al Hussien Al Hasan</span>

        <TextType
          text={[
            "i'm front-end developer",
            "i'm back-end developer",
            "i'm ui-ux designer",
          ]}
          typingSpeed={100}
          pauseDuration={1500}
          showCursor
          cursorCharacter="+_+"
          deletingSpeed={60}
          cursorBlinkDuration={0.5}
          className=" text-3xl md:text-4xl "
        />
        <span className="description text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos rem eum
          voluptatem voluptatum ducimus, recusandae ad ullam quo asperiores
          dolor maiores! Tempore aperiam unde qui quos vel libero soluta!
          Voluptas.
        </span>

        <div className="icons flex  items-center justify-center gap-5">
          {social_media.map((sm) => (
            <a href={sm.url}>
              <Icon icon={sm.icon} className="w-7! h-7! bg-transparent hover:bg-transparent" />
            </a>
          ))}
        </div>
        <div className="buttons flex flex-wrap items-center justify-center gap-5">
          <a href="/projects"  className="">
            <Button>view my work</Button>
          </a>
          <a href="#contact" className="">
            <Button>
              contact me
            </Button>
          </a>
          <a href="/uploads/100-changed-the-history_ara.pdf" className="" download>
            <Button>cv</Button>            
          </a>
        </div>
      </motion.div>

        <motion.div initial={{opacity:0,scale:0}} whileInView={{opacity:1,scale:1}} whileTap={{scale:1.05}} className="md:w-1/2 relative flex items-center justify-center">
          <Image src={project}/>
        </motion.div>
    </motion.div>
  );
}

export default Hero;
