import { recommendRequest, recHotCover, recNewAlbumCover } from '../../../../network/recommend'
import { CHANGE_TOP_BANNER,
         CHANGE_HOT_DATA,
         CHANGE_ALBUM_DATA} 
         from './constants'

const getTopBanner = res => ({
  type: CHANGE_TOP_BANNER,
  banner: res.data.banners
})

const getRecHotData = res => ({
  type: CHANGE_HOT_DATA,
  hotdata: res.data.result
})

const getNewAlbum = res => ({
  type: CHANGE_ALBUM_DATA,
  newAlbum: res.data.albums
})


const getTopBannerAction = () => {
  return dispatch => {
    recommendRequest().then(res => {
      dispatch(getTopBanner(res))
      })
  }
}

const  getRecHotDataAction = () => {
  return dispatch => {
    recHotCover().then(res => {
      dispatch(getRecHotData(res))
      })
  }
}

const  getRecNewAlbumAction = () => {
  return dispatch => {
    recNewAlbumCover(10).then(res => {
      dispatch(getNewAlbum(res))
      })
  }
}

export { getTopBannerAction, 
         getRecHotDataAction,
         getRecNewAlbumAction
       }