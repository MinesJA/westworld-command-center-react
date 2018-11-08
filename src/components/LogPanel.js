import React, { Component } from 'react'
import { Segment, Button, Message } from 'semantic-ui-react';


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
        <Message>
          <Message.Header>Hey</Message.Header>
          <Message.List items={["Heress soem sinfo", "And some more info!!"]} />
        </Message>
        <Button fluid color={color} onClick={this.handleClick}>{text}</Button>
      </Segment>
    )
  }
}

export default LogPanel
