import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react'
import HostList from './HostList'


class ColdStorage extends Component {

  render(){
    return(
      <Segment>
        <h3 className="labels">ColdStorage</h3>
        <HostList
          hosts={this.props.hosts}
          selectedHost={this.props.selectedHost}
          selectHost={this.props.selectHost}
        />
      </Segment>
    )
  }

}

export default ColdStorage
