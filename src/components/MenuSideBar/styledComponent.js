import styled from 'styled-components'

export const SideBarContainer = styled.div`
  height: 90vh;
  width: 250px;
  position: fixed;
  top: 0;
  left: 0;
  margin-top: 10vh;
  padding-bottom: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${props => (props.isDarkTheme ? '#212121' : '#ffffff')};
  @media screen and (max-width: 767px) {
    // display: none;
  }
`

export const ContactUsContainer = styled.div`
  padding-left: 20px;
  color: ${props => (props.isDarkTheme ? '#ebebeb' : '#1e293b')};
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
  margin-right: 20px;
`

export const Icon = styled.img`
  width: 30px;
  height: 30px;

  color: ${props => (props.isDarkTheme ? '#ebebeb' : 'black')};
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
