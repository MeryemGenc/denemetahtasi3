import React from 'react'
import { useState } from 'react'
import { Container } from 'semantic-ui-react'
import BlogDashboard from '../../features/blogs/blogDashboard/BlogDashboard'
import NavBar from '../../features/nav/NavBar'

function App() {
  const [selectedBlog, setSelectedBlog] = useState(null)

  
  function handleSelectBlog(blog) {
    setSelectedBlog(blog)
  }


  return (
    <>
      <NavBar />
      <Container className='main'>
         <BlogDashboard setSelectedBlog={setSelectedBlog} handleSelectBlog={handleSelectBlog} selectedBlog={selectedBlog} />
      </Container>
     
    </>
  )
}

export default App
