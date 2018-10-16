import React, { Component, Fragment } from 'react';
import { Grid, Segment } from 'semantic-ui-react';
import WestworldMap from './components/WestworldMap';
import Headquarters from './components/Headquarters'


class App extends Component {
  state = {
    activeHosts: [],
    hosts: []
  }

  componentDidMount() {
		fetch("http://localhost:3000/hosts")
			.then(res => res.json())
			.then(result => {
        this.setState({hosts: result}, ()=>{console.log(this.state)})
      })
	}



  render(){
    return (
      <Segment id='app'>
        <WestworldMap hosts={this.state.hosts}/>
        <Headquarters hosts={this.state.hosts}/>
      </Segment>
    )
  }
}

export default App;
