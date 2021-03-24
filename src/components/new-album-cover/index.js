import React, { memo } from 'react'
import { NewAlbumLi } from './style'
export default memo(function NewAlbumCover(props) {

  const { info } = props
  const albumImg = info.picUrl + '?param=100y100'
  console.log(info);
  return (
    <NewAlbumLi>
      <div className='album-cover'>
        <img src={albumImg} alt={info.name}/>
        <a href="/###" className='album-mask sprite_covor' title={info.name}> </a>
      </div>
      <p className='album-title'>
        <span>{info.name}</span>
      </p>
      <p className='album-artist'>
        <span>{info.artist.name}</span>
      </p>
    </NewAlbumLi>
  )
})
