import React, { Component } from 'react';
import { Grid, Segment } from 'semantic-ui-react';
import HomeMap from './HomeMap';
import Headquarters from './Headquarters'


class App extends Component {
  state = {

  }
  

  // componentDidMount() {
	// 	fetch("http://localhost:3000/hosts")
	// 		.then(res => res.json())
	// 		.then(result => this.setState({
  //       hosts: result}, console.log(this.state)));
	// }



  render() {
    return (
      <Grid centered>
        <Grid.Row>
          <Grid.Column width={1}/>
          <Grid.Column width={14}>
            <Segment></Segment>
            <HomeMap areas={this.state.areas} hosts={this.state.hosts} />
            <Segment></Segment>
          </Grid.Column>
          <Grid.Column width={1}/>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={1}/>
          <Grid.Column width={14}>
            <Headquarters hosts={this.state.hosts} />
          </Grid.Column>
          <Grid.Column width={1}/>
        </Grid.Row>
      </Grid>
    )
  }
}

export default App;
