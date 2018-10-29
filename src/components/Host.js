import React from 'react';
import { Card } from 'semantic-ui-react'

const Host = ({ imageUrl, id, selectHost, selected }) => {

  const renderStyle = () => {
    if(selected){
      return {
        width: "50px",
        height: "50px",
        overflow: "hidden",
        border: "2px solid red",
        borderRadius: "5px",
      }
    } else {
      return {
        width: "50px",
        height: "50px",
        overflow: "hidden"
      }
    }
  }

  return(
    <Card
      onClick={()=>{selectHost(id)}}
      style={renderStyle()}
      image={imageUrl}
      raised
    />
  )
}

export default Host
