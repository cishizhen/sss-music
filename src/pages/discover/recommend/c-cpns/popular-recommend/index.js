import React, { memo, useEffect } from 'react'
import { useSelector, useDispatch, shallowEqual} from 'react-redux'
import { getRecHotDataAction } from '../../store/actionCreator'
import RecHotHeader from '../../../../../components/recommend-hot'
import  HotItem  from '../../../../../components/rec-hot-cover'
import {  HotItemsUl } from './style'

export default memo(function PopularRecWrapper() {

  const { hotdata } = useSelector( state => ({
    hotdata: state.recommend.hotdata
  }),shallowEqual)
  const dispatch = useDispatch()

  useEffect(() => {
   dispatch(getRecHotDataAction())
  }, [dispatch])

  return (
    <div>
        <RecHotHeader title='热门推荐'/>
        <HotItemsUl>
          {
            hotdata.slice(0,8).map( (item,index) => {
            return <HotItem info={item} key={index}/>
          })
          }
        </HotItemsUl>
    </div>
    
   
  )
})
