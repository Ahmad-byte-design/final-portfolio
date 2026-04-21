import  { memo,type ReactNode } from "react";
import Icon from "./Icon"
import SpotlightCard from "../../lib/reactbits/SpotlightCard";

import { motion } from "motion/react"

type Props = { 
    icon?: ReactNode;
    title: string;
    description: string;
}

const basedStyle = `bg-muted-foreground border border-primary rounded-3xl flex flex-col items-center  gap-5 w-52  `

function ServicesCard({icon , title , description}:Props) {
  return (
    
    <motion.div initial={{scale:0 , opacity:0 }} whileInView={{scale:1 , opacity:1 }} whileHover={{scale:1.05}} whileTap={{scale:1.1}}  className={`${basedStyle}`}>
      <SpotlightCard className="custom-spotlight-card w-full h-full flex flex-col gap-5 items-center" spotlightColor="rgba(230, 199, 103, 0.2)">
      <Icon icon={icon}/>
      <h2 className="text-popover">{title}</h2>
      <h3 className="text-secondary">{description}</h3>
    </SpotlightCard>
    </motion.div>
  )
}

export default memo(ServicesCard);
