import NxtWatchContext from '../../context/NxtWatchContext'

import MenuPopup from '../MenuPopup'

import {
  NavbarContainer,
  ContentContainer,
  LogoImg,
  NavItemsContainer,
  //   NavButton,
  ThemeButton,
  DarkIcon,
  LightIcon,
  MenuButton,
  MenuIcon,
  ProfileButton,
  ProfileImg,
  MobileLogoutBtn,
  LogoutIcon,
  DeskTopLogoutButton,
} from './styledComponents'

const darkLogoUrl =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
const lightLogoUrl =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

const Header = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDarkTheme, changeTheme} = value
      const onChangeTheme = () => {
        changeTheme()
      }

      return (
        <NavbarContainer isDarkTheme={isDarkTheme}>
          <ContentContainer>
            <LogoImg
              src={isDarkTheme ? darkLogoUrl : lightLogoUrl}
              alt="channel logo"
            />
            <NavItemsContainer>
              <ThemeButton type="button" onClick={onChangeTheme}>
                {isDarkTheme ? <LightIcon /> : <DarkIcon />}
              </ThemeButton>

              <MenuPopup />

              <ProfileButton type="button">
                <ProfileImg
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                  alt="profile"
                />
              </ProfileButton>
              <MobileLogoutBtn type="button">
                <LogoutIcon isDarkTheme={isDarkTheme} />
              </MobileLogoutBtn>
              <DeskTopLogoutButton type="button" isDarkTheme={isDarkTheme}>
                Logout
              </DeskTopLogoutButton>
            </NavItemsContainer>
          </ContentContainer>
        </NavbarContainer>
      )
    }}
  </NxtWatchContext.Consumer>
)
export default Header
