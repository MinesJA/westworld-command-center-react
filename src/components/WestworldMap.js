import React, { Component } from 'react';
import Area from './Area.js';
import { Segment } from 'semantic-ui-react';


class WestworldMap extends Component {

  renderHosts = (value) => {
    // let filteredHosts = hosts.filter( host => host.area === value )
    return this.props.hosts.filter( host => host.area === value )

    // return filteredHosts.slice(0,limit)
  }


  componentDidCatch(error, info){
    debugger
  }

  renderAreas = () => {
    return this.props.areas.map( ({ namesObject: {text, value}, formatName, limit }) =>
    {
      try{
      return <Area
        value={value}
        name={text}
        limit={limit}
        key={value}
        hosts={this.renderHosts(value)}
        selectedHostId={this.props.selectedHostId}
        selectHost={this.props.selectHost}
      />
    }
    catch(error){
      debugger
    }
  }

    )
  }

  render(){
    let {areas, hosts, selectedHostId, selectHost} = this.props
    return (
      <Segment id="map" >
        {this.renderAreas()}
      </Segment>
    )
  }
}

export default WestworldMap;
