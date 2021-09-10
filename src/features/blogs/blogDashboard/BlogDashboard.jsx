import React, { useState } from 'react'
import BlogForm from '../blogForm/BlogForm'
import BlogList from './BlogList'
import { fakeData } from '../../../app/api/fakeData'

const BlogDashboard = ({ handleSelectBlog, selectedBlog, setSelectedBlog }) => {
  const [blogs, setBlogs] = useState(fakeData.blogs)

  function handleCreateBlog(blog) {
    setBlogs([...blogs, blog])
  }

  function handleUpdateBlog(updatedBlog) {
    setBlogs(
      blogs.map((blg) =>
        blg.blogId === updatedBlog.blogId ? updatedBlog : blg
      )
    )
    handleSelectBlog(null)
  }

  function handleDeleteBlog(blogId) {
    setBlogs(blogs.filter( blg => blg.blogId !== blogId))
  }

  return (
    <>
      <BlogForm
        setBlogs={setBlogs}
        createBlog={handleCreateBlog}
        setSelectedBlog={setSelectedBlog}
        selectedBlog={selectedBlog}
        updateBlog={handleUpdateBlog}
        key={selectedBlog ? selectedBlog.blogId : null}
      />
      <BlogList blogs={blogs} handleSelectBlog={handleSelectBlog} deleteBlog={handleDeleteBlog} />
    </>
  )
}

export default BlogDashboard
