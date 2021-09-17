import { fetchSampleData } from "../../app/api/mockApi";
import { asyncActionError, asyncActionFinish, asyncActionStart } from "../../app/async/asyncReducer";
import { CREATE_BLOG, DELETE_BLOG, FETCH_BLOGS, UPDATE_BLOG } from "./blogConstants";

export function loadBlogs() {
    return async function(dispatch){
            dispatch(asyncActionStart())
        try {
            const blogs = await fetchSampleData()
            dispatch({type: FETCH_BLOGS, payload: blogs})
            dispatch(asyncActionFinish())
        } catch (error) {
            dispatch(asyncActionError(error))
        }
    }
}


export function createBlog(blog) {
    return {
        type: CREATE_BLOG,
        payload: blog
    }
}

export function updateBlog(blog) {
    return {
        type: UPDATE_BLOG,
        payload: blog
    }
}

export function deleteBlog(blogId) {
    return {
        type: DELETE_BLOG,
        payload: blogId
    }
}

