import React from 'react'
import { Grid } from 'semantic-ui-react'
import BlogListItem from './BlogListItem'

const BlogList = ({ blogs }) => {
  
  return (
    <Grid>

      {blogs.map((blog) => (
        <BlogListItem blog={blog} key={blog.blogId} />
      ))}

    </Grid>
  )
}

export default BlogList
