import React from 'react'
import { Card, Image, Dropdown, List } from 'semantic-ui-react'


const HostInfo = (props) => {

  let areas = [
    {key: 'area1', text: 'area1', value: 'Area one'},
    {key: 'area2', text: 'area2', value: 'Area two'},
    {key: 'area3', text: 'area3', value: 'Area three'}
  ]

  return (
    <Card style={{height: '100%', width: '80%'}}>
      <Card.Content>
        <Image floated='left' size='small' src='https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/westworld-james.jpg'/>
        <Card.Content floated='right'>
          <Card.Header>
            Billy
          </Card.Header>
          <Card.Meta>
            Created on date
          </Card.Meta>
          <Card.Description>
            <List>
              <List.Item>Age: 27</List.Item>
              <List.Item>Gender: Male</List.Item>
            </List>
            <Dropdown value={areas[0]} options={areas} />
          </Card.Description>
        </Card.Content>
      </Card.Content>
    </Card>
    )
}

export default HostInfo
