import styled from 'styled-components'

export const HomeBgContainer = styled.div`
  display: flex;
  width: 100%;
  margin-top: 64px;
`

export const SidebarCard = styled.div`
  @media screen and (max-width: 767px) {
    display: none;
  }
`

export const HomeMainContainer = styled.div`
  width: 100%;
  @media screen and (min-width: 768px) {
    margin-left: 250px;
  }
`

export const HomeContentContainer = styled.div`
  background-color: ${props =>
    props['data-dark'] ? '#181818' : ' #f1f5f9'}; // f4f4f4 f9f9f9
  min-height: 90vh;
  padding: 20px 0px;
`

// For banner

export const BannerContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;

  padding: 30px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const BannerLogo = styled.img`
  width: 120px;
  margin-top: 0px;
`

export const CloseButton = styled.button`
  align-self: flex-end;
  background-color: transparent;
  background-color: ${props => (props.value ? '#f1f5f9' : 'transparent')};
  padding: ${props => (props.value ? '5px' : '0px')};
  border: none;
  outline: none;
  cursor: pointer;
  margin-bottom: 0px;
`

export const CloseIcon = styled.img`
  width: 20px;
  height: 20px;

  color: #475569;
`

export const BannerText = styled.p`
  font-size: 15px;
  width: 210px;
  line-height: 23px;
  margin: 20px 0px;
  color: #1e293b;
  font-weight: 500;
  @media screen and (min-width: 576px) {
    width: 300px;
  }
`

export const BannerButton = styled.button`
  background-color: transparent;
  color: #1e293b;
  border: 1px solid #1e293b;
  padding: 7px 14px;
  font-size: 14px;
  font-weight: 500;
  border-radius: 4px;
`

// for Seach bar

export const SearchBarWidthContainer = styled.div`
  width: 90%;

  margin: auto;
`

export const SearchBarContainer = styled.div`
  width: 100%;
  max-width: 400px;
  border: 1px solid red;
  border: 1px solid #909090;
  display: flex;
  height: 35px;
  border-radius: 4px;
`

export const Input = styled.input`
  width: 80%;
  background-color: transparent;
  //   outline: none;
  border: none;
  border-right: 1px solid #909090;
  padding: 8px 16px;

  color: ${props => (props['data-dark'] ? '#ebebeb' : '#0f0f0f')};
  font-size: 16px;
  &:focus {
    outline-color: blue;
  }
`

export const SearchButton = styled.button`
  width: 20%;
  border: none;

  background-color: ${props => (props.isdarktheme ? '#383838' : '#f1f1f1')};

  border-radius: 0px 4px 4px 0px;
`

export const SearchIcon = styled.p`
  color: #909090;
  width: 18px;
  height: 18px;
`

// for videos list, no videos, failure view

export const VideosWidthContainer = styled.div`
  display: flex;
  justify-content: center;
`
// video items list
export const VideosContainter = styled.ul`
  padding: 0px;
  list-style-type: none;

  @media screen and (min-width: 576px) {
    width: 90%;
    display: flex;
    flex-wrap: wrap;
    // justify-content: center;
    // flex-grow: 1;
  }
`

// no Videos view
export const NoVideosViewContainer = styled.div`
  text-align: center;
  margin-top: 20px;
  padding: 20px;
`

export const NoVideosImg = styled.img`
  width: 60%;
  max-width: 400px;
`

export const NoVideosHeading = styled.h1`
  font-size: 18px;
  font-weight: 500;

  color: ${props => (props['data-dark'] ? '#ebebeb' : '#1e293b')};
`

export const NoVideosDescription = styled.p`
  font-size: 15px;
  color: #64748b;
`

export const RetryButton = styled.button`
  padding: 7px 23px;
  border: none;
  border-radius: 4px;
  outline: none;
  cursor: pointer;
  background-color: #4f46e5;
  color: #ffffff;
  font-size: 15px;
  font-weight: 500;
`

export const Loader = styled.div`
  height: 30vh;
  display: flex;
  align-items: center;
`
