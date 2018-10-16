import React from 'react';
import { Segment, Grid } from 'semantic-ui-react';
import HostInfo from './HostInfo';
import ColdStorage from './ColdStorage';


const Headquarters = (props) => {

  // const listHosts = () => {
  //   props.hosts.map( host => {console.log(host)})
  // }

  let style = {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'baseline'
  }


  return(
    <Segment style={style}>
      <ColdStorage />
      <HostInfo />
    </Segment>
  )
}


export default Headquarters;
