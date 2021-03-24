import React, { memo, useState,useEffect, useRef ,useCallback} from 'react'
import { useDispatch,useSelector,shallowEqual } from 'react-redux'


import { Carousel } from 'antd';
import { BanDiv, DownloadCover, BanDivWrapper } from './style'
import { getTopBannerAction } from '../../store/actionCreator'



export default memo(function Carouselrec(props) {
  const [imageUrlIndex,setImageUrlIndex ] = useState(0)
  const getBtn = useRef()
  const changeBannerIndex = useCallback(
    (from, to) => {
        setImageUrlIndex(to)
    },
    [],
  )
  
  
  const dispatch = useDispatch();
  const { banner } = useSelector( state => ({
    banner: state.recommend.banner
  }), shallowEqual )

  useEffect( () => {
    dispatch(getTopBannerAction())
  },[dispatch])

  const bImg = banner[imageUrlIndex]&&banner[imageUrlIndex].imageUrl + '?imageView&blur=40x20'
  
  return (
    <BanDivWrapper bImg={bImg}>
      <BanDiv className = 'wrap-v2'>
      <Carousel effect="fade"
                autoplay={true}
                className='carousel'
                ref={ getBtn }
                beforeChange={changeBannerIndex}
                dots={{className:'dots'}}>
        {banner.map( (item, index) => {
          return (
            <a href= '/' key={ item.targetId}>
              <img src={item.imageUrl} alt="tupian"/>
            </a>
          )
        })}
      </Carousel>
      <DownloadCover className='download'/>
      <button className='btn1 banner_sprite'  onClick={ e => getBtn.current.prev()}></button>
      <button className='btn2 banner_sprite' onClick={ e => getBtn.current.next()}></button>
    </BanDiv>
  </BanDivWrapper>
  )
})
