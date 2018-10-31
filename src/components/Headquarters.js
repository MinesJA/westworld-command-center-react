import React from 'react';
import { Grid, Button, Segment } from 'semantic-ui-react';
import Details from './Details';
import ColdStorage from './ColdStorage';
import LogPanel from './LogPanel';


const Headquarters = ({ areas, hosts, selectedHostId, selectHost, activateHost, setArea, activateAll }) => {

  const formatAreas = () => {
    return areas.map( ({ name, formatName }) => (
      {key: name, text: formatName, value: name}
    ))
  }

  const selectedHost = () => {
    return hosts.find( host => host.id === selectedHostId)
  }

  const renderDecomHosts = () => {
    return hosts.filter( host => !host.active )
  }

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
          activateHost={activateHost}
          selectedHost={selectedHost()}
          formatAreas={formatAreas()}
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
