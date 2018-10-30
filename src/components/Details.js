import React from 'react'
import HostInfo from './HostInfo'
import { Segment, Image } from 'semantic-ui-react'

const Details = (props) => {



  const renderHostInfo = () => {
    const imageUrl = "https://www.hbo.com/content/dam/hbodata/series/westworld/episodes/s-01/westworld-s1-1920x1080.jpg"

    if(!!props.selectedHost){
      return(<HostInfo selectedHost={props.selectedHost} formatAreas={props.formatAreas} />)
    }else{
      return(<Image size='medium' src={imageUrl}/>)
    }
  }

  return(
    <Segment id="details" className="HQComps">
      {renderHostInfo()}
    </Segment>
  )
}

export default Details
