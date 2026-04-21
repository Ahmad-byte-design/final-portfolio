import { motion } from "motion/react"
import { useState } from "react";

type Item = {
  year: string;
  title: string;
  description: string;
};

type Props = {
  items: Item[];
};

function Timeline({ items }: Props) {

  return (
    <div className="relative w-full max-w-3xl mx-auto py-10">
      
      <div className="absolute -right-8 md:left-1/2 top-0 h-full w-0.5 bg-primary -translate-x-1/2" />

      <div className="flex flex-col gap-10">
        {items.map((item, index) => {
          const isLeft = (index % 2 === 0)  ;

          return (
            <motion.div
              key={index}
              className={`md:flex w-full items-center  ${
                isLeft ? "justify-start" : "justify-end"
              }`}
              initial={{scale:0 , opacity:0 }} whileInView={{scale:1,opacity:1}} whileHover={{scale:1.05 }} whileTap={{scale:1.1}}
            >

              <div
                className={`
                  md:w-1/2 p-4 rounded-xl shadow-md bg-muted-foreground border border-primary -mx-5 text-right
                  ${isLeft  ? "text-right border-r-0" : "text-left border-l-0"}
                `}
              >
                <p className="text-sm text-gray-500">{item.year}</p>
                <h3 className="text-lg font-bold">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>

              <div className="absolute -right-10 md:left-1/2 w-3 h-3 bg-yellow-400 rounded-full -translate-x-1/2" />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export default Timeline;
