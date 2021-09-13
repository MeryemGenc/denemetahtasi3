import { CREATE_BLOG, DELETE_BLOG, UPDATE_BLOG } from "./blogConstants";

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

