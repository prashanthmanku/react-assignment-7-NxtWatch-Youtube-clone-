import {AiOutlineGithub, AiOutlineInstagram} from 'react-icons/ai'
import MenuContent from '../MenuContent'
import NxtWatchContext from '../../context/NxtWatchContext'

import {
  SideBarContainer,
  ContactUsContainer,
  Heading,
  IconsContainer,
  SocialMediaButton,
  Icon,
  Description,
} from './styledComponent'

const MenuSideBar = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      return (
        <SideBarContainer isDarkTheme={isDarkTheme}>
          <MenuContent />
          <ContactUsContainer isDarkTheme={isDarkTheme}>
            <Heading>CONTACT US</Heading>
            <IconsContainer>
              <SocialMediaButton
                href="https://www.linkedin.com/in/prashanth-manku97/"
                target="_blank"
                rel="noreferrer"
              >
                <Icon
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                  alt="linked in logo"
                />
              </SocialMediaButton>

              <SocialMediaButton
                href="https://github.com/prashanthmanku"
                target="_blank"
                rel="noreferrer"
              >
                <Icon as={AiOutlineGithub} isDarkTheme={isDarkTheme} />
              </SocialMediaButton>

              <SocialMediaButton
                href="https://www.instagram.com/prashanth0823/"
                target="_blank"
                rel="noreferrer"
              >
                <Icon as={AiOutlineInstagram} className="insta" />
              </SocialMediaButton>
            </IconsContainer>
            <Description>
              Enjoy! Now to see your channels and recommendations!
            </Description>
          </ContactUsContainer>
        </SideBarContainer>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default MenuSideBar
