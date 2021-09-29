import { combineReducers } from 'redux'
import authReducer from '../../features/auth/authReducer'
import blogReducer from '../../features/blogs/blogReducer'
import profileReducer from '../../features/profiles/profileReducer'
import asyncReducer from '../async/asyncReducer'
import modalReducer from '../common/modal/modalReducer'

const rootReducer = combineReducers({
  blog: blogReducer,
  modals: modalReducer,
  auth: authReducer,
  async: asyncReducer,
  profile: profileReducer
})

export default rootReducer
