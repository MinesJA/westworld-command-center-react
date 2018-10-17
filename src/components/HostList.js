import React, { Component }  from 'react'
import { Card } from 'semantic-ui-react'
import Host from './Host'

const HostList = ({hosts, selectedHost, selectHost}) => {

  return(
    <Card.Group itemsPerRow={6}>
      {hosts.map( host => {
        console.log(selectedHost, host)
        if(selectedHost == host){
          return <Host host={host} selected selectHost={selectHost} />
        }else{
          return <Host host={host} selectHost={selectHost} />
        }
      })}
    </Card.Group>
  )
}

export default HostList
