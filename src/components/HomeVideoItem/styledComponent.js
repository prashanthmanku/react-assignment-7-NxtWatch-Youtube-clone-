import styled from 'styled-components'

export const ItemContainer = styled.li`
  margin: 20px 0px;
  width: 100%;

  flex-grow: 1;
  @media screen and (min-width: 576px) {
    // width: 250px;
    // margin: 20px 15px 20px 0px;
    width: ${props => (props.value ? '250px' : '100%')};
    max-width: ${props => (props.value ? '400px' : '800px')};
    margin: ${props =>
      props.value ? '20px 15px 20px 0px' : '10px 0px 0px 0px'};
  }
`

export const VideoLinkContainer = styled.div`
  cursor: pointer;
  text-decoration: none;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  @media screen and (min-width: 576px) {
    flex-direction: ${props => (props.value ? 'column' : 'row')};
  }
`

export const ThumbnailImg = styled.img`
  width: 100%;

  margin-bottom: 10px;
  @media screen and (min-width: 576px) {
    border-radius: 10px;
    width: ${props => (props.value ? '100%' : '50%')};
    margin-right: 20px;
    max-height: 400px;
  }
`

export const VideoDetailsContainer = styled.div`
  @media screen and (max-width: 575px) {
    width: 90%;
    margin: auto;
  }
  @media screen and (min-width: 576px) {
    width: ${props => (props.value ? '100%' : '50%')};
  }

  display: flex;
  align-items: flex-start;
`

export const ChannelLogo = styled.img`
  width: 35px;
  margin-right: 10px;
  @media screen and (min-width: 575px) {
    display: ${props => (props.value ? 'flex' : 'none')};
  }
`

export const ContentContainer = styled.div``

export const Title = styled.p`
  font-size: 14px;
  margin: 0px;
  //   color: #1e293b;
  //   color: #ebebeb;
  color: ${props => (props['data-dark'] ? '#ebebeb' : '#1e293b')};
  font-size: 15px;
  line-height: 21px;
  font-weight: 400;
  font-weight: ${props => (props['data-dark'] ? 400 : 500)};
`

export const MoreContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  //   color: #475569;
  color: #64748b;
  @media screen and (min-width: 567px) {
    flex-direction: column;
    align-items: flex-start;
  }
`

export const ChannelName = styled.p`
  margin-right: 12px;
  font-size: 13px;

  @media screen and (min-width: 567px) {
    margin-bottom: 7px;
  }
`

export const ViewsContainer = styled.ul`
  padding: 0px;
  display: flex;
  flex-wrap: wrap;
`

export const Views = styled.li`
  margin-right: 30px;
  font-size: 13px;
  list-style-type: none;
  @media screen and (max-width: 575px) {
    list-style-type: disc;
    margin-left: 9px;
  }
`

export const PublishedAt = styled.li`
  font-size: 13px;
  list-style-type: disc;
`
