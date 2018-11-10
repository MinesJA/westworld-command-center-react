import React from 'react'
import HostInfo from './HostInfo'
import { Segment, Image } from 'semantic-ui-react'
import * as Images from '../services/Images'


const Details = ({selectedHost, areas, activateHost, setArea, hosts, addLog}) => {

  const renderHostInfo = () => {
    if(!!selectedHost){
      return <HostInfo
               hosts={hosts}
               selectedHost={selectedHost}
               areas={areas}
               activateHost={activateHost}
               setArea={setArea}
               addLog={addLog}
             />
    }else{
      return <Image
               size='medium'
               src={Images.westworldLogo}
             />
    }
  }

  return(
    <Segment id="details" className="HQComps">
      {renderHostInfo()}
    </Segment>
  )
}

export default Details
