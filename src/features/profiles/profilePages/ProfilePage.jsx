import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Grid } from 'semantic-ui-react'
import ProfileContent from './ProfileContent'
import ProfileHeader from './ProfileHeader'
import useFirestoreDoc from '../../../app/hooks/useFirestoreDoc'
import { getUserProfile } from '../../../app/firestore/firestoreService'
import { listenToCurrentUserProfile } from '../profileActions'
import LoadingComponent from '../../../app/layout/LoadingComponent'

const ProfilePage = () => {
  const dispatch = useDispatch()
  const { currentUserProfile } = useSelector((state) => state.profile)
  const { currentUser } = useSelector((state) => state.auth)
  const { loading, error } = useSelector((state) => state.async)

  useFirestoreDoc({
    query: () => getUserProfile('mM3bGNguaC75GvHmYuK6'),
    data: (profile) => dispatch(listenToCurrentUserProfile(profile)),
    deps: [dispatch],
  })

  let isCurrentUser = currentUser?.email === 'selinakil@gmail.com' ? true : null

  // console.log('yyyyyyyy')
  // console.log(currentUser)
  // console.log('yyyyyyyy')

  if ((loading && !currentUserProfile) || (!currentUserProfile && !error))
    return <LoadingComponent content='Loading profile...' />

  return (
    <Grid>
      <Grid.Column width={16}>
        <ProfileHeader profile={currentUserProfile} />
        <ProfileContent profile={currentUserProfile}  isCurrentUser={isCurrentUser} />
      </Grid.Column>
    </Grid>
  )
}

export default ProfilePage
