import React from 'react'
import { Container, Divider, Grid, Image } from 'semantic-ui-react'
import BlogDetailSidebar from './BlogDetailSidebar'

const BlogDetailPage = () => {
    return (
    <Grid style={{ paddingBottom: 50, marginTop: 40 }}>
        <Grid.Column width={12}>
      <Container as='h1' textAlign='center'>Center Aligned</Container>
      <Container textAlign='right'>Right Aligned</Container>
      <Container textAlign='justified'>
        <b>Justified</b>
        <Divider style={{ marginTop: 50, marginBottom: 50 }} />

        <Image style={{ marginBottom: 50 }} centered src='https://images.unsplash.com/photo-1500964757637-c85e8a162699?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dmlld3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' size='large' />

        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque
          penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
          Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
          aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
          imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede link
          mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum
          semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula,
          porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante,
          dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla
          ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam
          ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque
          penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
          Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
          aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
          imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede link
          mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum
          semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula,
          porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante,
          dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla
          ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam
          ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.
        </p>
      </Container>
      </Grid.Column>
      <Grid.Column width={3} >
          <BlogDetailSidebar />
      </Grid.Column>
    </Grid>
    )
}

export default BlogDetailPage
