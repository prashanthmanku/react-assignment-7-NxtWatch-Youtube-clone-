import {Component} from 'react'
import {Switch, Route, Redirect, useHistory} from 'react-router-dom'

import LoginRoute from './components/LoginRoute'
import HomeRoute from './components/HomeRoute'
import TrendingRoute from './components/TrendingRoute'
import GamingRoute from './components/GamingRoute'
import SavedVideosRoute from './components/SavedVideosRoute'

import NotFoundRoute from './components/NotFoundRoute'

import VideoDetailesRoute from './components/VideoDetailesRoute'
import ProtectedRoute from './components/ProtectedRoute'

import NxtWatchContext from './context/NxtWatchContext'

import './App.css'

class App extends Component {
  state = {
    isDarkTheme: false,
    likedVideos: [],
    disLikedVideos: [],
    savedVideos: [],
    routeKey: 0,
    isPopupOpened: false,
  }

  onChangeTheme = () => {
    this.setState(prevState => ({isDarkTheme: !prevState.isDarkTheme}))
  }

  addToLikedVideos = id => {
    const {likedVideos, disLikedVideos} = this.state
    if (disLikedVideos.includes(id)) {
      this.setState({
        disLikedVideos: likedVideos.filter(eachId => eachId !== id),
      })
    }
    if (likedVideos.includes(id)) {
      this.setState({
        likedVideos: likedVideos.filter(eachId => eachId !== id),
      })
    } else {
      this.setState({
        likedVideos: [...likedVideos, id],
      })
    }
  }

  addToDislikedVideos = id => {
    const {likedVideos, disLikedVideos} = this.state
    if (likedVideos.includes(id)) {
      this.setState({
        likedVideos: disLikedVideos.filter(eachId => eachId !== id),
      })
    }
    if (disLikedVideos.includes(id)) {
      this.setState({
        disLikedVideos: disLikedVideos.filter(eachId => eachId !== id),
      })
    } else {
      this.setState({disLikedVideos: [...disLikedVideos, id]})
    }
  }

  addToSavedVideos = videoDetails => {
    const {savedVideos} = this.state
    let savedVidesIds = []
    if (savedVideos.length !== 0) {
      savedVidesIds = savedVideos.map(each => each.id)
    }
    if (savedVidesIds.includes(videoDetails.id)) {
      this.setState({
        savedVideos: savedVideos.filter(each => each.id !== videoDetails.id),
      })
    } else {
      this.setState({
        savedVideos: [...savedVideos, videoDetails],
      })
    }
  }

  changeRouteKey = () => {
    this.setState(prevState => ({routeKey: prevState.routeKey + 1}))
  }

  changePopupMode = value => {
    this.setState({isPopupOpened: value})
  }

  render() {
    const {
      isDarkTheme,
      likedVideos,
      disLikedVideos,
      savedVideos,
      routeKey,
      isPopupOpened,
    } = this.state

    const ScrollToTop = () => {
      const history = useHistory()
    }

    return (
      <NxtWatchContext.Provider
        value={{
          isDarkTheme,
          likedVideos,
          savedVideos,
          disLikedVideos,
          routeKey,
          isPopupOpened,
          changeRouteKey: this.changeRouteKey,
          changeTheme: this.onChangeTheme,
          addToLikedVideos: this.addToLikedVideos,
          addToDislikedVideos: this.addToDislikedVideos,
          addToSavedVideos: this.addToSavedVideos,
          changePopupMode: this.changePopupMode,
        }}
      >
        <div
          className={isPopupOpened ? 'pointerEvents' : ''}
          // style={{pointerEvents: isPopupOpened ? 'none' : 'auto'}}
        >
          <Switch>
            <Route exact path="/login" component={LoginRoute} key={routeKey} />
            <ProtectedRoute
              exact
              path="/"
              component={HomeRoute}
              key={routeKey}
            />
            <ProtectedRoute
              exact
              path="/trending"
              component={TrendingRoute}
              key={routeKey}
            />
            <ProtectedRoute
              exact
              path="/gaming"
              component={GamingRoute}
              key={routeKey}
            />
            <ProtectedRoute
              exact
              path="/saved-videos"
              component={SavedVideosRoute}
              key={routeKey}
            />
            <ProtectedRoute
              exact
              path="/videos/:id"
              component={VideoDetailesRoute}
            />
            <ProtectedRoute exact path="/not-found" component={NotFoundRoute} />
            <Redirect to="/not-found" />
          </Switch>
        </div>
      </NxtWatchContext.Provider>
    )
  }
}

export default App
