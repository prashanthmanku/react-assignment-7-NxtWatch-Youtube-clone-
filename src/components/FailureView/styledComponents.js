import styled from 'styled-components'

// no Failure view
export const FailureViewContainer = styled.div`
  text-align: center;
  margin-top: 20px;
  padding: 20px;
  margin: auto;
`

export const FailureImg = styled.img`
  width: 60%;
  max-width: 200px;
`

export const FailureHeading = styled.h1`
  font-size: 18px;
  font-weight: 500;

  color: ${props => (props.isDarkTheme ? '#ebebeb' : '#1e293b')};
`

export const FailureDescription = styled.p`
  font-size: 15px;
  color: #64748b;
`

export const RetryButton = styled.button`
  padding: 7px 23px;
  border: none;
  border-radius: 4px;
  outline: none;
  cursor: pointer;
  background-color: #4f46e5;
  color: #ffffff;
  font-size: 15px;
  font-weight: 500;
`
