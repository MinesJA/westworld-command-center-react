import React from 'react';
import Area from './Area.js';
import { Segment } from 'semantic-ui-react';


const WestworldMap = ({areas, hosts, selectedHostId, selectHost}) => {

  const renderHosts = (value) => {
    // let filteredHosts = hosts.filter( host => host.area === value )
    return hosts.filter( host => host.area === value )

    // return filteredHosts.slice(0,limit)
  }

  const renderAreas = () => {
    return areas.map( ({ namesObject: {text, value}, formatName, limit }) =>
      <Area
        value={value}
        name={text}
        limit={limit}
        key={value}
        hosts={renderHosts(value)}
        selectedHostId={selectedHostId}
        selectHost={selectHost}
      />
    )
  }

  return (
    <Segment id="map" >
      {renderAreas()}
    </Segment>
  )
}

export default WestworldMap;
