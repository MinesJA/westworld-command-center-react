import React, { Component } from 'react'
import { Radio, Icon, Card, Grid, Image, Dropdown, Segment, Divider } from 'semantic-ui-react'


class HostInfo extends Component{
  constructor(props){
    super(props);
    this.state = {
        value: "hey",
        areas: props.formatAreas
      }
  }

  handleChange = (e, {value}) => this.setState({value})

  toggle = () => this.setState({checked: !this.state.checked})

  render(){
    const { value, areas } = this.state
    const { id, firstName, lastName, imageUrl, gender, active } = this.props.selectedHost
    console.log(this.props.selectedHost)
    return (
      <Grid>
        <Grid.Column width={6}>
          <Image style={{overflow: "hidden", height: "160px", width: "130px"}} floated='left' size='small' src={imageUrl}/>
        </Grid.Column>
        <Grid.Column width={10}>
          <Card>
            <Card.Content>
              <Card.Header>
                {firstName} | {gender === "Male" ? <Icon name='man' /> : <Icon name='woman' />}
              </Card.Header>
              <Card.Meta>
                <Radio style={{margin: "10px"}} slider onChange={this.toggle} label={active ? "Active" : "Decommissioned"} checked={active}/>
              </Card.Meta>

              <Divider />
              Current Area:
              <Dropdown
                onChange={this.handleChange}
                value={value}
                selection
                options={areas}
                style={{zIndex: "2"}}
              />
            </Card.Content>
          </Card>
        </Grid.Column>
      </Grid>
    )
  }
}

export default HostInfo
