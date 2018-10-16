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
    height: '300px',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'baseline'
  }

  return(
    <Grid celled='internally'>
      <Grid.Column width={10}>
        <ColdStorage />
      </Grid.Column>

      <Grid.Column width={5}>
        <HostInfo />
      </Grid.Column>
    </Grid>
  )
}


export default Headquarters;
