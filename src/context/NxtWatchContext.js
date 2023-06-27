import React from 'react'

const NxtWatchContext = React.createContext({
  isdarktheme: false,
  likedVideos: [],
  disLikedVideos: [],
  savedVideos: [],
  changeTheme: () => {},
  addToLikedVideos: () => {},
  addToDislikedVideos: () => {},
  addToSavedVideos: () => {},
})

export default NxtWatchContext
