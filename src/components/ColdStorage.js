import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react'
import HostList from './HostList'


const ColdStorage = ({hosts, selectedHostId, selectHost}) => {

  return(
    <Segment>
      <h3 className="labels">ColdStorage</h3>
      <HostList
        hosts={hosts}
        selectedHostId={selectedHostId}
        selectHost={selectHost}
      />
    </Segment>
  )
}

export default ColdStorage
