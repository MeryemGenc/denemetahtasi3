import {combineReducers} from 'redux'
import blogReducer from '../../features/blogs/blogReducer'


const rootReducer = combineReducers({
    blog : blogReducer
})

export default rootReducer


