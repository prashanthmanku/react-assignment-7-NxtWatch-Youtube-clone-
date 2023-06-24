import {RiCloseLine} from 'react-icons/ri'
import NxtWatchContext from '../../context/NxtWatchContext'

import {
  PopupContent,
  MenuButton,
  MenuIcon,
  StyledPopup,
  CloseContainer,
  CloseIcon,
  CloseButton,
} from './styledComponents'

import MenuContent from '../MenuContent'

const MenuPopup = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      return (
        <StyledPopup
          isDarkTheme={isDarkTheme}
          trigger={
            <MenuButton>
              <MenuIcon isDarkTheme={isDarkTheme} />
            </MenuButton>
          }
          closeOnDocumentClick={false}
          modal
        >
          {close => (
            <>
              <CloseContainer>
                <CloseButton type="button" onClick={() => close()}>
                  <CloseIcon isDarkTheme={isDarkTheme} />
                </CloseButton>
              </CloseContainer>
              <PopupContent>
                <MenuContent />
              </PopupContent>
            </>
          )}
        </StyledPopup>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default MenuPopup
