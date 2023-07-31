import {useState} from 'react'
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

const MenuSideBar = () => {
  const [linkdinActive, setlinkdinActive] = useState(false)
  const [instaIsActive, setinstaActive] = useState(false)
  const [gitIsActive, setgitActive] = useState(false)

  const LinkdinNotActive = () => {
    setlinkdinActive(false)
  }

  const LinkdinActive = () => {
    setlinkdinActive(true)
  }

  const instaNotActive = () => {
    setinstaActive(false)
  }

  const instaActive = () => {
    setinstaActive(true)
  }

  const gitNotActive = () => {
    setgitActive(false)
  }

  const gitActive = () => {
    setgitActive(true)
  }

  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        return (
          <SideBarContainer data-dark={isDarkTheme}>
            <MenuContent />
            <ContactUsContainer data-dark={isDarkTheme}>
              <Heading>CONTACT US</Heading>
              <IconsContainer>
                <SocialMediaButton
                  href="https://www.linkedin.com/in/prashanth-manku97/"
                  target="_blank"
                  rel="noreferrer"
                  data-socialbtnctive={linkdinActive}
                  data-dark={isDarkTheme}
                  onMouseEnter={LinkdinActive}
                  onMouseLeave={LinkdinNotActive}
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
                  data-socialbtnctive={instaIsActive}
                  data-dark={isDarkTheme}
                  onMouseEnter={instaActive}
                  onMouseLeave={instaNotActive}
                >
                  <Icon as={AiOutlineGithub} data-dark={isDarkTheme} />
                </SocialMediaButton>

                <SocialMediaButton
                  href="https://www.instagram.com/prashanth0823/"
                  target="_blank"
                  rel="noreferrer"
                  data-socialbtnctive={gitIsActive}
                  data-dark={isDarkTheme}
                  onMouseEnter={gitActive}
                  onMouseLeave={gitNotActive}
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
}

export default MenuSideBar
