import React from 'react';
import HostList from './HostList';

const Area = ({ value, name, limit, style, hosts, selectHost, selectedHostId }) => {

  const renderHosts = () => {
    let filteredHosts = hosts.filter( host => host.area === value )

    return filteredHosts.slice(0,limit)
  }

  return(
    <div style={style} className='area'>
      <h3 className='labels'>{name}</h3>
      <HostList
        hosts={renderHosts()}
        selectHost={selectHost}
        selectedHostId={selectedHostId}
      />
    </div>
  )
}

export default Area;
