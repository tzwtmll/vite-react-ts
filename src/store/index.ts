import { createStore, combineReducers } from 'redux'
import menuReducer from './menu/reducer'
const reducer = combineReducers({
  menu: menuReducer
})
const store = createStore(reducer)
export default store
