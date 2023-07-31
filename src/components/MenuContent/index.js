import {useState} from 'react'
import {Link, withRouter} from 'react-router-dom'

import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAddCheck} from 'react-icons/md'

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
  const [HomeisFocused, setHomeisFocused] = useState(false)
  const [trndingisFocused, settrndingisFocused] = useState(false)
  const [gamingisFocused, setgamingisFocused] = useState(false)
  const [savedisFocused, setsavedisFocused] = useState(false)

  const onMouseEnterHome = () => {
    setHomeisFocused(true)
  }

  const onMouseLeaveHome = () => {
    setHomeisFocused(false)
  }

  const onMouseEnterTrending = () => {
    settrndingisFocused(true)
  }

  const onMouseLeaveTrending = () => {
    settrndingisFocused(false)
  }

  const onMouseEnterGaming = () => {
    setgamingisFocused(true)
  }

  const onMouseLeaveGaming = () => {
    setgamingisFocused(false)
  }

  const onMouseEnterSaved = () => {
    setsavedisFocused(true)
  }

  const onMouseLeaveSaved = () => {
    setsavedisFocused(false)
  }

  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkTheme, changeRouteKey, changePopupMode} = value
        const onClickChangeRouteKey = () => {
          changeRouteKey()
          changePopupMode(false)
        }
        return (
          <MenuContentContainer data-dark={isDarkTheme}>
            <MenuItemsContainer>
              <Li>
                <MenuItemContainer
                  as={Link}
                  to="/"
                  data-dark={isDarkTheme}
                  data-selected={path === '/'}
                  onClick={onClickChangeRouteKey}
                  onMouseEnter={onMouseEnterHome}
                  onMouseLeave={onMouseLeaveHome}
                  data-focus={HomeisFocused}
                >
                  <MenuDetailsContainer>
                    <MenuIcon
                      as={AiFillHome}
                      data-selected={path === '/'}
                      data-dark={isDarkTheme}
                    />
                    <MenuName
                      data-selected={path === '/'}
                      data-dark={isDarkTheme}
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
                  data-dark={isDarkTheme}
                  data-selected={path === '/trending'}
                  onClick={onClickChangeRouteKey}
                  onMouseEnter={onMouseEnterTrending}
                  onMouseLeave={onMouseLeaveTrending}
                  data-focus={trndingisFocused}
                >
                  <MenuDetailsContainer>
                    <MenuIcon
                      as={HiFire}
                      data-selected={path === '/trending'}
                      data-dark={isDarkTheme}
                      className="trending"
                    />
                    <MenuName
                      data-selected={path === '/trending'}
                      data-dark={isDarkTheme}
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
                  data-dark={isDarkTheme}
                  data-selected={path === '/gaming'}
                  onClick={onClickChangeRouteKey}
                  onMouseEnter={onMouseEnterGaming}
                  onMouseLeave={onMouseLeaveGaming}
                  data-focus={gamingisFocused}
                >
                  <MenuDetailsContainer>
                    <MenuIcon
                      as={SiYoutubegaming}
                      data-selected={path === '/gaming'}
                      data-dark={isDarkTheme}
                      className="gaming"
                    />
                    <MenuName
                      data-selected={path === '/gaming'}
                      data-dark={isDarkTheme}
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
                  data-dark={isDarkTheme}
                  data-selected={path === '/saved-videos'}
                  onClick={onClickChangeRouteKey}
                  onMouseEnter={onMouseEnterSaved}
                  onMouseLeave={onMouseLeaveSaved}
                  data-focus={savedisFocused}
                >
                  <MenuDetailsContainer>
                    <MenuIcon
                      as={MdPlaylistAddCheck}
                      data-selected={path === '/saved-videos'}
                      data-dark={isDarkTheme}
                      className="saved-videos"
                    />
                    <MenuName
                      data-selected={path === '/saved-videos'}
                      data-dark={isDarkTheme}
                    >
                      Saved Videos
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
