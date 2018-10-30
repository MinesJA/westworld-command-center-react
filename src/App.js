import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react';
import WestworldMap from './components/WestworldMap';
import Headquarters from './components/Headquarters'


class App extends Component {
  state = {
    hosts: [],
    areas: [],
    selectedHostId: null
  }

  componentDidMount() {
		fetch("http://localhost:4000/hosts")
			.then(res => res.json())
			.then(hosts => {
        this.setState({hosts})
      })
      .then( () => {
        fetch("http://localhost:4000/areas")
    			.then(res => res.json())
    			.then(areas => {
            this.setState({areas})
          })
      })
	}

  selectHost = (selectedHostId) => {
    this.setState({selectedHostId})
  }

  renderActiveHosts = () => {
    return this.state.hosts.filter( host => host.active )
  }

  renderDecomHosts = () => {
    return this.state.hosts.filter( host => !host.active )
  }

  formatAreas = () => {
    return this.state.areas.map( area => {
      area["formatName"] = area.name.split("_").map( word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")

      return area
    })
  }

  activateHost = (id) => {
    this.setState( state => {
      state.hosts.forEach( host => {
        if(host.id === id){
          host.active = !host.active
        }
      })
      return {hosts: state.hosts}
    })
  }

  render(){
    return (
      <Segment id='app'>
        <WestworldMap
          hosts={this.renderActiveHosts()}
          selectedHostId={this.state.selectedHostId}
          selectHost={this.selectHost}
          areas={this.formatAreas()}
        />
        <Headquarters
          activateHost={this.activateHost}
          hosts={this.renderDecomHosts()}
          selectedHostId={this.state.selectedHostId}
          selectHost={this.selectHost}
          areas={this.formatAreas()}
        />
      </Segment>
    )
  }
}

export default App;
