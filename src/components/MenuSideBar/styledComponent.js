import styled from 'styled-components'

export const SideBarContainer = styled.div`
  height: 90vh;
  overflow-y: auto;
  width: 250px;
  margin-top: 64px;
  @media screen and (min-width: 767px) {
    position: fixed;
    top: 0;
    left: 0;
  }

  padding-bottom: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${props => (props['data-dark'] ? '#212121' : '#ffffff')};
  @media screen and (max-width: 767px) {
    margin-top: 0vh;
    // height: 80vh;
    overflow-y: auto;
    width: 90vw;
  }
`

export const ContactUsContainer = styled.div`
  padding-left: 20px;
  padding-bottom: 20px;
  color: ${props => (props['data-dark'] ? '#ebebeb' : '#1e293b')};
`

export const IconsContainer = styled.div`
  display: flex;
  align-items: center;
`

export const Heading = styled.p`
  font-size: 17px;
  font-weight: bold;

  margin-bottom: 30px;
`

export const SocialMediaButton = styled.a`
  padding: 0px;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  margin-right: 15px;
  height: 46px;
  width: 46px;
  border-radius: 23px;
  //   border: 1px solid red;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => {
    if (props['data-socialbtnctive'] === true) {
      return props['data-dark'] ? ' #383838' : '#f1f5f9'
    }
    return null
  }};
`

export const Icon = styled.img`
  width: 30px;
  height: 30px;

  color: ${props => (props['data-dark'] ? '#ebebeb' : 'black')};
  &.insta {
    color: #e4405f;
  }
`

export const Description = styled.p`
  font-size: 15px;
  line-height: 28px;
  font-weight: 600;

  width: 200px;
`
