import React, { memo } from 'react'
import {  NavLink } from 'react-router-dom'
// import { renderRoutes } from 'react-router-config'
import { Button } from 'antd'

// import { routes } from '../../routers'
import { headerLinks } from '../../common/local-data'
import { DivHeader } from './css/header-css'

export default memo(function SSAppHeader() {

  const list = headerLinks.map( (item, index ) => {
    if ( index < 3) {
      return <NavLink to={item.link} key= {item.title} >{item.title}</NavLink>
    } else {
      return <a href= {item.link} key= {item.title}>{item.title}</a>
    }
  })
  return (
    <div>
      {/* <HashRouter> */}
      <DivHeader>
        <div className= 'wrap-v1'>
          <div className= 'wrap-left'>
            <NavLink to="/" className= 'sprite_01 logo'>网易云音乐</NavLink>
            <ul className= 'wrap-ul'>
              <li >
                {list}
              </li>
            </ul>
          </div>
          <div className= 'wrap-right'>
            <input className= 'sprite_01' type="text" placeholder= '音乐/视频/电台/用户'/>
            <Button type="primary" shape="round" className= 'btn'>创作者中心</Button>
            <a href="/" className= 'Ahref'>登录</a>
          </div>
        </div>
        <div className= 'redBorder'></div>
      </DivHeader>
        {/* {renderRoutes(routes)} */}
      {/* </HashRouter> */}
    </div>
  )
})
