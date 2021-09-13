import { fakeData } from '../../app/api/fakeData'
import { CREATE_BLOG, DELETE_BLOG, UPDATE_BLOG } from './blogConstants'

const initialState = {
  blogs: fakeData.blogs,
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

    default:
      return state
  }
}
