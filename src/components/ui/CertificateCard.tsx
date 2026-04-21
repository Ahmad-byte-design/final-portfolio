// import Button from "./Button";
import { memo } from "react";
import Image from "./Image";

import { motion } from "motion/react"

type Props = {
  image?: any;
  title: string;
  description: string;
  time?: string;
};

const basedStyle = `bg-muted-foreground border border-primary rounded-xl flex  items-center justify-between p-2 gap-5 h-32 md:w-2/3 m-auto  `;

function CertificateCard({ image, title, description, time }: Props) {
  return (
    <motion.div initial={{scale:0 , opacity:0 }} whileInView={{scale:1,opacity:1}} whileHover={{scale:1.05 }} whileTap={{scale:1.1}} className={`${basedStyle}`}>
      <div className="flex items-center gap-2">
        <Image src={image} className="w-52" />
       <span >
         <h2 className="text-popover">{title}</h2>
        <h3 className="text-secondary">{description}</h3>
       </span>
      </div>

      <div className="flex flex-col items-end justify-between h-full">
        <span className="text-white">{time}</span>
        {/* <Button>read more</Button> */}
      </div>
    </motion.div>
  );
}

export default memo(CertificateCard);
