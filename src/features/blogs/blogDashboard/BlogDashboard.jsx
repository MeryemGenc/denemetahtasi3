import React from 'react' 
import BlogList from './BlogList' 
import { useSelector } from 'react-redux'

const BlogDashboard = () => {
  const {blogs} = useSelector(state => state.blog)

  

  return (
    <> 
      <BlogList blogs={blogs} />
    </>
  )
}

export default BlogDashboard
