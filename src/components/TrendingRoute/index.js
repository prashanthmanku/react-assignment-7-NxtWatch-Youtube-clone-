import {Component} from 'react'
import {HiFire} from 'react-icons/hi'
import Cookies from 'js-cookie'

import HomeVideoItem from '../HomeVideoItem'
import Header from '../Header'
import MenuSideBar from '../MenuSideBar'
import FailureView from '../FailureView'
import LodingView from '../LodingView'

import NxtWatchContext from '../../context/NxtWatchContext'
import {
  SavedRouteBgCard,
  SidebarCard,
  SavedVideosBgCard,
  SavedVideosCard,
  SavedVideosHeadingCard,
  Icon,
  IconBackGroung,
  SavedHeading,
  VideosList,
  FalureWidthCard,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'INPROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class TrendingRoute extends Component {
  state = {videosList: [], apiStatus: apiStatusConstants.initial}

  componentDidMount() {
    this.getVideosData()
  }

  retryFunctionCall = () => {
    this.setState(this.getVideosData)
  }

  getVideosData = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/videos/trending'
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok === true) {
      const UpdatedData = data.videos.map(each => ({
        channelName: each.channel.name,
        channelProfileImageUrl: each.channel.profile_image_url,
        id: each.id,
        publishedAt: each.published_at,
        thumbnailUrl: each.thumbnail_url,
        title: each.title,
        viewCount: each.view_count,
      }))
      this.setState({
        videosList: UpdatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else this.setState({apiStatus: apiStatusConstants.failure})
  }

  renderVideosList = isDarkTheme => {
    const {videosList} = this.state
    return (
      <SavedVideosCard>
        <SavedVideosHeadingCard isDarkTheme={isDarkTheme}>
          <IconBackGroung isDarkTheme={isDarkTheme}>
            <Icon as={HiFire} />
          </IconBackGroung>
          <SavedHeading isDarkTheme={isDarkTheme}>Trending</SavedHeading>
        </SavedVideosHeadingCard>
        <VideosList>
          {videosList.map(each => (
            <HomeVideoItem videoDetails={each} key={each.id} />
          ))}
        </VideosList>
      </SavedVideosCard>
    )
  }

  renderLodingView = () => (
    <FalureWidthCard>
      <LodingView />
    </FalureWidthCard>
  )

  renderFalureView = () => (
    <FalureWidthCard>
      <FailureView retryFunctionCall={this.retryFunctionCall} />
    </FalureWidthCard>
  )

  renderTrendingRouteView = isDarkTheme => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return this.renderLodingView()
      case apiStatusConstants.success:
        return this.renderVideosList(isDarkTheme)
      case apiStatusConstants.failure:
        return this.renderFalureView()
      default:
        return null
    }
  }

  render() {
    return (
      <>
        <Header />
        <NxtWatchContext.Consumer>
          {value => {
            const {isDarkTheme} = value
            return (
              <SavedRouteBgCard>
                <SidebarCard>
                  <MenuSideBar />
                </SidebarCard>
                <SavedVideosBgCard
                  isDarkTheme={isDarkTheme}
                  data-testid="trending"
                >
                  {this.renderTrendingRouteView(isDarkTheme)}
                </SavedVideosBgCard>
              </SavedRouteBgCard>
            )
          }}
        </NxtWatchContext.Consumer>
      </>
    )
  }
}
export default TrendingRoute
