import React, { Component } from 'react'
import { Segment, Button, Message } from 'semantic-ui-react';
import { Log } from '../services/Log'

const LogPanel = () => {

  const dummyLogs = () => {
    // This is just to show you how this should work. But where should the log data actually get stored?
    // And where should we be creating logs in the first place?
    // Feel free to use the Log service class (located in: 'src/services/Log') we've created anywhere you like

    let logs = []

    logs.unshift(Log.warn("This is an example of a warn log"))
    logs.unshift(Log.notify("This is an example of a notify log"))
    logs.unshift(Log.error("This is an example of an error log"))

    return logs
  }

  return(
    <Segment className="HQComps" id="logPanel">
      <pre>
        {dummyLogs().map((log, i) => <p key={i} className={log.type}>{log.msg}</p>)}
      </pre>
      <Button fluid color={/* This isn't always goin to be the same color...*/}>
        {/* And this isn't always going to render the same text...*/}
      </Button>
    </Segment>
  )
}

export default LogPanel
