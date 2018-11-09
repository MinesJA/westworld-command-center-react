import React, { Component } from 'react'
import { Radio, Icon, Card, Grid, Image, Dropdown, Divider } from 'semantic-ui-react'


class HostInfo extends Component{
  state = {
      value: this.props.selectedHost.area,
      areas: this.props.areas,
      active: this.props.selectedHost.active
    }

  componentDidUpdate(prevProps, prevState){
    if(this.props.selectedHost !== prevProps.selectedHost){
      this.setState({
        value: this.props.selectedHost.area,
        active: this.props.selectedHost.active
      })
    }
  }

  handleChange = (e, {value}) => {
    let area = this.props.areas.find( area => area.name == value)
    let hostsInArea = this.props.hosts.filter( host => host.area === value)

    if(area.limit < (hostsInArea.length + 1)){
      alert("TOo many hosts")
    } else {
      this.setState({value})
      this.props.setArea(this.props.selectedHost.id, value)
    }
  }

  toggle = () => {
    this.setState({active: !this.state.active})

    this.props.activateHost(this.props.selectedHost.id)
  }

  render(){
    const { value, areas, active } = this.state
    const { firstName, imageUrl, gender } = this.props.selectedHost
    const formattedNames = areas.map( area => area.namesObject)
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
                options={formattedNames}
              />
            </Card.Content>
          </Card>
        </Grid.Column>
      </Grid>
    )
  }
}

export default HostInfo
