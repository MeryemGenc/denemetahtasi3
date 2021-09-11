import React from 'react'
import { Button, Menu } from 'semantic-ui-react'

const SignedOutMenu = ({setAuthenticated}) => {
  return (
    <Menu.Item position='right'>
      <Button onClick={() =>  setAuthenticated(true) } basic inverted>
        Giriş
      </Button>
      <Button basic inverted style={{ marginLeft: '0.5em' }}>
        Kayıt Ol
      </Button>
    </Menu.Item>
  )
}

export default SignedOutMenu
