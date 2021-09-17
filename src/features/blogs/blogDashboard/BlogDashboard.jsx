import React from 'react'
import BlogList from './BlogList'
import { useSelector } from 'react-redux'
// import LoadingComponent from '../../../app/layout/LoadingComponent'
import BlogListItemPlaceholder from './BlogListItemPlaceholder'
import BlogDetailSideBar from '../blogDetail/BlogDetailSidebar'

const BlogDashboard = () => {
  const { blogs } = useSelector((state) => state.blog)
  const { loading } = useSelector((state) => state.async)

// if (loading) {
//   return <LoadingComponent />
// }


  return (
    <>
    {loading && 
      <>
        <BlogListItemPlaceholder />
        <BlogListItemPlaceholder />
      </>
    }
      <BlogList blogs={blogs} />
      <BlogDetailSideBar />
    </>
  )
}

export default BlogDashboard
