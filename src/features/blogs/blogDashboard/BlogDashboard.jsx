import React, { useState } from 'react'
import BlogForm from '../blogForm/BlogForm'
import BlogList from './BlogList'
import {fakeData} from '../../../app/api/fakeData';

const BlogDashboard = () => {
    const [data, setData] = useState(fakeData)

  return (
    <>
      <BlogForm />
      <BlogList data={data} />
    </>
  )
}

export default BlogDashboard
