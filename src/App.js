import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react';
import WestworldMap from './components/WestworldMap';
import Headquarters from './components/Headquarters'


class App extends Component {
  state = {
    hosts: [],
    selectedHost: {}
  }

  componentDidMount() {
		fetch("http://localhost:4000/hosts")
			.then(res => res.json())
			.then(hosts => {
        this.setState({hosts})
      })
	}

  selectHost = (host) => {
    this.setState({
      selectedHost: host
    })
  }

  renderActiveHosts = () => {
    return this.state.hosts.filter( host => host.active )
  }

  renderDecomHosts = () => {
    return this.state.hosts.filter( host => !host.active )
  }

  render(){
    return (
      <Segment id='app'>
        <WestworldMap
          hosts={this.renderActiveHosts()}
          selectedHost={this.state.selectedHost}
          selectHost={this.selectHost}
        />
        <Headquarters
          hosts={this.renderDecomHosts()}
          selectedHost={this.state.selectedHost}
          selectHost={this.selectHost}
        />
      </Segment>
    )
  }
}

export default App;
