import Header from '../Header'
import MenuSideBar from '../MenuSideBar'

import NxtWatchContext from '../../context/NxtWatchContext'

import {
  NotFoundRouteBgCard,
  NotFoundCard,
  NotFoundWidthCard,
  Img,
  Heading,
  Description,
  SidebarCard,
} from './styledComponents'

const darkUrl =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
const lightUrl =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'

const NotFoundRoute = () => (
  <>
    <Header />
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        return (
          <NotFoundRouteBgCard>
            <SidebarCard>
              <MenuSideBar />
            </SidebarCard>
            <NotFoundCard data-dark={isDarkTheme}>
              <NotFoundWidthCard>
                <Img src={isDarkTheme ? darkUrl : lightUrl} alt="not found" />
                <Heading data-dark={isDarkTheme}>Page Not Found</Heading>
                <Description data-dark={isDarkTheme}>
                  We are sorry, the page you requested could not be found.
                </Description>
              </NotFoundWidthCard>
            </NotFoundCard>
          </NotFoundRouteBgCard>
        )
      }}
    </NxtWatchContext.Consumer>
  </>
)
export default NotFoundRoute
