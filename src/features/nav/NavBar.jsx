import React from 'react'
import { useState } from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import { Button, Container, Menu } from 'semantic-ui-react'
import SignedInMenu from './SignedInMenu'
import SignedOutMenu from './SignedOutMenu'

const NavBar = () => {
  const history = useHistory()
  const [authenticated, setAuthenticated] = useState(false)


  function handleSignOut() {
    setAuthenticated(false)
    history.push('/')
  }


  return (
    <Menu inverted fixed='top'>
      <Container>
        <Menu.Item exact as={NavLink} to='/' header>DenemeTahtasi</Menu.Item>
        <Menu.Item as={NavLink} to='/blogs' name='Yazilar' />
        {authenticated && 
        <Menu.Item>
          <Button as={NavLink} to='/createBlog' basic inverted content='Yazi Yaz' />
        </Menu.Item>
        }
        {authenticated ?
        <SignedInMenu signOut={handleSignOut} />:
        <SignedOutMenu setAuthenticated={setAuthenticated} />

        }
      </Container>
    </Menu>
  )
}

export default NavBar
