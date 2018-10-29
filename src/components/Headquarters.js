import React from 'react';
import { Grid, Header } from 'semantic-ui-react';
import HostInfo from './HostInfo';
import ColdStorage from './ColdStorage';


const Headquarters = ({areas, hosts, selectedHostId, selectHost}) => {

  return(
    <Grid celled='internally'>
      <Grid.Column width={10}>
        <ColdStorage
          hosts={hosts}
          selectHost={selectHost}
          selectedHostId={selectedHostId}
        />
      </Grid.Column>

      <Grid.Column width={5}>
        <HostInfo
          areas={areas}
          hosts={hosts}
          selectedHostId={selectedHostId}
        />
      </Grid.Column>
    </Grid>
  )
}


export default Headquarters;
