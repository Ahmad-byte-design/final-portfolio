import { useEffect, useState } from "react"
import Logo from "./Logo"
import Nav from "./Nav"
import { motion } from "motion/react";

function Header() {

  const [ scroll , setScroll ] = useState(window.scrollY);


  useEffect(()=>{

      const handleScroll = () => setScroll(window.scrollY);


    addEventListener("scroll" ,handleScroll)

    return ()=> removeEventListener("scroll" , handleScroll)
  },[]);

  return (
    <motion.div initial={{ y:-200  }} animate={{ y:0 }} className={`  ${ scroll > 300 ? "fixed top-0   bg-primary/50 " : "relative"} z-100 w-full backdrop-blur-md flex justify-between items-center`}>
      
      <Logo />
      <Nav />
    </motion.div>
  )
}

export default Header
