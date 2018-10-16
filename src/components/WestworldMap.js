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
      <Area className="Area" className="area" id={area} areaName={area} key={area}/>
    )
  )


  render(){

    let style = {
      backgroundImage: 'url("http://i.imgur.com/2fVdhfG.jpg")',
      backgroundSize: '100%',
      width: '100%',
      height: '80%'
    }

    return (
      <Segment style={style} >
        {this.renderAreas()}
      </Segment>
    )
  }
}

export default WestworldMap;
