import LogoLoop from '@/lib/reactbits/LogoLoop';

import { imageLogos } from '@/data/SkillsData';


export default function Skills() {
  return (
      <div className="w-full  flex flex-col gap-2">
      <h2 className="text-3xl flex items-center justify-center ">Skills</h2>

      <div style={{ height: '200px', position: 'relative', overflow: 'hidden'}} className='flex flex-col items-center gap-5 justify-center'>
      {/* Basic horizontal loop */}
      <LogoLoop
        logos={imageLogos}
        speed={100}
        direction="left"
        logoHeight={60}
        gap={60}
        hoverSpeed={0}
        scaleOnHover
        fadeOut
        fadeOutColor="transparent"
        ariaLabel="Technology partners"
      />
     <LogoLoop
        logos={imageLogos}
        speed={100}
        direction="right"
        logoHeight={60}
        gap={60}
        hoverSpeed={0}
        scaleOnHover
        fadeOut
        fadeOutColor="transparent"
        ariaLabel="Technology partners"
      />
    </div>
    </div>
  );
}