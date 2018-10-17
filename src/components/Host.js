import React, { Component }  from 'react';
import { Card } from 'semantic-ui-react'

const Host = ({selectHost, selected, host}) => {

  let { imageUrl } = host
  let style = !!selected ? {width: "50px", border: "2px solid red", borderRadius: "5px"} : {width: "50px"}

  return(
    <Card onClick={()=>{selectHost(host)}}
      style={style}
      raised
      image={imageUrl}
    />
  )
}

export default Host
