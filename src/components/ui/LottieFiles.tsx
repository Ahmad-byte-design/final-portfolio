import { useEffect, useRef, useState } from "react";

import LottieDefault from "lottie-react";
// @ts-ignore
const Lottie = LottieDefault?.default;

type Props = {
  animationData?: any;
  className?: string;
}


function LottieFiles({ animationData, className } : Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible , setIsVisible] = useState(false);

  useEffect(()=>{
    const observe = new IntersectionObserver(
      ([entry])=>setIsVisible(entry.isIntersecting),
      {threshold: 0.1}
    );
    if(ref.current) observe.observe(ref.current);
    return () => observe.disconnect();
  },[])

  return (
    <div ref={ref}>
      <Lottie
      animationData={animationData}
      loop={isVisible}
      autoplay={isVisible}
      className={className}
    />
    </div>
  );
}

export default LottieFiles;
