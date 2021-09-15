import React from 'react' 
import { Route, useLocation } from 'react-router'
import { Container } from 'semantic-ui-react'
import BlogDashboard from '../../features/blogs/blogDashboard/BlogDashboard'
import BlogDetailPage from '../../features/blogs/blogDetail/BlogDetailPage'
import BlogForm from '../../features/blogs/blogForm/BlogForm'
import HomePage from '../../features/home/HomePage'
import NavBar from '../../features/nav/NavBar'
import ModalManager from '../common/modal/ModalManager'

function App() { 
  const {key} = useLocation()
 

  return (
    <>
      <ModalManager />
      <Route exact path='/' component={HomePage} />
      <Route
        path={'/(.+)'}
        render={() => (
          <>
            <NavBar />
            <Container className='main'>
              <Route exact path='/blogs' component={BlogDashboard} />
              <Route path='/blogs/:id' component={BlogDetailPage} />
              <Route path={['/createBlog', '/edit/:id']} component={BlogForm} key={key} /> 
            </Container>
          </>
        )}
      />
    </>
  )
}

export default App
