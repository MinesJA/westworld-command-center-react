import React, { Component, Fragment } from 'react';
import { Grid, Segment } from 'semantic-ui-react';
import WestworldMap from './components/WestworldMap';
import Headquarters from './components/Headquarters'


class App extends Component {
  state = {
    hosts: []
  }

  // componentDidMount() {
	// 	fetch("http://localhost:3000/hosts")
	// 		.then(res => res.json())
	// 		.then(result => {
  //       this.setState({hosts: result}, ()=>{console.log(this.state)})
  //     })
	// }



  render(){

    let style = {
      width: '1500px',
      height: '900px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }

    return (
      <Segment style={style}>
        <WestworldMap hosts={this.state.hosts}/>
        <Headquarters hosts={this.state.hosts}/>
      </Segment>
    )
  }
}

export default App;
