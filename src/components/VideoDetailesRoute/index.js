import {Component} from 'react'
import ReactPlayer from 'react-player'
import Cookies from 'js-cookie'
import {BiLike, BiDislike} from 'react-icons/bi'
import {MdPlaylistAdd, MdPlaylistAddCheck} from 'react-icons/md'
import {formatDistanceToNow} from 'date-fns'

import Header from '../Header'
import MenuSideBar from '../MenuSideBar'
import NxtWatchContext from '../../context/NxtWatchContext'

import {
  VideoDetailsBgContainer,
  VideoDetailsCard,
  VideoDetailsWidthCard1,
  VideoDetailsWidthCard2,
  VideoCard,
  VideoPlayer,
  ContentContainer,
  Title,
  MoreContainer,
  ViewsContainer,
  ViewsText,
  ButtonText,
  IconsContainer,
  IconButton,
  Icon,
  ChannelCard,
  ChannelLogo,
  ChannelContentContainer,
  ChannelName,
  ChannelDescription,
} from './styledComponent'

class VideoDetailesRoute extends Component {
  state = {videoDetails: []}

  componentDidMount() {
    this.getVideoData()
  }

  getVideoData = async () => {
    console.log('ll')
    const {match} = this.props
    const {id} = match.params
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/${id}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch(url, options)
    const responsedata = await response.json()
    const data = responsedata.video_details
    if (response.ok === true) {
      const updatedData = {
        channelName: data.channel.name,
        channelProfileImageUrl: data.channel.profile_image_url,
        channelSubscriberCount: data.channel.subscriber_count,
        description: data.description,
        id: data.id,
        publishedAt: data.published_at,
        thumbnailUrl: data.thumbnail_url,
        title: data.title,
        videoUrl: data.video_url,
        viewCount: data.view_count,
      }
      console.log(updatedData)
      this.setState({videoDetails: updatedData})
    }
  }

  render() {
    const {videoDetails} = this.state
    const {
      channelName,
      channelProfileImageUrl,
      channelSubscriberCount,
      description,
      id,
      publishedAt,
      thumbnailUrl,
      title,
      videoUrl,
      viewCount,
    } = videoDetails
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {
            isDarkTheme,
            addToLikedVideos,
            addToDislikedVideos,
            addToSavedVideos,
            likedVideos,
            disLikedVideos,
            savedVideos,
          } = value

          const savedVideosIds = savedVideos.map(each => each.id)

          const onClickToAddLikedVideos = () => {
            addToLikedVideos(id)
          }

          const onClickToAddDisikedVideos = () => {
            addToDislikedVideos(id)
          }

          const onClickToAddSavededVideos = () => {
            addToSavedVideos(videoDetails)
          }

          return (
            <>
              <Header />
              <VideoDetailsBgContainer>
                <MenuSideBar />
                <VideoDetailsCard isDarkTheme={isDarkTheme}>
                  <VideoDetailsWidthCard1>
                    <VideoDetailsWidthCard2>
                      <VideoCard>
                        <VideoPlayer
                          as={ReactPlayer}
                          url={videoUrl}
                          width="100%"
                          height="100%"
                          playing="true"
                          controls
                        />
                      </VideoCard>
                      <ContentContainer>
                        <Title isDarkTheme={isDarkTheme}>{title}</Title>
                        <MoreContainer>
                          <ViewsContainer>
                            <ViewsText className="views">
                              {viewCount} views
                            </ViewsText>
                            <ViewsText>2 years ago</ViewsText>
                          </ViewsContainer>
                          <IconsContainer>
                            <IconButton
                              type="button"
                              onClick={onClickToAddLikedVideos}
                              done={likedVideos.includes(id)}
                            >
                              <Icon as={BiLike} />
                              <ButtonText>Like</ButtonText>
                            </IconButton>
                            <IconButton
                              type="text"
                              onClick={onClickToAddDisikedVideos}
                              done={disLikedVideos.includes(id)}
                            >
                              <Icon as={BiDislike} />
                              <ButtonText>Dislike</ButtonText>
                            </IconButton>
                            <IconButton
                              type="text"
                              onClick={onClickToAddSavededVideos}
                              done={savedVideosIds.includes(id)}
                            >
                              {savedVideosIds.includes(id) ? (
                                <Icon as={MdPlaylistAddCheck} />
                              ) : (
                                <Icon as={MdPlaylistAdd} />
                              )}

                              <ButtonText>
                                {savedVideosIds.includes(id) ? 'Saved' : 'save'}
                              </ButtonText>
                            </IconButton>
                          </IconsContainer>
                        </MoreContainer>
                        <ChannelCard>
                          <ChannelLogo src={channelProfileImageUrl} alt="url" />
                          <ChannelContentContainer>
                            <ChannelName isDarkTheme={isDarkTheme}>
                              {channelName}
                            </ChannelName>
                            <ButtonText className="subscribers">
                              {channelSubscriberCount} subscribers
                            </ButtonText>
                            <ChannelDescription
                              className="hide-on-mobile"
                              isDarkTheme={isDarkTheme}
                            >
                              {description}
                            </ChannelDescription>
                          </ChannelContentContainer>
                        </ChannelCard>
                        <ChannelDescription
                          className="hide-on-desktop"
                          isDarkTheme={isDarkTheme}
                        >
                          {description}
                        </ChannelDescription>
                      </ContentContainer>
                    </VideoDetailsWidthCard2>
                  </VideoDetailsWidthCard1>
                </VideoDetailsCard>
              </VideoDetailsBgContainer>
            </>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default VideoDetailesRoute
