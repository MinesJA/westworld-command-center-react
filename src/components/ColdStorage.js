import React, { Component, Fragment } from 'react';
import { Segment } from 'semantic-ui-react'
import HostList from './HostList'


class ColdStorage extends Component {

  render(){
    console.log(this.props.hosts)
    return(
      <Segment style={{height:'100%'}}>
        <h3>ColdStorage</h3>
        <HostList hosts={this.props.hosts}/>
      </Segment>
    )
  }

}

export default ColdStorage
