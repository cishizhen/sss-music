import React, { memo } from 'react'
import { HashRouter, NavLink } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import { dicoverMenu } from '../../common/local-data'
import { HeaderDiv } from './childcpns/css/headercss'

export default memo(function Discover(props) {
  const headerList = dicoverMenu.map( (item) => {
    return <NavLink to = {item.link} key = {item.title}>{item.title}</NavLink>
  } )
  console.log(props);
  return (
    <HashRouter>
    <HeaderDiv>
      <div className = 'wrap-v1'>
        <div className = 'wrap'>
            {headerList}
        </div>
      </div>
    </HeaderDiv>
      <div>
        {renderRoutes(props.route.routes)}
      </div>
    </HashRouter>
   
  )
})
