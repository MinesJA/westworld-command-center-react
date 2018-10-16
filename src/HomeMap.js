import React, { Component } from 'react';
import map from './images/westworld_map2.jpg';
import Area from './Area.js';


class HomeMap extends Component {
  state = {
    areas: ["high_plains", "lowlands", "under_construction", "pariah", "python_pass", "badlands"]
  }


  renderAreas = () => (
    this.state.areas.map((area)=> (
      <Area className="Area" className="Area" id={area} hosts={this.props.hosts} key={area}/>
    ))
  )



  render() {
    return (
      <div className="Map" style={{backgroundImage: 'url("http://i.imgur.com/2fVdhfG.jpg")', width: "75%", height: "75%"}}>


        {this.renderAreas()}

      </div>
    )
  }
}

export default HomeMap;
