import { Button as ShadButton } from "@base-ui/react"
import type {  ReactNode } from "react";

import { motion } from "motion/react"

type Props = {
  children?: ReactNode;
  icon?: ReactNode;
  type?: "button" | "submit" | "reset";
  className?: string;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

const style = {
  basic:"btn w-32 h-10 bg-primary hover:bg-muted transition duration-300 cursor-pointer overflow-hiddin text-xl" ,
}


function Button({ children, className, disabled = false, onClick , type = "button" }: Props) {


  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) =>{
    const target = e.currentTarget;

    const rect = target.getBoundingClientRect();
    
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    target.style.setProperty(`--left`,`${x}px`);
    target.style.setProperty(`--top`,`${y}px`);
  }

  
  return (
    <motion.div initial={{scale:0,opacity:0}} animate={{scale:1,opacity:1}} whileHover={{scale:1.05}} whileTap={{scale:1.1}}>
      <ShadButton type={type} className={`${style.basic} ${className ?? ""} `} disabled={disabled} onClick={onClick} onMouseMove={handleMouseMove}>
      {children} 
    </ShadButton>
    </motion.div>
  )
}

export default Button;
