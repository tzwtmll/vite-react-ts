import { combineReducers, createStore } from 'redux'

import menuReducer from './menu/reducer'
import styleConfigReducer from './style.config/reducer'
const reducer = combineReducers({
  menu: menuReducer,
  style: styleConfigReducer
})
const store = createStore(reducer)
export default store
