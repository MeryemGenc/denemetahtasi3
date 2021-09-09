import React from 'react'
import { Container } from 'semantic-ui-react'
import BlogDashboard from '../../features/blogs/blogDashboard/BlogDashboard'
import NavBar from '../../features/nav/NavBar'

function App() {
  return (
    <>
      <NavBar />
      <Container className='main'>
         <BlogDashboard />
      </Container>
     
    </>
  )
}

export default App
