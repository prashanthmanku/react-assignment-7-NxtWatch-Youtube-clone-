import styled from 'styled-components'

export const VideoDetailsBgContainer = styled.div`
  margin-top: 64px;
  display: flex;
`
export const SidebarCard = styled.div`
  @media screen and (max-width: 767px) {
    display: none;
  }
`

export const VideoDetailsCard = styled.div`
  min-height: 90vh;
  width: 100%;
  padding: 20px 0px 60px 0px;

  @media screen and (min-width: 768px) {
    margin-left: 250px;
  }
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#f9f9f9')};
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f ' : '#f9f9f9')};
`

export const VideoDetailsWidthCard1 = styled.div`
  max-width: 1000px;
`

export const VideoDetailsWidthCard2 = styled.div`
  @media screen and (min-width: 768px) {
    width: 90%;
    margin: auto;
  }
`

export const VideoCard = styled.div`
  position: relative;
  aspect-ratio: 16/9;
  max-width: 1000px;

  @media screen and (min-width: 468px) {
    // height: 40vh;
  }
  @media screen and (min-width: 1300px) {
  }
`

export const VideoPlayer = styled.p``

export const ContentContainer = styled.div`
  width: 90%;

  margin: auto;
  @media screen and (min-width: 768px) {
    width: 100%;
  }
`

export const Title = styled.p`
  //   color: #1e293b;
  //   color: #ebebeb;
  font-size: 14px;
  color: ${props => (props.isDarkTheme ? '#ebebeb' : '#1e293b')};
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }

  line-height: 26px;

  font-weight: ${props => (props.isDarkTheme ? 400 : 500)};
`

export const MoreContainer = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

export const ViewsContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 0px;
  list-style-type: none;
  color: #64748b;
  margin-bottom: 5px;
  margin-top: 25px;
`

export const ViewsText = styled.li`
  list-style-type: disc;
  margin-bottom: 15px;
  font-size: 14px;
  &.views {
    list-style-type: none;
    margin-right: 30px;
  }
`

export const IconsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`

export const IconButton = styled.button`
  display: flex;
  align-items: center;
  padding: 0px;
  background-color: transparent;
  outline: none;
  border: none;
  margin-right: 25px;
  cursor: pointer;

  margin-bottom: 15px;
  @media screen and (min-width: 768px) {
    margin-bottom: 0px;
  }

  color: ${props => (props.done === true ? '#2563eb' : '#64748b')};
`

export const Icon = styled.div`
  //   color: #64748b;
  height: 21px;
  width: 21px;
  margin-right: 5px;
`

export const ButtonText = styled.p`
  margin: 0px;
  list-style-type: disc;

  font-size: 14px;
  font-weight: 500;
  &.subscribers {
    color: #64748b;
  }
`

// Channel

export const ChannelCard = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: 20px;
  padding-top: 40px;
  border-top: 1px solid #d7dfe9;
`

export const ChannelLogo = styled.img`
  width: 40px;
  margin-right: 15px;
`

export const ChannelContentContainer = styled.div``

export const ChannelName = styled.p`
  font-size: 14px;
  margin-top: 0px;

  color: ${props => (props.isDarkTheme ? '#ebebeb' : '#1e293b')};
  font-size: 14px;
  line-height: 21px;

  font-weight: ${props => (props.isDarkTheme ? 400 : 500)};
`

export const ChannelDescription = styled.p`
  font-size: 14px;

  color: ${props => (props.isDarkTheme ? '#ebebeb' : '#1e293b')};
  font-size: 15px;
  line-height: 23px;

  font-weight: 400;
  &.hide-on-mobile {
    display: none;
  }

  @media screen and (min-width: 768px) {
    &.hide-on-desktop {
      display: none;
    }
    &.hide-on-mobile {
      display: flex;
    }
  }
`

export const FalureWidthCard = styled.div`
  width: 100%;
  min-height: 70vh;
  max-width: 1000px;
  display: flex;
  justify-content: center;
  align-items: center;
`
