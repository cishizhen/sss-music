import { CHANGE_TOP_BANNER,CHANGE_HOT_DATA,CHANGE_ALBUM_DATA } from './constants'

const initialState = {
  banner: [],
  hotdata: [],
  newAlbum:[]
}

function reducer( state = initialState, action ) {
  switch(action.type) {
    case CHANGE_TOP_BANNER:
      return {...state, banner: action.banner}
    case CHANGE_HOT_DATA:
      return {...state, hotdata: action.hotdata}
    case CHANGE_ALBUM_DATA:
      return {...state, newAlbum: action.newAlbum}
    default:
      return state
  }
}

export default reducer