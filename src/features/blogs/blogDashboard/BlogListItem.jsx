import React from 'react'
import { Card, Divider, Grid, Icon, Image } from 'semantic-ui-react'

const BlogListItem = ({ blog }) => {
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
            <Card.Meta> {blog.blogCategory} &nbsp;&nbsp;&nbsp;<Icon name='calendar alternate outline' /> &nbsp;&nbsp;<span>{blog.blogDate}   </span></Card.Meta>
            <Divider />
            <Card.Content > {blog.blogArticle.substring(0,225)}...  </Card.Content>
          {/* <Image src='https://react.semantic-ui.com/images/wireframe/centered-paragraph.png' /> */}
        </Grid.Column>
      </Grid.Row>
      <Divider />
    </>
  )
}

export default BlogListItem
