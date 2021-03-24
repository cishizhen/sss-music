import request from './request'

export function recommendRequest ()  {
  return request({
    url: '/banner'
  })
}

export function recHotCover () {
  return request({
    url: '/personalized'
  })
}


export function recNewAlbumCover (limit) {
  return request({
    url: '/top/album',
    params: {
      limit
    }
  })
}