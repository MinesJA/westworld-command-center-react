import React, { Component } from 'react';
import './stylesheets/App.css';
import { Segment } from 'semantic-ui-react';
import WestworldMap from './components/WestworldMap';
import Headquarters from './components/Headquarters';
import { Adapter, Format } from './services/Service';

class App extends Component {
  state = {
    hosts: [],
    areas: [],
    selectedHostId: null
  }

  componentDidMount(){
    let hostsProm = Adapter.fetchHosts()
    let areasProm = Adapter.fetchAreas()

    Promise.all([hostsProm, areasProm])
      .then( ([hosts, areas]) => {
        areas = Format.areas(areas)
        this.setState({hosts, areas})
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

  selectHost = (selectedHostId) => { this.setState({selectedHostId}) }

  renderActiveHosts = () => this.state.hosts.filter( host => host.active )


  setArea = (id, areaName) => {

    this.setState( state => {

      state.hosts.forEach( host => {
        if(host.id === id){
          host.area = areaName
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
          areas={this.state.areas}
        />
        <Headquarters
          activateHost={this.activateHost}
          hosts={this.state.hosts}
          selectedHostId={this.state.selectedHostId}
          selectHost={this.selectHost}
          areas={this.state.areas}
          setArea={this.setArea}
          activateAll={this.activateAll}
        />
      </Segment>
    )
  }
}

export default App;
