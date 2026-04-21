import ProjectCard from "@/components/ui/ProjectsCard"
// data
import { projects } from "@/data/ProjectsData"

function Projects() {

  return (
    <div className='p-5'>
      <h1 className='text-5xl text-center p-5'>Projects</h1>

      <div className='flex items-center justify-center gap-5 flex-wrap'>
        {projects.map((project)=>(
          <ProjectCard image={project.image} title={project.title} description={project.description} watch={project.watch} githup={project.githup} tools={project.tools} />
        ))}
      </div>
    </div>
  )
}

export default Projects
