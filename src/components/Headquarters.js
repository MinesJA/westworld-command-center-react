import React from 'react';
import { Grid, Header } from 'semantic-ui-react';
import HostInfo from './HostInfo';
import ColdStorage from './ColdStorage';


const Headquarters = ({selectHost, hosts}) => {

  const rowStyle = {margin: "30px"}

  return(
    <Grid celled='internally'>
      <Grid.Column width={10}>
        <ColdStorage hosts={hosts} selectHost={selectHost}/>
      </Grid.Column>

      <Grid.Column width={5}>
        <HostInfo />
      </Grid.Column>
    </Grid>
  )
}


export default Headquarters;
