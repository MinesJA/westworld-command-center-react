import React from 'react';
import HostList from './HostList';

const Area = ({areaName, style, hosts, selectHost, selected}) => {

  const renderHosts = () => (
    hosts.filter( host => host.area === areaName )
  )

  

  return(
    <div style={style} className='area'>
      <h3 className='labels'>{areaName}</h3>
      <HostList hosts={renderHosts()}/>
    </div>
  )
}

export default Area;
