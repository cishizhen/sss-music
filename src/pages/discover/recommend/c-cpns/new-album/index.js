import React, { memo,useState, useRef, useEffect } from 'react'
import { useSelector, shallowEqual, useDispatch } from 'react-redux'

import { Carousel } from 'antd';

import { DiskDiv } from './style'
import RecHotHeader from '../../../../../components/recommend-hot'
import NewAlbumCover from '../../../../../components/new-album-cover'
import { getRecNewAlbumAction } from '../../store/actionCreator'

export default memo(function NewAlbum() {

  const [pages]  = useState([0,1])
  const { newAlbum } =useSelector( state => ({
    newAlbum: state.recommend.newAlbum
  }),shallowEqual)
  const dispatch = useDispatch()
  
  useEffect(() => {
   dispatch(getRecNewAlbumAction())
  }, [dispatch])
  const getDisk = useRef()

  console.log(newAlbum.length);
  return (
    <div>
      <RecHotHeader title='新碟上架' />
      <DiskDiv>
        <div className='carousel'>
          <Carousel ref={getDisk} dots={false}>
             {
               pages.map( (item,index) => {
                 return (<ul className='Albums' key={item}>{
                  newAlbum.slice(item*5,(item+1)*5).map((iten) => {
                      return <NewAlbumCover info={iten}/>
                    })
                 } 
                 </ul>)
               })
             } 
          </Carousel>
        </div>
        <button className='pre sprite_02'  onClick= {e => getDisk.current.prev()}> </button>
        <button className='next sprite_02' onClick= {e => getDisk.current.next()}> </button>
      </DiskDiv>
    </div>
  )
})
