import {withRouter, Link} from 'react-router-dom'
import Cookies from 'js-cookie'
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

const Header = props => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDarkTheme, changeTheme} = value
      const onChangeTheme = () => {
        changeTheme()
      }

      const onClickLogout = () => {
        const {history} = props
        Cookies.remove('jwt_token')
        history.replace('./login')
      }

      return (
        <NavbarContainer isDarkTheme={isDarkTheme}>
          <ContentContainer>
            <Link to="/">
              <LogoImg
                src={isDarkTheme ? darkLogoUrl : lightLogoUrl}
                alt="channel logo"
              />
            </Link>
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
              <MobileLogoutBtn type="button" onClick={onClickLogout}>
                <LogoutIcon isDarkTheme={isDarkTheme} />
              </MobileLogoutBtn>
              <DeskTopLogoutButton
                type="button"
                isDarkTheme={isDarkTheme}
                onClick={onClickLogout}
              >
                Logout
              </DeskTopLogoutButton>
            </NavItemsContainer>
          </ContentContainer>
        </NavbarContainer>
      )
    }}
  </NxtWatchContext.Consumer>
)
export default withRouter(Header)
