import { combineReducers } from 'redux'
import authReducer from '../../features/auth/authReducer'
import blogReducer from '../../features/blogs/blogReducer'
import modalReducer from '../common/modal/modalReducer'

const rootReducer = combineReducers({
  blog: blogReducer,
  modals: modalReducer,
  auth: authReducer,
})

export default rootReducer
