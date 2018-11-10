import React from 'react';

const Area = () => (

  <div className='area' id={/* how do we get this thing styled right? See Stylesheets and Readme */}>
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
