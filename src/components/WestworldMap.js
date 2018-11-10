<<<<<<< HEAD
import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react';


class WestworldMap extends Component {
  
  render(){
    return (
      <Segment id="map" >
        { /* Your code here */ }
      </Segment>
=======
import React from 'react';
import Area from './Area.js';
import { Segment } from 'semantic-ui-react';


const WestworldMap = ({areas, hosts, selectedHostId, selectHost}) => {

  const renderHosts = (value, limit) => ( hosts.filter( host => host.area === value ) )

  const renderAreas = () => {
    return areas.map( ({ namesObject: {text, value}, formatName, limit }) =>
      <Area
        value={value}
        name={text}
        limit={limit}
        key={value}
        hosts={renderHosts(value, limit)}
        selectedHostId={selectedHostId}
        selectHost={selectHost}
      />
>>>>>>> solution
    )
  }

  return (
    <Segment id="map" >
      {renderAreas()}
    </Segment>
  )
}

export default WestworldMap
