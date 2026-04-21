import { motion } from "motion/react";


function Services() {
  const services = [
    { name: "ui-ux designer" },
    { name: "front-end developer" },
    { name: "back-end developer" },
  ];

  return (
    <div  className="w-full   flex flex-col gap-2">
      <h2 className="text-3xl flex items-center justify-center ">Services</h2>

      <ul className="flex flex-col self-center md:w-2/3 gap-10 my-5  ">
        {services.map((service, index) => (
       <>
       
        <motion.li initial={{y:200 , opacity:0}}  animate={{y:0 , opacity : 1}} key={index} className="flex   items-center gap-5 ">

          <div className="relative w-24 md:w-32 h-24 md:h-32 flex items-center justify-center">
          
            <div className="absolute w-2/3 h-2/3 inset-0 top-1/2 left-1/2 -translate-1/2 rounded-full bg-primary border border-secondary blur-sm" />

            <span className="relative z-10 text-3xl md:text-5xl text-popover font-bold">
              {index + 1}
            </span>
          </div>

          <span className="text-3xl md:text-4xl">{service.name}</span>

        </motion.li> 
        
          <hr className="bg-primary w-full my-2 hidden not-last:block" />
       </>
      ))}
      </ul>
    </div>
  );
}

export default Services;
