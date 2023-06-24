import React from 'react'

const NxtWatchContext = React.createContext({
  isdarktheme: false,
  changeTheme: () => {},
})

export default NxtWatchContext
