import {Link, withRouter} from 'react-router-dom'
import {formatDistanceToNow} from 'date-fns'

import NxtWatchContext from '../../context/NxtWatchContext'

import {
  ItemContainer,
  VideoLinkContainer,
  ThumbnailImg,
  VideoDetailsContainer,
  ChannelLogo,
  ContentContainer,
  Title,
  MoreContainer,
  ChannelName,
  ViewsContainer,
  Views,
  PublishedAt,
} from './styledComponent'

const HomeVideoItem = props => {
  const {videoDetails} = props
  const {
    channelName,
    channelProfileImageUrl,
    id,
    publishedAt,
    thumbnailUrl,
    title,
    viewCount,
  } = videoDetails
  const {match} = props
  const {path} = match

  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkTheme, isPopupOpened} = value
        let time = formatDistanceToNow(new Date(publishedAt))
        time = time.split(' ')
        time = time.slice(1)
        time = time.join(' ')

        const onTouchStart = e => {
          console.log(isPopupOpened)

          if (isPopupOpened) {
            e.preventDefault()
          }
        }

        return (
          <ItemContainer value={path === '/'}>
            <VideoLinkContainer
              as={Link}
              to={isPopupOpened ? null : `/videos/${id}`}
              value={path === '/'}
              //   style={{touchAction: 'none'}}
              onTouchStart={onTouchStart}
            >
              <ThumbnailImg
                src={thumbnailUrl}
                alt="video thumbnail"
                value={path === '/'}
              />
              <VideoDetailsContainer value={path === '/'}>
                <ChannelLogo
                  src={channelProfileImageUrl}
                  alt="channel logo"
                  value={path === '/'}
                />
                <ContentContainer>
                  <Title isDarkTheme={isDarkTheme}>{title}</Title>
                  <MoreContainer>
                    <ChannelName>{channelName}</ChannelName>
                    <ViewsContainer>
                      <Views>{viewCount} views</Views>
                      <PublishedAt>{time} ago</PublishedAt>
                    </ViewsContainer>
                  </MoreContainer>
                </ContentContainer>
              </VideoDetailsContainer>
            </VideoLinkContainer>
          </ItemContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default withRouter(HomeVideoItem)
