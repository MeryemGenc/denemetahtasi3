import React from 'react'
import { Link } from 'react-router-dom'
import {
  Card,
  Divider,
  Grid,
  Icon,
  Image,
  Label,
} from 'semantic-ui-react'

const BlogListItem = ({ blog, handleSelectBlog, deleteBlog }) => {
  // console.log(blog)

  return (
    <>
      <Grid.Row style={{ margin: '50px' }}>
        <Grid.Column width={5}>
          {/* image: 400 * 300 */}
          <Image src={blog.blogPhotoURL} />
          {/* </Card> */}
        </Grid.Column>
        <Grid.Column width={11}>
          {/* <Card border='none' fluid={'true'} style={{height:'100%', border: '5px' }} > */}
          <Card.Header as='h1'>{blog.blogTitle}</Card.Header>
          <Card.Meta>
            {blog.blogCategory} &nbsp;&nbsp;&nbsp;
            <Icon name='calendar alternate outline' /> &nbsp;&nbsp;
            <span>{blog.blogDate} </span>
          </Card.Meta>
          <Divider />
          <Card.Content>
            {blog.blogArticle.substring(0, 225)} &nbsp;&nbsp;&nbsp; &nbsp;

            {/* react-router dan sonra as='Link olmali' */}
            <Label as={Link} to={`/blogs/${blog.blogId}`} style={{ marginRight: '50px' }} size='small' attached='bottom right' basic color='purple'>
              Okumaya devam et
            </Label>
            <Label size='small' attached='bottom right' as='a' onClick={() => deleteBlog(blog.blogId)} color={'red'}>
              Sil
            </Label>
          </Card.Content>
          {/* <Image src='https://react.semantic-ui.com/images/wireframe/centered-paragraph.png' /> */}
        </Grid.Column>
      </Grid.Row>
    </>
  )
}

export default BlogListItem
