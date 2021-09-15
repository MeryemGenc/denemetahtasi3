import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import { Dropdown, Icon, Image, Menu } from 'semantic-ui-react'
import { signOutUser } from '../auth/authActions' 

const SignedInMenu = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const {currentUser} = useSelector(state => state.auth)

    return (
      <Menu.Item position='right'>
        <Image avatar spaced='right' src={currentUser.photoURL || '/assets/user.png' } />
        <Dropdown pointing='top left' text={currentUser.email} >
            <Dropdown.Menu>
                <Dropdown.Item as={Link} to='/createBlog' > <Icon name='plus' />Yeni Yazı</Dropdown.Item>
                <Dropdown.Item > <Icon name='user' /> Profil</Dropdown.Item>
                <Dropdown.Item  onClick={() => {
                  dispatch(signOutUser())
                  history.push('/')}
                  } > <Icon name='power' />Çıkış Yap</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
      </Menu.Item>
    )
}

export default SignedInMenu
