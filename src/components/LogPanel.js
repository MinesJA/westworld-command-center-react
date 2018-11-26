import React from 'react'
import { Segment, Button } from 'semantic-ui-react';
import { Log } from '../services/Log'

const LogPanel = ({ events, activated, handleActivate, addLog }) => {

  const handleClick = () => {
    if(activated){
      addLog(Log.notify(`Decommissioned all hosts.`))
    }else{
      addLog(Log.warn(`Activated all hosts!`))
    }
    handleActivate()
  }

  const color = activated ? "green" : "red"

  const text = activated ? "DECOMMISSION ALL" : "ACTIVATE ALL"


  return(
    <Segment className="HQComps" id="logPanel">
      <pre>
        {events.map((e, i) => <p key={i} className={e.type}>{e.msg}</p>)}
      </pre>
      <Button
        fluid
        color={color}
        onClick={handleClick}
        content={text}
      />
    </Segment>
  )
}

export default LogPanel
