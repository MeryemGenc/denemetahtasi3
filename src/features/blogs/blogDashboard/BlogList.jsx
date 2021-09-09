import React from 'react'
import { Grid } from 'semantic-ui-react'
import BlogListItem from './BlogListItem'

const BlogList = ({ data }) => {

  return (
    <Grid>

      {data.blogs.map((blog) => (
        <BlogListItem blog={blog} key={blog.blogId} />
      ))}

    </Grid>
  )
}

export default BlogList
