import React, { memo } from 'react'
import { HotCoverDiv } from './style'

export default memo(function HotItem(props) {
  const { info } = props
  const picUrl = info.picUrl+ '?param=140y140'
  const name = info.name
  return (
    <HotCoverDiv>
      <div className='content'>
      <img src={picUrl} alt='name'/>
      <a href="/#" className='mask sprite_covor' title={name}>  </a>
      </div>
      <p className='dec'>
        <a href="/#">
        {name}
        </a>
      </p>
    </HotCoverDiv>
  )
})
