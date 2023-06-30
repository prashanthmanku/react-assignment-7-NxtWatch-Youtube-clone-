import React from 'react'

const NxtWatchContext = React.createContext({
  isdarktheme: false,
  likedVideos: [],
  disLikedVideos: [],
  savedVideos: [],
  routeKey: 0,
  changeRouteKey: () => {},
  changeTheme: () => {},
  addToLikedVideos: () => {},
  addToDislikedVideos: () => {},
  addToSavedVideos: () => {},
})

export default NxtWatchContext
