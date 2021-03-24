import React, { memo } from 'react'
import {
  TopListMainDiv,
  TopListTopDiv,
  TopListContentDiv
} from './style'
export default memo(function TopListItem() {
  return (
    <TopListMainDiv>
      <TopListTopDiv>
        <div  className= 'pic'>
          <span className= 'topImg'></span>
          <span className='msk'></span>
        </div>
        <div className= 'tit'>
          <h3 className= 'word'>飙升榜</h3>
          <div className= 'btn '>
            <span className= 'play sprite_02' ></span>
            <span className= 'collect sprite_02'></span>
          </div>
        </div>
      </TopListTopDiv>
      <TopListContentDiv>
        <ol>
          <li className='song-content'>
            <span className='song-count'></span>
            <span className='song-title'></span>
          </li>
          <li className='song-content'>
            <span className='song-count'></span>
            <span className='song-title'></span>
          </li>
          <li className='song-content'>
            <span className='song-count'></span>
            <span className='song-title'></span>
          </li>
          <li className='song-content'>
            <span className='song-count'></span>
            <span className='song-title'></span>
          </li>
        </ol>
      </TopListContentDiv>
    </TopListMainDiv>
  )
})
