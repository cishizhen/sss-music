import React from 'react'
import { Redirect } from 'react-router-dom'

import Discover from '../pages/discover'
import Mine from '../pages/mine'
import Friends from '../pages/friends'
import Recommend from '../pages/discover/recommend/index.js'
import Toplist from '../pages/discover/toplist/index'
import Playlist from '../pages/discover/playlist/index'
import Djradio from '../pages/discover/djradio/index'
import Artist from '../pages/discover/artist/index'
import Album from '../pages/discover/album/index'

const routes = [
  {
    path: '/',
    exact: true,
    render: () => (<Redirect to = '/discover/'/>)
  },
  {
    path: '/discover',
    component: Discover,
    routes: [
      {
        path: '/discover',
        exact: true,
        render: () => (
          <Redirect to = '/discover/recommend'/>
        )
      },
      {
        path:'/discover/recommend',
        component: Recommend
      },
      {
        path: '/discover/toplist',
        component: Toplist
      },
      {
        path: '/discover/playlist',
        component: Playlist
      },
      {
        path: '/discover/djradio',
        component: Djradio
      },
      {
        path: '/discover/artist',
        component: Artist
      },
      {
        path: '/discover/album',
        component: Album
      }
    ]
  },
  {
    path: '/mine',
    component: Mine
  },
  { 
    path: '/friend',
    component: Friends

  }
]

export { routes }

