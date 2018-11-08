import React from 'react';
import { Card } from 'semantic-ui-react'

const Host = ({ imageUrl, id, selectHost, selected }) => {

  const clicked = selected ? "host selected" : "host"

  return(
    <Card
      className={clicked}
      onClick={()=>{selectHost(id)}}
      image={imageUrl}
      raised
    />
  )
}

export default Host
