import {Component} from 'react'
import {MdPlaylistAddCheck} from 'react-icons/md'

import HomeVideoItem from '../HomeVideoItem'
import Header from '../Header'
import MenuSideBar from '../MenuSideBar'

import NxtWatchContext from '../../context/NxtWatchContext'
import {
  SavedRouteBgCard,
  SavedVideosBgCard,
  SavedVideosCard,
  SavedVideosHeadingCard,
  IconBackGroung,
  Icon,
  SavedHeading,
  VideosList,
  NosavedViewCard,
  NoSavedImg,
  NoSavedHeading,
  NoSavedDescription,
} from './StyledComponents'

class SavedVideosRoute extends Component {
  renderVideosList = (isDarkTheme, savedVideos) => (
    <SavedVideosCard>
      <SavedVideosHeadingCard isDarkTheme={isDarkTheme}>
        <IconBackGroung isDarkTheme={isDarkTheme}>
          <Icon as={MdPlaylistAddCheck} />
        </IconBackGroung>
        <SavedHeading isDarkTheme={isDarkTheme}>Saved Videos</SavedHeading>
      </SavedVideosHeadingCard>
      <VideosList>
        {savedVideos.map(each => (
          <HomeVideoItem videoDetails={each} key={each.id} />
        ))}
      </VideosList>
    </SavedVideosCard>
  )

  renderNoSavedView = isDarkTheme => (
    <NosavedViewCard>
      <NoSavedImg
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
        alt="no saved videos"
      />
      <NoSavedHeading isDarkTheme={isDarkTheme}>
        No saved videos found
      </NoSavedHeading>
      <NoSavedDescription isDarkTheme={isDarkTheme}>
        You can save your videos while watching them
      </NoSavedDescription>
    </NosavedViewCard>
  )

  renderSavedRouteView = (isDarkTheme, savedVideos) => {
    if (savedVideos.length === 0) {
      return this.renderNoSavedView(isDarkTheme)
    }
    return this.renderVideosList(isDarkTheme, savedVideos)
  }

  render() {
    return (
      <>
        <Header />
        <NxtWatchContext.Consumer>
          {value => {
            const {isDarkTheme, savedVideos} = value
            return (
              <SavedRouteBgCard>
                <MenuSideBar />
                <SavedVideosBgCard isDarkTheme={isDarkTheme}>
                  {this.renderSavedRouteView(isDarkTheme, savedVideos)}
                </SavedVideosBgCard>
              </SavedRouteBgCard>
            )
          }}
        </NxtWatchContext.Consumer>
      </>
    )
  }
}
export default SavedVideosRoute
