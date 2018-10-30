import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react'
import HostList from './HostList'


const ColdStorage = ({hosts, selectedHostId, selectHost}) => {

  return(
    <Segment.Group className="HQComps">
      <Segment compact>
        <h3 className="labels">ColdStorage</h3>
      </Segment>
      <Segment compact>
        <HostList
          hosts={hosts}
          selectedHostId={selectedHostId}
          selectHost={selectHost}
        />
      </Segment>
    </Segment.Group>
  )
}

export default ColdStorage
