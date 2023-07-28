import {Link, withRouter} from 'react-router-dom'

import NxtWatchContext from '../../context/NxtWatchContext'

import {
  ItemContainer,
  VideoLinkContainer,
  ThumbnailImg,
  Title,
  Views,
} from './styledComponent'

const HomeVideoItem = props => {
  const {videoDetails} = props
  const {
    id,

    thumbnailUrl,
    title,
    viewCount,
  } = videoDetails

  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkTheme, isPopupOpened} = value
        const pop = event => {
          if (isPopupOpened) {
            event.preventDefault()
          }
        }

        return (
          <ItemContainer onClick={pop}>
            <VideoLinkContainer
              as={Link}
              to={`/videos/${id}`}
              style={{
                pointerEvents: isPopupOpened ? 'none' : 'auto',
              }}
              onClick={pop}
            >
              <ThumbnailImg src={thumbnailUrl} alt="video thumbnail" />

              <Title isDarkTheme={isDarkTheme}>{title}</Title>

              <Views>{viewCount} Watching Worldwide</Views>
            </VideoLinkContainer>
          </ItemContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default withRouter(HomeVideoItem)
