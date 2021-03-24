import { combineReducers } from 'redux'

import { reducer as recommendReducer } from '../pages/discover/recommend/store/index'

const reducer = combineReducers({
  recommend: recommendReducer
})


export { reducer }
