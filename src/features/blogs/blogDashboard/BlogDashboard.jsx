import React, { useState } from 'react' 
import BlogList from './BlogList'
import { fakeData } from '../../../app/api/fakeData'

const BlogDashboard = () => {
  const [blogs, setBlogs] = useState(fakeData.blogs)

  // function handleCreateBlog(blog) {
  //   setBlogs([...blogs, blog])
  // }

  // function handleUpdateBlog(updatedBlog) {
  //   setBlogs(
  //     blogs.map((blg) =>
  //       blg.blogId === updatedBlog.blogId ? updatedBlog : blg
  //     )
  //   ) 
  // }

  function handleDeleteBlog(blogId) {
    setBlogs(blogs.filter( blg => blg.blogId !== blogId))
  }

  return (
    <> 
      <BlogList blogs={blogs} deleteBlog={handleDeleteBlog} />
    </>
  )
}

export default BlogDashboard
