import React, { memo } from 'react'

import { DivFooter } from './css/footer-css'
import { footerLinks, footerImages } from '../../common/local-data'

export default memo(function SSFooterHeader() {
  const leftList = footerLinks.map( (item) => {
    return <div  key = {item.title}><a href= {item.link} >{item.title}</a><span className= 'cutUp'>|</span></div>
  })
  const rightImg = footerImages.map( (item) => {
    return <a href={item.link} key = {item.link}><span className= 'rightImage' ></span><span className= 'rightFont'></span></a>
  })
  return (
    <div>
      <DivFooter>
        <div className= 'wrap-v1'>
          <div className= 'footer-left'>
            <div className= 'firstList'>
              {leftList}
            </div>
            <p>
              <span>网易公司版权所有©1997-2021  </span>
              <span> 杭州乐读科技有限公司运营：浙网文[2018]3506-263号</span>
            </p>
            <p>
              <span>违法和不良信息举报电话：0571-89853516</span>
              <span>举报邮箱：ncm5990@163.com</span>
            </p>
            <p>
              <span>粤B2-20090191-18  工业和信息化部备案管理系统网站</span>
              <span>浙公网安备 33010902002564号</span>

            </p>
          </div>
          <div className= 'footer-right'>
            {rightImg}
          </div>
        </div>
      </DivFooter>
    </div>
  )
})
