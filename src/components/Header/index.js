import {useState} from 'react'
import {withRouter, Link} from 'react-router-dom'
import Cookies from 'js-cookie'
import NxtWatchContext from '../../context/NxtWatchContext'

import MenuPopup from '../MenuPopup'

import {
  NavbarContainer,
  ContentContainer,
  LogoMenuContainer,
  LogoImg,
  NavItemsContainer,
  //   NavButton,
  ThemeButton,
  DarkIcon,
  LightIcon,
  ProfileButton,
  ProfileImg,
  MobileLogoutBtn,
  LogoutIcon,
  DeskTopLogoutButton,
  StyledPopUp,
  PopupContendCard,
  PopupHeading,
  PopupButtonCard,
  PopupButton,
} from './styledComponents'

const darkLogoUrl =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
const lightLogoUrl =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

const Header = props => {
  const [themeButtonActive, setthemeButtonActive] = useState(false)
  const [profileButtonActive, setprofileButtonActive] = useState(false)
  const mouseOnThemActive = () => {
    setthemeButtonActive(true)
  }

  const mouseOnThemNotActive = () => {
    setthemeButtonActive(false)
  }

  const mouseOnProfileActive = () => {
    setprofileButtonActive(true)
  }

  const mouseOnProfileNotActive = () => {
    setprofileButtonActive(false)
  }
  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkTheme, changeTheme, changeRouteKey} = value

        const onChangeTheme = () => {
          changeTheme()
        }

        const onChangeRouteKey = () => {
          changeRouteKey()
        }

        const onClickLogout = () => {
          const {history} = props
          Cookies.remove('jwt_token')
          history.replace('/login')
        }

        const renderLogutPopupContent = close => (
          <PopupContendCard data-dark={isDarkTheme}>
            <PopupHeading data-dark={isDarkTheme}>
              Are you sure, you want to logout
            </PopupHeading>
            <PopupButtonCard>
              <PopupButton type="button" onClick={() => close()}>
                Cancel
              </PopupButton>
              <PopupButton
                type="button"
                confirm
                onClick={() => {
                  close()
                  onClickLogout()
                }}
              >
                Confirm
              </PopupButton>
            </PopupButtonCard>
          </PopupContendCard>
        )

        return (
          <NavbarContainer data-dark={isDarkTheme}>
            <ContentContainer>
              <LogoMenuContainer>
                <MenuPopup />
                <Link to="/">
                  <LogoImg
                    src={isDarkTheme ? darkLogoUrl : lightLogoUrl}
                    alt="website logo"
                    onClick={onChangeRouteKey}
                  />
                </Link>
              </LogoMenuContainer>
              <NavItemsContainer>
                <ThemeButton
                  type="button"
                  onClick={onChangeTheme}
                  data-testid="theme"
                  data-themBtnActive={themeButtonActive}
                  data-dark={isDarkTheme}
                  onMouseEnter={mouseOnThemActive}
                  onMouseLeave={mouseOnThemNotActive}
                >
                  {isDarkTheme ? <LightIcon /> : <DarkIcon />}
                </ThemeButton>

                {/* <MenuPopup /> */}

                <ProfileButton
                  type="button"
                  data-profileBtnActive={profileButtonActive}
                  data-dark={isDarkTheme}
                  onMouseEnter={mouseOnProfileActive}
                  onMouseLeave={mouseOnProfileNotActive}
                >
                  <ProfileImg
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                    alt="profile"
                  />
                </ProfileButton>

                <StyledPopUp
                  trigger={
                    <MobileLogoutBtn type="button">
                      <LogoutIcon data-dark={isDarkTheme} />
                    </MobileLogoutBtn>
                  }
                  modal
                  closeOnDocumentClick={false}
                >
                  {close => renderLogutPopupContent(close)}
                </StyledPopUp>

                <StyledPopUp
                  trigger={
                    <DeskTopLogoutButton
                      type="button"
                      data-dark={isDarkTheme}
                      onClick={onClickLogout}
                    >
                      Logout
                    </DeskTopLogoutButton>
                  }
                  modal
                  closeOnDocumentClick={false}
                >
                  {close => renderLogutPopupContent(close)}
                </StyledPopUp>
              </NavItemsContainer>
            </ContentContainer>
          </NavbarContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}
export default withRouter(Header)
