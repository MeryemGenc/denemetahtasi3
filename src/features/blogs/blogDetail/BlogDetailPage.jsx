import { format } from 'date-fns'
import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Container, Divider, Grid, Image, Label } from 'semantic-ui-react'
import BlogDetailSidebar from './BlogDetailSidebar'

const BlogDetailPage = ({ match }) => {
  const blog = useSelector((state) =>
    state.blog.blogs.find((blg) => blg.blogId === match.params.id)
  )

  return (
    <Grid>
      <Grid.Row>
      <Grid.Column width={12}>
        <Container as='h1' textAlign='center'>
          {blog.blogTitle}
        </Container>
        <Container as='h5' textAlign='right'>{format(blog.blogDate, 'MMMM d, yyyy')}</Container>
        <Container as='h5' textAlign='right'>{blog.blogCategory} </Container>
        <Container textAlign='justified'>
          <Divider style={{ marginTop: 10, marginBottom: 40 }} />

          <Image
            style={{ marginBottom: 50 }}
            centered
            src={blog.blogPhotoURL}
            size='large'
          />

          {blog.blogArticle}
        </Container>
      </Grid.Column>
      <Grid.Column width={3}>
        <BlogDetailSidebar/>
      </Grid.Column>
      </Grid.Row>
      <Grid.Row>
            <Label size='medium' attached='bottom right' as={Link} to={`/edit/${blog.blogId}`} color={'teal'}>
              Güncelle
            </Label>
      </Grid.Row>
      
    </Grid>
  )
}

export default BlogDetailPage
