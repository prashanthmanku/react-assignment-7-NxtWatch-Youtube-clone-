import {Link} from 'react-router-dom'

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
  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        return (
          <ItemContainer>
            <VideoLinkContainer as={Link} to={`/videos/${id}`}>
              <ThumbnailImg src={thumbnailUrl} alt="thumbnail" />
              <VideoDetailsContainer>
                <ChannelLogo src={channelProfileImageUrl} alt="channel-logo" />
                <ContentContainer>
                  <Title isDarkTheme={isDarkTheme}>{title}</Title>
                  <MoreContainer>
                    <ChannelName>{channelName}</ChannelName>
                    <ViewsContainer>
                      <Views>{viewCount} views</Views>
                      <PublishedAt>today</PublishedAt>
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

export default HomeVideoItem
