import {Link, withRouter} from 'react-router-dom'

import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'

import NxtWatchContext from '../../context/NxtWatchContext'

import {
  MenuContentContainer,
  MenuItemsContainer,
  MenuItemContainer,
  MenuDetailsContainer,
  MenuIcon,
  MenuName,
  Li,
} from './styledComponent'

const MenuContent = props => {
  const {match} = props
  const {path} = match

  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        return (
          <MenuContentContainer isDarkTheme={isDarkTheme}>
            <MenuItemsContainer>
              <Li>
                <MenuItemContainer
                  as={Link}
                  to="/"
                  isDarkTheme={isDarkTheme}
                  isselected={path === '/'}
                >
                  <MenuDetailsContainer>
                    <MenuIcon
                      as={AiFillHome}
                      isselected={path === '/'}
                      isDarkTheme={isDarkTheme}
                    />
                    <MenuName
                      isselected={path === '/'}
                      isDarkTheme={isDarkTheme}
                    >
                      Home
                    </MenuName>
                  </MenuDetailsContainer>
                </MenuItemContainer>
              </Li>
              <Li>
                <MenuItemContainer
                  as={Link}
                  to="/trending"
                  isDarkTheme={isDarkTheme}
                  isselected={path === '/trending'}
                >
                  <MenuDetailsContainer>
                    <MenuIcon
                      as={HiFire}
                      isselected={path === '/trending'}
                      isDarkTheme={isDarkTheme}
                      className="trending"
                    />
                    <MenuName
                      isselected={path === '/trending'}
                      isDarkTheme={isDarkTheme}
                    >
                      Trending
                    </MenuName>
                  </MenuDetailsContainer>
                </MenuItemContainer>
              </Li>
              <Li>
                <MenuItemContainer
                  as={Link}
                  to="/gaming"
                  isDarkTheme={isDarkTheme}
                  isselected={path === '/gaming'}
                >
                  <MenuDetailsContainer>
                    <MenuIcon
                      as={SiYoutubegaming}
                      isselected={path === '/gaming'}
                      isDarkTheme={isDarkTheme}
                      className="gaming"
                    />
                    <MenuName
                      isselected={path === '/gaming'}
                      isDarkTheme={isDarkTheme}
                    >
                      Gaming
                    </MenuName>
                  </MenuDetailsContainer>
                </MenuItemContainer>
              </Li>
              <Li>
                <MenuItemContainer
                  as={Link}
                  to="/saved-videos"
                  isDarkTheme={isDarkTheme}
                  isselected={path === '/saved-videos'}
                >
                  <MenuDetailsContainer>
                    <MenuIcon
                      as={MdPlaylistAdd}
                      isselected={path === '/saved-videos'}
                      isDarkTheme={isDarkTheme}
                      className="saved-videos"
                    />
                    <MenuName
                      isselected={path === '/saved-videos'}
                      isDarkTheme={isDarkTheme}
                    >
                      SavedVideos
                    </MenuName>
                  </MenuDetailsContainer>
                </MenuItemContainer>
              </Li>
            </MenuItemsContainer>
          </MenuContentContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default withRouter(MenuContent)
