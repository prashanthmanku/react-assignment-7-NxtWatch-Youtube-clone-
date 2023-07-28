import {Link} from 'react-router-dom'
import NxtWatchContext from '../../context/NxtWatchContext'
import MenuSideBar from '../MenuSideBar'

import {
  PopupContent,
  MenuButton,
  MenuIcon,
  StyledPopup,
  CloseContainer,
  SidebarCard,
  LogoImg,
  PopupNavWidth,
} from './styledComponents'

const darkLogoUrl =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
const lightLogoUrl =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

const MenuPopup = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {
        isDarkTheme,
        changeRouteKey,

        changePopupMode,
        isPopupOpen,
      } = value
      const onChangeRouteKey = () => {
        changeRouteKey()
      }

      const openPopup = () => {
        changePopupMode(true)
      }

      const closePopup = () => {
        changePopupMode(false)
      }

      const handleTouchStart = event => {
        if (isPopupOpen) {
          event.preventDefault()
        }
      }

      return (
        <div onTouchStart={handleTouchStart}>
          <StyledPopup
            data-dark={isDarkTheme}
            trigger={
              <MenuButton>
                <MenuIcon data-dark={isDarkTheme} />
              </MenuButton>
            }
            modal
            lockScroll
            onOpen={openPopup}
            onClose={closePopup}
          >
            {close => (
              <>
                <PopupContent data-dark={isDarkTheme}>
                  <CloseContainer data-dark={isDarkTheme}>
                    <PopupNavWidth>
                      <MenuButton onClick={() => close()}>
                        <MenuIcon data-dark={isDarkTheme} />
                      </MenuButton>
                      <Link to="/" onClick={() => close()}>
                        <LogoImg
                          src={isDarkTheme ? darkLogoUrl : lightLogoUrl}
                          alt="website logo"
                          onClick={onChangeRouteKey}
                        />
                      </Link>
                    </PopupNavWidth>
                  </CloseContainer>
                  <SidebarCard data-dark={isDarkTheme}>
                    <MenuSideBar />
                  </SidebarCard>
                </PopupContent>
              </>
            )}
          </StyledPopup>
        </div>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default MenuPopup
