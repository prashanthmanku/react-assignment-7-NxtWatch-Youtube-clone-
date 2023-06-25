import Loader from 'react-loader-spinner'
import {LoadingContainer, LoaderEl} from './styledComponent'
import NxtWatchContext from '../../context/NxtWatchContext'

const LoadingView = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      return (
        <LoadingContainer data-testid="loader">
          <LoaderEl
            as={Loader}
            type="ThreeDots"
            color={isDarkTheme ? '#ffffff' : '#4f46e5'}
            height="50"
            width="50"
          />
        </LoadingContainer>
      )
    }}
  </NxtWatchContext.Consumer>
)
export default LoadingView
