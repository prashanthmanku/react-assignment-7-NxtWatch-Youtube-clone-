import {
  // for Failure videos view
  FailureViewContainer,
  FailureImg,
  FailureHeading,
  FailureDescription,
  RetryButton,
} from './styledComponents'

import NxtWatchContext from '../../context/NxtWatchContext'

const darkImgUrl =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
const lightImgUrl =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'

const FailureView = props => {
  const {retryFunctionCall} = props

  const onClickRetry = () => {
    retryFunctionCall()
  }

  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkTheme} = value

        return (
          <FailureViewContainer>
            <FailureImg
              src={isDarkTheme ? darkImgUrl : lightImgUrl}
              alt="failure view"
            />
            <FailureHeading
            //  isDarkTheme={isDarkTheme}
            >
              OOps! Something Went Wrong
            </FailureHeading>
            <FailureDescription>
              We are having some trouble to complete your request. Please try
              again.
            </FailureDescription>
            <RetryButton type="button" onClick={onClickRetry}>
              Retry
            </RetryButton>
          </FailureViewContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default FailureView
