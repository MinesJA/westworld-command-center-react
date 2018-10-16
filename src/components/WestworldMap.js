import React, { Component } from 'react';
import Area from './Area.js';
import { Segment } from 'semantic-ui-react';


class WestworldMap extends Component {
  state = {
    areas: ["high_plains",
            "lowlands",
            "under_construction",
            "pariah",
            "python_pass",
            "badlands"]
  }


  renderAreas = () => (
    this.state.areas.map( area =>
      <Area className="Area" className="Area" id={area} key={area}/>
    )
  )


  render() {

    let style = {
      backgroundImage: 'url("http://i.imgur.com/2fVdhfG.jpg")',
      width: '100%'
    }

    return (
      <Segment style={style}>
        {this.renderAreas()}
      </Segment>
    )
  }
}

export default WestworldMap;
