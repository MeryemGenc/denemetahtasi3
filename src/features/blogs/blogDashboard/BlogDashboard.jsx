import React, { useEffect, useState } from 'react'
import BlogList from './BlogList'
import { useSelector } from 'react-redux'
// import LoadingComponent from '../../../app/layout/LoadingComponent'
import BlogListItemPlaceholder from './BlogListItemPlaceholder'
// import BlogDetailSideBar from '../blogDetail/BlogDetailSidebar'
// import { listenToBlogsFromFirestore } from '../../../app/firestore/firestoreService'
import { clearBlogs, fetchBlogs } from '../blogActions'
import { useDispatch } from 'react-redux'
// import useFirestoreCollection from '../../../app/hooks/useFirestoreCollection'
import { Loader, Segment } from 'semantic-ui-react'

const BlogDashboard = () => {
  const limit = 2
  const dispatch = useDispatch()
  const { blogs, moreBlogs } = useSelector((state) => state.blog)
  const { loading } = useSelector((state) => state.async)
  const [lastDocSnapshot, setLastDocSnapshot] = useState(null)
  const [loadingInitial, setLoadingInitial] = useState(false)

  useEffect(() => {
    setLoadingInitial(true)
    dispatch(fetchBlogs(limit)).then((lastVisible) => {
      setLastDocSnapshot(lastVisible)
      setLoadingInitial(false)
    })
    return () => {
      dispatch(clearBlogs())
    }
  }, [dispatch])

  function handleFetchLastBlogs () {
    dispatch(fetchBlogs(limit, lastDocSnapshot)).then((lastVisible) => {
      setLastDocSnapshot(lastVisible)
    })
  }



  // useFirestoreCollection({
  //   query: () => listenToBlogsFromFirestore(),
  //   data: (blogs) => dispatch(listenToBlogs(blogs)),
  //   deps: [dispatch],
  // })

  return (
    <Segment clearing>
      {loadingInitial && (
        <>
          <BlogListItemPlaceholder />
          <BlogListItemPlaceholder />
        </>
      )}
      <BlogList blogs={blogs} getNextBlogs={handleFetchLastBlogs} loading={loading} moreBlogs={moreBlogs} />

        {/* <Button
        loading={loading}
        disabled={!moreBlogs}
        style={{marginRight: 35, marginTop: 35, marginBottom: 55}}
          onClick={handleFetchLastBlogs}
          floated='right'
          color='teal'
          content='Daha Fazla Blog...'
        /> */}

      {/* <BlogDetailSideBar /> */}
      <Loader active={loading} />
    </Segment>
  )
}

export default BlogDashboard
