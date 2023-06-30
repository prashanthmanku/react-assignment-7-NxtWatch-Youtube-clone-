import {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'

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

  render() {
    const {isDarkTheme, likedVideos, disLikedVideos, savedVideos} = this.state
    return (
      <NxtWatchContext.Provider
        value={{
          isDarkTheme,
          likedVideos,
          savedVideos,
          disLikedVideos,
          changeTheme: this.onChangeTheme,
          addToLikedVideos: this.addToLikedVideos,
          addToDislikedVideos: this.addToDislikedVideos,
          addToSavedVideos: this.addToSavedVideos,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginRoute} />
          <ProtectedRoute exact path="/" component={HomeRoute} />
          <ProtectedRoute exact path="/trending" component={TrendingRoute} />
          <ProtectedRoute exact path="/gaming" component={GamingRoute} />
          <ProtectedRoute
            exact
            path="/saved-videos"
            component={SavedVideosRoute}
          />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoDetailesRoute}
          />
          <Route exact path="/not-found" component={NotFoundRoute} />
          <Redirect to="/not-found" />
        </Switch>
      </NxtWatchContext.Provider>
    )
  }
}

export default App
