import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react';
import WestworldMap from './components/WestworldMap';
import Headquarters from './components/Headquarters'
import { Adapter } from './Adapter'

class App extends Component {
  state = {
    hosts: [],
    areas: [],
    selectedHostId: null
  }

  componentDidMount() {

    Adapter.fetchHosts()
			.then(hosts => {
        this.setState({hosts})
      })
      .then( () => {
        Adapter.fetchAreas()
    			.then(areas => {
            this.setState({areas})
          })
      })
	}

  activateAll = (activated) => {
    this.setState( state =>
      state.hosts.map( host => {
        host.active = activated
        return host
      })
    )
  }

  selectHost = (selectedHostId) => {
    this.setState({selectedHostId})
  }

  renderActiveHosts = () => {
    return this.state.hosts.filter( host => host.active )
  }



  formatAreas = () => {
    return this.state.areas.map( area => {
      area["formatName"] = area.name.split("_").map( word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")

      return area
    })
  }

  setArea = (id, area) => {
    this.setState( state => {
      state.hosts.forEach( host => {
        if(host.id === id){
          host.area = area
        }
      })
      return {hosts: state.hosts}
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
          hosts={this.state.hosts}
          selectedHostId={this.state.selectedHostId}
          selectHost={this.selectHost}
          areas={this.formatAreas()}
          setArea={this.setArea}
          activateAll={this.activateAll}
        />
      </Segment>
    )
  }
}

export default App;
