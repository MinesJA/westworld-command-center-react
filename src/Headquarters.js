import React from 'react';
import { Segment, Grid } from 'semantic-ui-react';
import HostList from './HostList'
import HostInfo from './HostInfo'


const Headquarters = (props) => {

  // const listHosts = () => {
  //   props.hosts.map( host => {console.log(host)})
  // }


  return(
    <Segment>
      <Grid celled='internally'>
        <Grid.Column width={8}>
          hello
        </Grid.Column>
        <Grid.Column width={8}>
          <HostInfo />
        </Grid.Column>
      </Grid>
    </Segment>
  )
}




export default Headquarters;
