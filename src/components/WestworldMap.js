import React from 'react';
import Area from './Area.js';
import { Segment } from 'semantic-ui-react';


const WestworldMap = ({areas, hosts, selectedHostId, selectHost}) => {

  const renderAreas = () => {
    return areas.map( ({ name, formatName, limit, style }) =>
      <Area
        className="area"
        name={name}
        formatName={formatName}
        limit={limit}
        key={name}
        style={style}
        hosts={hosts}
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
