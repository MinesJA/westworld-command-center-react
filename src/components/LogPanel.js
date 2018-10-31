import React, { Component } from 'react'
import { Segment, Button } from 'semantic-ui-react';


class LogPanel extends Component{
  state = {
    events: [],
    activated: false
  }

  handleClick = () => {
    this.setState({
      activated: !this.state.activated
    }, ()=>{this.props.activateAll(this.state.activated)})
  }


  render(){
    const { activated, events } = this.state
    const color = activated ? "green" : "red"
    const text = activated ? "DECOMMISSION ALL" : "ACTIVATE ALL"
    return(
      <Segment className="HQComps" id="logPanel">
        <pre style={{height: 150, overflowY: 'scroll'}}>
          {events.map((e, i)=> <p key={i}>{e}</p>)}
        </pre>
        <Button fluid color={color} onClick={this.handleClick}>{text}</Button>
      </Segment>
    )
  }
}

export default LogPanel
