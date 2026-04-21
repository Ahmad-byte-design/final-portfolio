import  { memo, type ReactNode } from "react";
import Icon from "./Icon";
import Image from "./Image";
import SpotlightCard from "@/lib/reactbits/SpotlightCard";

import { motion } from "motion/react"
 
type Props = {
  icon?: ReactNode;
  title: string;
  description: string;
  githup?: string;
  watch?: string;
  image?: string;
  tools: any;
};

const basedStyle = `bg-muted-foreground border border-primary rounded-3xl flex flex-col items-center   w-64  `;

function ProjectCard({
  image,
  watch,
  githup,
  title,
  description,
  tools
}: Props) {
  return (
    <motion.div initial={{scale:0 , opacity:0 }} whileInView={{scale:1,opacity:1}} whileHover={{scale:1.05 }} whileTap={{scale:1.1}} className={`${basedStyle}`}>
      <SpotlightCard className="custom-spotlight-card w-full h-full flex flex-col gap-5 items-start" spotlightColor="rgba(230, 199, 103, 0.2)">

      <Image src={image} urls={{watch, githup}} />
      
      <h2 className="text-popover">{title}</h2>
      <h3 className="text-secondary">{description}</h3>
      <div className="flex items-center flex-wrap gap-2 text-sm text-nowrap">
        {tools.map((tool: any) => (
          <motion.div  className="flex items-center justify-center gap-1 px-1 bg-primary text-foreground ">
            
            {tool.icon && (
              <Icon
                icon={tool.icon}
                className={`w-5! h-5! `}
              />
            )}

            <span className="">{tool.name}</span>

          </motion.div>
        ))}
      </div>
      </SpotlightCard>
    </motion.div>
  );
}

export default memo(ProjectCard);
