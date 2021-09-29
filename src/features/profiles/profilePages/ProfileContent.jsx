import React from 'react'
import { Tab } from 'semantic-ui-react'

const ProfileContent = () => {
    const panes= [
        {menuItem: 'About', render: () => <Tab.Pane>About User</Tab.Pane>},
        {menuItem: 'Photos', render: () => <Tab.Pane>About User</Tab.Pane>},
        {menuItem: 'Blogs', render: () => <Tab.Pane>About User</Tab.Pane>},
        {menuItem: 'Takip Edenler', render: () => <Tab.Pane>About User</Tab.Pane>},
        {menuItem: 'Takiptekiler', render: () => <Tab.Pane>About User</Tab.Pane>},
    ]


    return (
        <Tab 
            menu={{ fluid: true, vertical: true }}
            menuPosition='right'
            panes={panes}
        />
    )
}

export default ProfileContent
