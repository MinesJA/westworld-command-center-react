import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import Details from './Details';
import ColdStorage from './ColdStorage';
import LogPanel from './LogPanel';


class Headquarters extends Component {
  state = {
    logEvents: [],
    activated: false
  }

  addLog = (event) => {
    this.setState({
      logEvents: [event, ...this.state.logEvents]
    })
  }

  handleActivate = () => {
    this.setState({
      activated: !this.state.activated
    }, ()=>{this.props.activateAll(this.state.activated)})
  }

  selectedHost = () => this.props.hosts.find( host => host.id === this.props.selectedHostId )

  renderDecomHosts = () => this.props.hosts.filter( host => !host.active )


  render(){
    let { areas, hosts, selectedHostId, selectHost, activateHost, setArea } = this.props
    return(
      <Grid celled='internally'>
        <Grid.Column width={8}>
          <ColdStorage
            hosts={this.renderDecomHosts()}
            selectHost={selectHost}
            selectedHostId={selectedHostId}
          />
        </Grid.Column>
        <Grid.Column width={5}>
          <Details
            hosts={hosts}
            activateHost={activateHost}
            selectedHost={this.selectedHost()}
            areas={areas}
            setArea={setArea}
            addLog={this.addLog}
          />
        </Grid.Column>
        <Grid.Column width={3}>
          <LogPanel
            handleActivate={this.handleActivate}
            events={this.state.logEvents}
            activated={this.state.activated}
            addLog={this.addLog}
          />
        </Grid.Column>
      </Grid>
    )
  }
}


export default Headquarters;
