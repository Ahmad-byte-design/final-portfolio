import CertificateCard from "@/components/ui/CertificateCard"
// data
import { certificates } from "@/data/CertificateData"

function Certificates() {
 
  return (
    <div className='md:p-5'>
            <h1 className='text-5xl text-center p-5'>Certificate</h1>
            <div className='flex items-center justify-center gap-5 flex-wrap'>
            {certificates.map((certificate)=>(
              <CertificateCard image={certificate.img} title={certificate.title} description={certificate.description} time={certificate.time} />
            ))}
            </div>
    </div>
  )
}

export default Certificates
