
import { CREATE_BLOG, DELETE_BLOG, FETCH_BLOGS, UPDATE_BLOG } from './blogConstants'

const initialState = {
  blogs: [],
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
        blogs: payload,
        // blogs: payload.blogs,
      }

    default:
      return state
  }
}
