import React from 'react';
import { Card } from 'semantic-ui-react'

const Host = ({selectHost, selected, host}) => {

  let { imageUrl } = host

  const style = () => {
    let style;

    if(!!selected){
      style = {
        width: "50px",
        height: "50px",
        overflow: "hidden",
        border: "2px solid red",
        borderRadius: "5px",
      }
    }else{
      style = {
        width: "50px",
        height: "50px",
        overflow: "hidden"
      }
    }
    return style
  }

  return(
    <Card onClick={()=>{selectHost(host)}}
      style={style()}
      raised
      image={imageUrl}
    />
  )
}

export default Host
