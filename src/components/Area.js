import React from 'react';
import '../stylesheets/Area.css'

const Area = () => (

  <div className='area' id={/* Pass in the area name here to make sure this is styled correctly */}>
    <h3 className='labels'>{/* Don't just pass in the name from the data...clean that thing up */}</h3>

    {/* See Checkpoint 1 item 2 in the Readme for a clue as to what goes here */}

  </div>

)

Area.propTypes = {
  hosts: function(props, propName, componentName){
    if(props.hosts.length > props.limit){
      throw Error(
        `HEY!! You got too many hosts in ${props.name}. The limit for that area is ${props.limit}. You gotta fix that!`
      )
    }
  }
}

export default Area;
