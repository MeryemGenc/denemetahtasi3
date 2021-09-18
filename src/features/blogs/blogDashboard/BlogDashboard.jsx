import React from 'react'
import BlogList from './BlogList'
import { useSelector } from 'react-redux'
// import LoadingComponent from '../../../app/layout/LoadingComponent'
import BlogListItemPlaceholder from './BlogListItemPlaceholder'
import BlogDetailSideBar from '../blogDetail/BlogDetailSidebar'
import { listenToBlogsFromFirestore } from '../../../app/firestore/firestoreService'
import { listenToBlogs } from '../blogActions'
import { useDispatch } from 'react-redux'
import useFirestoreCollection from '../../../app/hooks/useFirestoreCollection'

const BlogDashboard = () => {
  const dispatch = useDispatch()
  const { blogs } = useSelector((state) => state.blog)
  const { loading } = useSelector((state) => state.async)

  useFirestoreCollection({
    query: () => listenToBlogsFromFirestore(),
    data: (blogs) => dispatch(listenToBlogs(blogs)),
    deps: [dispatch],
  })

  return (
    <>
      {loading && (
        <>
          <BlogListItemPlaceholder />
          <BlogListItemPlaceholder />
        </>
      )}
      <BlogList blogs={blogs} />
      <BlogDetailSideBar />
    </>
  )
}

export default BlogDashboard
