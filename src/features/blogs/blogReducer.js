
import { CLEAR_BLOGS, CREATE_BLOG, DELETE_BLOG, FETCH_BLOGS, LISTEN_TO_SELECTED_BLOG, UPDATE_BLOG } from './blogConstants'

const initialState = {
  blogs: [],
  moreBlogs: true,
  selectedBlog: null
}

export default function blogReducer(state = initialState, { type, payload }) {
  switch (type) {
    case CREATE_BLOG:
      return {
        ...state,
        blogs: [...state.blogs, payload],
      }
    case UPDATE_BLOG:
      return {
        ...state,
        blogs: [
          ...state.blogs.filter((blg) => blg.blogId !== payload.blogId),
          payload,
        ],
      }
    case DELETE_BLOG:
      return {
        ...state,
        blogs: [...state.blogs.filter((blg) => blg.blogId !== payload)],
      }
    case FETCH_BLOGS:
      return {
        ...state,
        blogs: [...state.blogs, ...payload.blogs],
        moreBlogs: payload.moreBlogs,
        // blogs: payload.blogs,
      }
    case LISTEN_TO_SELECTED_BLOG:
      return {
        ...state,
        selectedBlog: payload,
      }
    case CLEAR_BLOGS:
      return {
        ...state,
        blogs: [],
        moreBlogs: true
      }

    default:
      return state
  }
}
