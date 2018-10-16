import React, { Component } from 'react'
import { Radio, Icon, Card, Grid, Image, Dropdown, List, Segment, Divider } from 'semantic-ui-react'


class HostInfo extends Component{
  state = {
    checked: false,
    value: "Area one",
    areas: [
      {key: 'area1', text: 'area1', value: 'Area one'},
      {key: 'area2', text: 'area2', value: 'Area two'},
      {key: 'area3', text: 'area3', value: 'Area three'}
    ]
    // This state is here to show you how the Info box should work. But it doesn't have to (and probably shouldn't) live here
    // Plus the areas aren't called area1,2,or 3. That's just a placeholder.
  }

  handleChange = (e) => {
    // Your code here
  }


  toggle = () => {
    // Your code here
  }

  render(){
    const { value, areas } = this.state
    // A lot of these values are hardcoded.....but they shouldn't be, hint hint....

    return (
      <Segment>
        <Grid>
          <Grid.Column width={6}>
            <Image floated='left' size='small' src='https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/westworld-james.jpg'/>
          </Grid.Column>
          <Grid.Column width={10}>
            <Card>
              <Card.Content>
                <Card.Header>
                  Teddy Flood <Icon name='man' />
                  { /* What should happen when the host isn't a man? Or when his name isn't Teddy? */}
                </Card.Header>
                <Card.Meta>
                  <Radio style={{margin: "10px"}} slider onChange={this.toggle} label={this.state.checked ? "Active" : "Decommissioned"} checked={this.state.checked}/>
                </Card.Meta>

                <Divider />
                Current Area:
                <Dropdown
                  onChange={this.handleChange}
                  value={value}
                  selection
                  options={areas} />

              </Card.Content>
            </Card>
          </Grid.Column>
        </Grid>
      </Segment>
    )
  }
}

export default HostInfo
