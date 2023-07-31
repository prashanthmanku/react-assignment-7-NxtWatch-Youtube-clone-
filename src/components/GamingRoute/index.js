import {Component} from 'react'
import {SiYoutubegaming} from 'react-icons/si'
import Cookies from 'js-cookie'

import GamingVideoItem from '../GamingVideoItem'
import Header from '../Header'
import MenuSideBar from '../MenuSideBar'
import FailureView from '../FailureView'
import LodingView from '../LodingView'

import NxtWatchContext from '../../context/NxtWatchContext'
import {
  GameRouteBgCard,
  SidebarCard,
  GameVideosBgCard,
  GameVideosCard,
  GameVideosHeadingCard,
  Icon,
  IconBackGroung,
  GameHeading,
  VideosList,
  FalureWidthCard,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'INPROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class GamingRoute extends Component {
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
    const url = 'https://apis.ccbp.in/videos/gaming'
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
      <GameVideosCard>
        <GameVideosHeadingCard data-dark={isDarkTheme}>
          <IconBackGroung data-dark={isDarkTheme}>
            <Icon as={SiYoutubegaming} />
          </IconBackGroung>
          <GameHeading data-dark={isDarkTheme}>Gaming</GameHeading>
        </GameVideosHeadingCard>
        <VideosList>
          {videosList.map(each => (
            <GamingVideoItem videoDetails={each} key={each.id} />
          ))}
        </VideosList>
      </GameVideosCard>
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
              <GameRouteBgCard>
                <SidebarCard>
                  <MenuSideBar />
                </SidebarCard>
                <GameVideosBgCard data-dark={isDarkTheme} data-testid="gaming">
                  {this.renderTrendingRouteView(isDarkTheme)}
                </GameVideosBgCard>
              </GameRouteBgCard>
            )
          }}
        </NxtWatchContext.Consumer>
      </>
    )
  }
}
export default GamingRoute
