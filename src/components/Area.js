import React from 'react';
import HostList from './HostList';

const Area = () => {

  return(
    <div style={style} className='area'>
      <h3>{ /* An area has a name. And not a name with an underscore and lower case letters.... */}</h3>
      <HostList />
    </div>
  )
}

export default Area;
