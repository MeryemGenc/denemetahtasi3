import React from 'react'
import { Button, Container, Menu } from 'semantic-ui-react'

const NavBar = () => {
  return (
    <Menu inverted fixed='top'>
      <Container>
        <Menu.Item header>DenemeTahtasi</Menu.Item>
        <Menu.Item name='Yazilar' />
        <Menu.Item>
          <Button positive inverted content='Yazi Yaz' />
        </Menu.Item>
        <Menu.Item position='right'>
          <Button basic inverted content='LogIn' />
          <Button basic inverted content='SignIn' style={{marginLeft: '0.5em'}}/>
        </Menu.Item>
      </Container>
    </Menu>
  )
}

export default NavBar
