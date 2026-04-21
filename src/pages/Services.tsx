import ServicesCard from '@/components/ui/ServicesCard'
// data
import { services } from '@/data/ServicesData'
function Services() {
  
  return (
    <div className='p-5'>
      <h1 className='text-5xl text-center p-5'>Services</h1>
      
      <div className='flex items-center justify-center gap-5  flex-wrap'>
        {services.map((service)=>(
          <ServicesCard icon={service.icon} title={service.title} description={service.describtion} />
        ))}
      </div>
    
    </div>
  )
}

export default Services
