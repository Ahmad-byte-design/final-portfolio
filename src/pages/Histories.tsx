import Timeline from '@/layouts/Timeline';

import { history } from "@/data/HistoriesData"

function Histories() {



  return (
    <Timeline items={history}/>
  )
}

export default Histories
