import React, { Component } from 'react'
import { Radio, Icon, Card, Grid, Image, Dropdown, Divider } from 'semantic-ui-react'


const HostInfo = () => {

  const handleChange = (e, {value}) => {
    // the 'value' attribute is given via Semantic's Dropdown component.
    // Don't worry too much about how this works.
    // Just know that Semantic dropdowns take options as an array of objects in this form:
    // {key: "some_text", text: "Some Text", value: "some_text"}
    // You get access to the last one for whatever is selected
    // See the Semantic docs for more info: https://react.semantic-ui.com/modules/dropdown/#usage-controlled

    // Also, there's more info on this below
  }


  return (
    <Grid>
      <Grid.Column width={6}>
        <Image style={{overflow: "hidden", height: "160px", width: "130px"}} floated='left' size='small' src={ /* pass in the right image here */ }/>
      </Grid.Column>
      <Grid.Column width={10}>
        <Card>
          <Card.Content>
            <Card.Header>
              {selectedHost.firstName} | { /* What needs to be true to render the man icon or false to render the woman icon? */ ? <Icon name='man' /> : <Icon name='woman' />}
            </Card.Header>
            <Card.Meta>
              <Radio style={{margin: "10px"}} slider onChange={toggle} label={"AmIActive?"} checked={/* What happens when I'm checked */}/>
            </Card.Meta>

            <Divider />
            Current Area:
            <Dropdown
              onChange={handleChange}
              value={/* This is the value of whatever is currently selected. See example below */}
              {/*
                Pass an array of objects to 'options' like so:
                [{key: "area_one" text: "Area One" value: "area_two"}, {key: "area_two" text: "Area Two" value: "area_two"}]
                The value should be set to whatever you want currently selected. Like "area_two".
                The dropdown will display whatever corresponds to the test key, like "Area Two".
                  */}
              selection
              options={/* These are your selection options. See above. */}
            />
          </Card.Content>
        </Card>
      </Grid.Column>
    </Grid>
  )
}

export default HostInfo
