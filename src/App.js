import React, { memo } from 'react'
import { HashRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import { routes } from './routers/index'
import { Provider } from 'react-redux'
import { store } from './store/index'


import SSAppHeader from './components/app-header/SSAppHeader'
import SSFooterHeader from './components/app-header/SSFooterHeader'
// import Discover from './pages/discover/index'


export default memo(function App() {
  return (
    <Provider store = {store}>
      <HashRouter>
        <div>
          <SSAppHeader/>
          {renderRoutes(routes)}
          <SSFooterHeader/>
        </div>
      </HashRouter>
    </Provider>
    
  )
})

