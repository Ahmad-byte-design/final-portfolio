import Masonry from "@/lib/reactbits/Masonry";

import {  items as itemsData} from "@/data/CertificateData"

import { motion } from "motion/react";

function CertificateMasonry() {

  const items: any = itemsData;

  return (
    <div className="w-full min-h-screen flex flex-col gap-2 p-5">
      <h2 className="text-3xl flex items-center justify-center ">Certificates</h2>

     <motion.div  className="">
       <Masonry
        items={items}
        ease="power3.out"
        duration={0.6}
        stagger={0.05}
        animateFrom="left"
        scaleOnHover
        hoverScale={0.95}
        blurToFocus
        colorShiftOnHover={true}
      />
     </motion.div>
    </div>
  );
}

export default CertificateMasonry;
