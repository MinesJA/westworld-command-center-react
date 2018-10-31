import React from 'react';
import Area from './Area.js';
import { Segment } from 'semantic-ui-react';


const WestworldMap = ({areas, hosts, selectedHostId, selectHost}) => {

  const renderAreas = () => {
    return areas.map( ({ namesObject: {text, value}, formatName, limit, style }) =>
      <Area
        className="area"
        value={value}
        name={text}
        limit={limit}
        key={value}
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
