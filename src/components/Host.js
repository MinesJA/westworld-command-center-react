import React from 'react';
import { Card } from 'semantic-ui-react'

const Host = () => {

  return(
    <Card
      className="host selected"
      {/* Remove the "selected" portion of the className above to see what happens to the host. */}
      onClick={ /* On Click what? */}
      image={/* I wonder what goes here...*/}
      raised
    />
  )
}

export default Host
