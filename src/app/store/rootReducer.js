import { combineReducers } from 'redux'
import authReducer from '../../features/auth/authReducer'
import blogReducer from '../../features/blogs/blogReducer'
import asyncReducer from '../async/asyncReducer'
import modalReducer from '../common/modal/modalReducer'

const rootReducer = combineReducers({
  blog: blogReducer,
  modals: modalReducer,
  auth: authReducer,
  async: asyncReducer
})

export default rootReducer
