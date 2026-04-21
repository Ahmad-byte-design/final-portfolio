import { motion } from "motion/react"
import type { ReactNode } from "react";

type Props = {
  label?: string;
  icon?: ReactNode;
  className?: string;
};

const style = {
  basic: "bg-primary group text-background w-10 h-10 relative rounded-full cursor-pointer flex items-center justify-center hover:bg-muted transition duration-300",
};

function Icon({ label, icon , className }: Props) {
  return (
    <motion.div initial={{scale:0}} animate={{scale:1}}  whileTap={{scale:0.60 , animationDuration:75}} className={`${style.basic} ${className}`}>
      <span>{icon}</span>
      <span className="opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 z-10 absolute -top-1/2 text-black transition duration-300">{label}</span>
    </motion.div>
  );
}

export default Icon;
