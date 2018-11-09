import React from 'react';
import { Grid } from 'semantic-ui-react';
import Details from './Details';
import ColdStorage from './ColdStorage';
import LogPanel from './LogPanel';


const Headquarters = ({ areas, hosts, selectedHostId, selectHost, activateHost, setArea, activateAll }) => {

  const selectedHost = () => hosts.find( host => host.id === selectedHostId )

  const renderDecomHosts = () => hosts.filter( host => !host.active )

  return(
    <Grid celled='internally'>
      <Grid.Column width={8}>
        <ColdStorage
          hosts={renderDecomHosts()}
          selectHost={selectHost}
          selectedHostId={selectedHostId}
        />
      </Grid.Column>
      <Grid.Column width={5}>
        <Details
          hosts={hosts}
          activateHost={activateHost}
          selectedHost={selectedHost()}
          areas={areas}
          setArea={setArea}
        />
      </Grid.Column>
      <Grid.Column width={3}>
        <LogPanel
          activateAll={activateAll}
        />
      </Grid.Column>
    </Grid>
  )
}


export default Headquarters;
