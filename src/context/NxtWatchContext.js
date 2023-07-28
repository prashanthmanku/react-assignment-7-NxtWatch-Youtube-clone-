import React from 'react'

const NxtWatchContext = React.createContext({
  isdarktheme: false,
  likedVideos: [],
  disLikedVideos: [],
  savedVideos: [],
  routeKey: 0,
  isPopupOpened: false,
  changeRouteKey: () => {},
  changeTheme: () => {},
  addToLikedVideos: () => {},
  addToDislikedVideos: () => {},
  addToSavedVideos: () => {},
  changePopupMode: () => {},
})

export default NxtWatchContext
