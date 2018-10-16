import React from 'react';
import { Segment, Grid } from 'semantic-ui-react';
import HostInfo from './HostInfo';
import ColdStorage from './ColdStorage';


const Headquarters = (props) => {


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
