import React from 'react' 
import { Route } from 'react-router'
import { Container } from 'semantic-ui-react'
import BlogDashboard from '../../features/blogs/blogDashboard/BlogDashboard'
import BlogDetailPage from '../../features/blogs/blogDetail/BlogDetailPage'
import BlogForm from '../../features/blogs/blogForm/BlogForm'
import HomePage from '../../features/home/HomePage'
import NavBar from '../../features/nav/NavBar'

function App() { 
 

  return (
    <>
      <Route exact path='/' component={HomePage} />
      <Route
        path={'/(.+)'}
        render={() => (
          <>
            <NavBar />
            <Container className='main'>
              <Route exact path='/blogs' component={BlogDashboard} />
              <Route path='/blogs/:id' component={BlogDetailPage} />
              <Route path={['/createBlog', '/edit/:id']} component={BlogForm} />
              {/* <BlogDashboard setSelectedBlog={setSelectedBlog} handleSelectBlog={handleSelectBlog} selectedBlog={selectedBlog} /> */}
            </Container>
          </>
        )}
      />
    </>
  )
}

export default App
