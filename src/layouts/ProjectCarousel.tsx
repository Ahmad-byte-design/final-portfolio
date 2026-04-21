

import Carousel from "@/components/ui/Carousel";
import ProjectCard from "@/components/ui/ProjectsCard";

import { newistProject } from "@/data/ProjectsData";


function ProjectCarousel() {
  

  return (
    <div className="relative flex items-center justify-center flex-col gap-5 p-5">
      <h2 className="text-3xl flex items-center justify-center ">Projects</h2>

  <Carousel
  items={newistProject}
  renderItem={(item) => (
    <ProjectCard
      image={item.image}
      watch={item.watch}
      githup={item.github}
      title={item.title}
      description={item.description}
      tools={item.tools}
    />
  )}
/>

    </div>
  );
}

export default ProjectCarousel;
