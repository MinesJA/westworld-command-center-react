import React from 'react';
import '../stylesheets/Host.css'
import { Card } from 'semantic-ui-react'

const Host = () => {

  return(
    <Card
      className="host selected"
      {/* NOTE: The className "host selected" renders a different style than simply "host". */}
      onClick={ /* On Click what? */}
      image={/* I wonder what goes here...*/}
      raised
    />
  )
}

export default Host
