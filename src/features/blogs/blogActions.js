// import { fetchSampleData } from '../../app/api/mockApi'
import {
  asyncActionError,
  asyncActionFinish,
  asyncActionStart,
} from '../../app/async/asyncReducer'
import { dataFromSnapshot, fetchBlogsFromFirestore } from '../../app/firestore/firestoreService'
import {
  CLEAR_BLOGS,
  CREATE_BLOG,
  DELETE_BLOG,
  FETCH_BLOGS,
  LISTEN_TO_SELECTED_BLOG,
  UPDATE_BLOG,
} from './blogConstants'

export function fetchBlogs(limit, lastDocSnapshot) {
  return async function (dispatch) {
    dispatch(asyncActionStart())
    try {
      //   const blogs = await fetchSampleData()
      const snapshot = await fetchBlogsFromFirestore(
        limit,
        lastDocSnapshot
      ).get()
      const lastVisible = snapshot.docs[snapshot.docs.length-1]
      const moreBlogs = snapshot.docs.length >= limit
      const blogs = snapshot.docs.map(doc => dataFromSnapshot(doc))
      dispatch({ type: FETCH_BLOGS, payload: {blogs, moreBlogs} })
      dispatch(asyncActionFinish())
      return lastVisible
    } catch (error) {
      dispatch(asyncActionError(error))
    }
  }
}

export function listenToSelectedBlog(blog) {
  return {
    type: LISTEN_TO_SELECTED_BLOG,
    payload: blog,
  }
}

export function createBlog(blog) {
  return {
    type: CREATE_BLOG,
    payload: blog,
  }
}

export function updateBlog(blog) {
  return {
    type: UPDATE_BLOG,
    payload: blog,
  }
}

export function deleteBlog(blogId) {
  return {
    type: DELETE_BLOG,
    payload: blogId,
  }
}

export function clearBlogs() {
  return {
    type: CLEAR_BLOGS,
  }
}
