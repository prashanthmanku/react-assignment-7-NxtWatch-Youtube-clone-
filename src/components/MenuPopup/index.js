import NxtWatchContext from '../../context/NxtWatchContext'

import {
  PopupContent,
  MenuButton,
  MenuIcon,
  StyledPopup,
  CloseContainer,
  SidebarCard,
  CloseIcon,
  CloseButton,
} from './styledComponents'

import MenuContent from '../MenuContent'
import MenuSideBar from '../MenuSideBar'

const MenuPopup = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      return (
        <StyledPopup
          data-dark={isDarkTheme}
          trigger={
            <MenuButton>
              <MenuIcon data-dark={isDarkTheme} />
            </MenuButton>
          }
          //   closeOnDocumentClick={false}
          modal
        >
          <PopupContent>
            <SidebarCard>
              <MenuSideBar />
            </SidebarCard>
          </PopupContent>
        </StyledPopup>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default MenuPopup
