import React, { Component } from 'react'
import { Card, Grid, Image, Dropdown, List, Segment } from 'semantic-ui-react'


class HostInfo extends Component{
  state = {
    value: "Area one",
    areas: [
      {key: 'area1', text: 'area1', value: 'Area one'},
      {key: 'area2', text: 'area2', value: 'Area two'},
      {key: 'area3', text: 'area3', value: 'Area three'}
    ]
  }

  handleChange = (e, {value}) => this.setState({value})

  render(){
    const { value, areas } = this.state
    console.log(value)
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
                  Billy
                </Card.Header>
                <Card.Meta>
                  Created on date
                </Card.Meta>
                <List>
                  <List.Item>Age: 27</List.Item>
                  <List.Item>Gender: Male</List.Item>
                </List>
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
