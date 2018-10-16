import React from 'react';
import HostList from './HostList';
import { Segment, Container } from 'semantic-ui-react';

const Area = (props) => (
  <div id={props.id} className='area'>
    <h3 style={{color:'white'}}>{props.areaName}</h3>
    <HostList />
  </div>

)

export default Area;
