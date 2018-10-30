import React from 'react';
import { Grid } from 'semantic-ui-react';
import Details from './Details';
import ColdStorage from './ColdStorage';


const Headquarters = ({ areas, hosts, selectedHostId, selectHost, activateHost }) => {

  const formatAreas = () => {
    let newAreas = areas.map( ({ name, formatName }) => {
      return {key: name, text: formatName, value: name}
    })
    return newAreas
  }

  const selectedHost = () => {
    return hosts.find( host => host.id === selectedHostId)
  }

  return(
    <Grid celled='internally' centered>
      <Grid.Column width={10}>
        <ColdStorage
          hosts={hosts}
          selectHost={selectHost}
          selectedHostId={selectedHostId}
        />
      </Grid.Column>
      <Grid.Column width={5}>
        <Details
          activateHost={activateHost}
          selectedHost={selectedHost()}
          formatAreas={formatAreas()}
        />
      </Grid.Column>
    </Grid>
  )
}


export default Headquarters;
