import React from 'react'
import { Card } from 'semantic-ui-react'
import Host from './Host'

const HostList = ({hosts, selectedHost, selectHost}) => {

  return(
    <Card.Group itemsPerRow={6}>
      {hosts.map( host => {
        if(selectedHost === host){
          return <Host host={host} key={host.id} selected selectHost={selectHost} />
        }else{
          return <Host host={host} key={host.id} selectHost={selectHost} />
        }
      })}
    </Card.Group>
  )
}

export default HostList
