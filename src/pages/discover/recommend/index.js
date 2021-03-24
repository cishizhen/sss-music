import React, { memo } from 'react'

import Carouselrec from './c-cpns/carousel'
import PopularRecWrapper from '../recommend/c-cpns/popular-recommend'
import NewAlbum from '../recommend/c-cpns/new-album'
import TopList from '../recommend/c-cpns/top-list/index'
import { RecContentLeftDiv } from './style'



function Recommend(props) {
  // const { getBanner, banner } = props
  // useEffect( () => {
  //   getBanner()
  // }, [getBanner])

  return (
      <div>
        <Carouselrec />
        <div className='wrap-v2'>
          <RecContentLeftDiv>
            <PopularRecWrapper />
            <NewAlbum />
            <TopList/>
          </RecContentLeftDiv>
        </div>
      </div>
   
  )
}

// const mapStateToProps = state => {
//   return {
//     banner: state.recommend.banner
//   }
// }

// const mapDispatchToProps = dispatch => ({
//     getBanner: () => {
//       dispatch(getTopBannerAction())
//   }
// })

export default /* connect(mapStateToProps, mapDispatchToProps) */memo(Recommend)