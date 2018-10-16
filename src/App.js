import React, { Component, Fragment } from 'react';
import { Grid, Segment } from 'semantic-ui-react';
import WestworldMap from './components/WestworldMap';
import Headquarters from './components/Headquarters'


class App extends Component {


  // componentDidMount() {
	// 	fetch("http://localhost:3000/hosts")
	// 		.then(res => res.json())
	// 		.then(result => this.setState({
  //       hosts: result}, console.log(this.state)));
	// }



  render() {
    let style = {
      width: '90%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }
    return (
      <Segment style={style}>
        <WestworldMap areas={this.state.areas} />
        <Headquarters hosts={this.state.hosts} />
      </Segment>
    )
  }
}

export default App;
