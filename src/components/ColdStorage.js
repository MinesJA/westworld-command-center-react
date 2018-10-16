import React from 'react';
import { Segment } from 'semantic-ui-react'
import HostList from './HostList'


const ColdStorage = () => {

  return(
    <Segment style={{height:'100%'}}>
      <h3>ColdStorage</h3>
      <HostList />
    </Segment>
  )
}

export default ColdStorage
