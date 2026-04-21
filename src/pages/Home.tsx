import About from '@/layouts/About'
import CertificateMasonry from '@/layouts/CertificateMasonry'
import Contact from '@/layouts/Contact'
import Hero from '@/layouts/Hero'
import ProjectCarousel from '@/layouts/ProjectCarousel'
import Services from '@/layouts/Services'
import Skills from '@/layouts/Skills'


function Home() {
  return (
    <div className='flex flex-col gap-10 ' >
      <Hero />
      <About />
      <Skills />
      <Services />
      <ProjectCarousel />
      <Contact />
      <CertificateMasonry />  
    </div>
  )
}

export default Home
