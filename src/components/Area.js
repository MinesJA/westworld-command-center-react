import React from 'react';
import HostList from './HostList';
import { Segment, Container } from 'semantic-ui-react';

const Area = ({areaName, style, hosts}) => {

  const renderHosts = () => (
    hosts.filter( host => host.area == areaName )
  )

  return(
    <div style={style} className='area'>
      <h3>{areaName}</h3>
      <HostList hosts={renderHosts()}/>
    </div>
  )
}

export default Area;
