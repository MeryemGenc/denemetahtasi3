import React from 'react'
import { Link } from 'react-router-dom'
import { Dropdown, Icon, Image, Menu } from 'semantic-ui-react'

const SignedInMenu = ({signOut}) => {
    return (
      <Menu.Item position='right'>
        <Image avatar spaced='right' src='/assets/user.png' />
        <Dropdown pointing='top left' text='Ayse' >
            <Dropdown.Menu>
                <Dropdown.Item as={Link} to='/createBlog' > <Icon name='plus' />Yeni Yazı</Dropdown.Item>
                <Dropdown.Item > <Icon name='user' /> Profil</Dropdown.Item>
                <Dropdown.Item  onClick={signOut} > <Icon name='power' />Çıkış Yap</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
      </Menu.Item>
    )
}

export default SignedInMenu
