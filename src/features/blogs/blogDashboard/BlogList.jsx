import React from 'react'
import { Grid } from 'semantic-ui-react'
import BlogListItem from './BlogListItem'

const BlogList = ({ blogs, handleSelectBlog, deleteBlog }) => {

console.log(blogs)

  return (
    <Grid>

      {blogs.map((blog) => (
        <BlogListItem blog={blog} key={blog.blogId} handleSelectBlog={handleSelectBlog} deleteBlog={deleteBlog} />
      ))}

    </Grid>
  )
}

export default BlogList
