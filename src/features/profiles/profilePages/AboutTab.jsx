import React, { useState } from 'react'
import { Button, Grid, Header, Tab } from 'semantic-ui-react'
import ProfileForm from './ProfileForm'

const AboutTab = ({ profile }) => {
  const [editMode, setEditMode] = useState(false)

  return (
    <Tab.Pane >
      <Grid>
        <Grid.Column width={16}>
          <Header
            floated='left'
          >{`About ${profile.displayName}`}</Header>
          <Button
            onClick={() => setEditMode(!editMode)}
            floated='right'
            color='purple'
            
            content={editMode ? 'Vazgec' : 'Edit'}
          />
        </Grid.Column>
        <Grid.Column width={16}>
          {editMode ? (
            <ProfileForm profile={profile} />
          ) : (
            <>
              <div style={{ marginBottom: 10 }}>
                <div> {profile.description || null} </div>
              </div>
            </>
          )}
        </Grid.Column>
      </Grid>
    </Tab.Pane>
  )
}

export default AboutTab
