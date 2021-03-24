import React, { memo } from 'react'

import { TopListDiv, TopListContentDiv } from './style'
import HotItem from '../../../../../components/recommend-hot'
import TopListItem from '../../../../../components/top-list-item'

export default memo(function TopList() {
  return (
    <TopListDiv>
      <HotItem title='榜单'/>
      <TopListContentDiv>
        <TopListItem />
      </TopListContentDiv>
    </TopListDiv>
  )
})
