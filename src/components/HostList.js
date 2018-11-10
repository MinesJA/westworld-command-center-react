import React from 'react'
import { Card } from 'semantic-ui-react'
import Host from './Host'

const HostList = ({ hosts, selectHost, selectedHostId, limit }) => {

  const renderHosts = () => (

    hosts.map( ({ id, imageUrl }) => {
      if(selectedHostId === id){
        return <Host
                 imageUrl={imageUrl}
                 id={id} key={id}
                 selectHost={selectHost}
                 selected
               />
      }else{
        return <Host
                 imageUrl={imageUrl}
                 id={id} key={id}
                 selectHost={selectHost}
               />
      }
    })

  )

  return(
    <Card.Group itemsPerRow={6}>
      {renderHosts()}
    </Card.Group>
  )
}

export default HostList
