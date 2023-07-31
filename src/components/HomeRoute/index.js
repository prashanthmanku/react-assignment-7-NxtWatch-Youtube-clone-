import {Component} from 'react'

import Cookies from 'js-cookie'
import {IoMdClose} from 'react-icons/io'
import {AiOutlineSearch} from 'react-icons/ai'

import Header from '../Header'
import MenuSideBar from '../MenuSideBar'
import HomeVideoItem from '../HomeVideoItem'
import FailureView from '../FailureView'
import LodingView from '../LodingView'

import NxtWatchContext from '../../context/NxtWatchContext'

import {
  HomeBgContainer,
  HomeMainContainer,
  HomeContentContainer,
  SidebarCard,

  // For Banner
  BannerContainer,
  BannerLogo,
  CloseButton,
  CloseIcon,
  BannerText,
  BannerButton,

  // for Search bar
  SearchBarWidthContainer,
  SearchBarContainer,
  Input,
  SearchButton,
  SearchIcon,

  // for videos list
  VideosContainter,
  VideosWidthContainer,

  // for No videos view
  NoVideosViewContainer,
  NoVideosImg,
  NoVideosHeading,
  NoVideosDescription,
  RetryButton,
  Loader,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'INPROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Home extends Component {
  state = {
    isBannerVisible: true,
    searchInput: '',
    userEnterdText: '',
    videosList: [],
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getVideosData()
  }

  retryFunctionCall = () => {
    this.setState({userEnterdText: '', searchInput: ''}, this.getVideosData)
  }

  getVideosData = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const {searchInput} = this.state
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/all?search=${searchInput}`
    const options = {
      method: 'GET',
      headers: {
        authorization: `Bearer ${jwtToken}`,
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
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onCloseBanner = () => {
    this.setState({isBannerVisible: false})
  }

  onChangeUserEnterdText = e => {
    this.setState({userEnterdText: e.target.value})
  }

  OnClickEnter = e => {
    const {userEnterdText} = this.state
    if (e.key === 'Enter') {
      this.setState({searchInput: userEnterdText}, this.getVideosData)
    }
  }

  onClickSeachBtn = () => {
    const {userEnterdText} = this.state
    this.setState({searchInput: userEnterdText}, this.getVideosData)
  }

  renderVideosList = () => {
    const {videosList} = this.state
    return (
      <VideosContainter>
        {videosList.map(each => (
          <HomeVideoItem videoDetails={each} key={each.id} />
        ))}
      </VideosContainter>
    )
  }

  renderNoVideosView = isDarkTheme => (
    <NoVideosViewContainer>
      <NoVideosImg
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
        alt="no videos"
      />
      <NoVideosHeading data-dark={isDarkTheme}>
        No Search results found
      </NoVideosHeading>
      <NoVideosDescription>
        Try different key words or remove search filter
      </NoVideosDescription>
      <RetryButton type="button" onClick={this.retryFunctionCall}>
        Retry
      </RetryButton>
    </NoVideosViewContainer>
  )

  renderSuccessView = isDarkTheme => {
    const {videosList} = this.state
    if (videosList.length === 0) {
      return this.renderNoVideosView(isDarkTheme)
    }
    return this.renderVideosList()
  }

  renderHomeResultsView = isDarkTheme => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return (
          <Loader>
            <LodingView />
          </Loader>
        )
      case apiStatusConstants.success:
        return this.renderSuccessView(isDarkTheme)
      case apiStatusConstants.failure:
        return <FailureView retryFunctionCall={this.retryFunctionCall} />
      default:
        return null
    }
  }

  render() {
    const {isBannerVisible, userEnterdText} = this.state

    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          return (
            <>
              <Header />
              <HomeBgContainer>
                <SidebarCard>
                  <MenuSideBar />
                </SidebarCard>
                <HomeMainContainer>
                  {isBannerVisible && (
                    <BannerContainer>
                      <CloseButton
                        type="button"
                        onClick={this.onCloseBanner}
                        data-testid="close"
                      >
                        <CloseIcon as={IoMdClose} />
                      </CloseButton>

                      <BannerLogo
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                        alt="nxt watch logo"
                      />

                      <BannerText>
                        Buy Nxt Watch Premium prepaid plans with UPI
                      </BannerText>
                      <BannerButton type="button">GET IT NOW</BannerButton>
                    </BannerContainer>
                  )}

                  <HomeContentContainer
                    data-dark={isDarkTheme}
                    data-testid="home"
                  >
                    <SearchBarWidthContainer>
                      <SearchBarContainer>
                        <Input
                          type="search"
                          placeholder="Search"
                          value={userEnterdText}
                          data-dark={isDarkTheme}
                          onChange={this.onChangeUserEnterdText}
                          onKeyDown={this.OnClickEnter}
                        />
                        <SearchButton
                          type="button"
                          data-dark={isDarkTheme}
                          onClick={this.onClickSeachBtn}
                          data-testid="searchButton"
                        >
                          <SearchIcon as={AiOutlineSearch} />
                        </SearchButton>
                      </SearchBarContainer>
                    </SearchBarWidthContainer>
                    <VideosWidthContainer>
                      {this.renderHomeResultsView(isDarkTheme)}
                    </VideosWidthContainer>
                  </HomeContentContainer>
                </HomeMainContainer>
              </HomeBgContainer>
            </>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}
export default Home
