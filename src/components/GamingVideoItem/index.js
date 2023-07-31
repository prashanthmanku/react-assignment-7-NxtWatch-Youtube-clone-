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
        const {isDarkTheme} = value

        return (
          <ItemContainer>
            <VideoLinkContainer as={Link} to={`/videos/${id}`}>
              <ThumbnailImg src={thumbnailUrl} alt="video thumbnail" />

              <Title data-dark={isDarkTheme}>{title}</Title>

              <Views>{viewCount} Watching Worldwide</Views>
            </VideoLinkContainer>
          </ItemContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default withRouter(HomeVideoItem)
