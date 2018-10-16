import React, { Component, Fragment } from 'react';
import { Segment } from 'semantic-ui-react'
import HostList from './HostList'


class ColdStorage extends Component {

  render(){
    return(
      <Segment style={{height:'100%'}}>
        <h3>ColdStorage</h3>
        <HostList />
      </Segment>
    )
  }

}

export default ColdStorage
