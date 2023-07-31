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
        const {isDarkTheme} = value
        let time = formatDistanceToNow(new Date(publishedAt))
        time = time.split(' ')
        time = time.slice(1)
        time = time.join(' ')

        return (
          <ItemContainer value={path === '/'}>
            <VideoLinkContainer
              as={Link}
              to={`/videos/${id}`}
              value={path === '/'}
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
                  <Title data-dark={isDarkTheme}>{title}</Title>
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
