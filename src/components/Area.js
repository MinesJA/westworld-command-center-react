import React from 'react';
import HostList from './HostList';

const Area = ({ name, formatName, limit, style, hosts, selectHost, selectedHostId }) => {

  const renderHosts = () => {
    let filteredHosts = hosts.filter( host => host.area === name )

    return filteredHosts.slice(0,limit)
  }

  return(
    <div style={style} className='area'>
      <h3 className='labels'>{formatName}</h3>
      <HostList
        hosts={renderHosts()}
        selectHost={selectHost}
        selectedHostId={selectedHostId}
      />
    </div>
  )
}

export default Area;
