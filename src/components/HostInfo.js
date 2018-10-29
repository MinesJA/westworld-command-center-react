import React, { Component } from 'react'
import { Radio, Icon, Card, Grid, Image, Dropdown, Segment, Divider } from 'semantic-ui-react'


class HostInfo extends Component{
  constructor(props){
    super(props)
    state: {
      
    }
  }
  state = {
    checked: false,
    value: "Area one",
    areas: [
      {key: 'area1', text: 'area1', value: 'Area one'},
      {key: 'area2', text: 'area2', value: 'Area two'},
      {key: 'area3', text: 'area3', value: 'Area three'}
    ]
  }

  handleChange = (e, {value}) => this.setState({value})

  toggle = () => this.setState({checked: !this.state.checked})

  render(){
    const { value, areas } = this.state
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
