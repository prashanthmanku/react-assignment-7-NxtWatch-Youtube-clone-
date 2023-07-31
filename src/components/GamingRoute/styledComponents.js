import styled from 'styled-components'

export const GameRouteBgCard = styled.div`
  margin-top: 64px;
`

export const SidebarCard = styled.div`
  @media screen and (max-width: 767px) {
    display: none;
  }
`

export const GameVideosBgCard = styled.div`
  min-height: 90vh;
  background-color: ${props => (props['data-dark'] ? '#181818' : '#f9f9f9')};
  background-color: ${props => (props['data-dark'] ? '#0f0f0f' : '#f9f9f9')};
  @media screen and (min-width: 768px) {
    margin-left: 250px;
  }
`

export const GameVideosCard = styled.div`
  padding-bottom: 40px;
`

export const GameVideosHeadingCard = styled.div`
  background-color: ${props => (props['data-dark'] ? ' #383838' : '#ebebeb')};
  display: flex;
  align-items: center;
  padding: 20px;
  margin-bottom: 20px;
`
export const IconBackGroung = styled.div`
  background-color: ${props => (props['data-dark'] ? '#0f0f0f' : '#f1f5f9')};
  width: 60px;
  height: 60px;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
`

export const Icon = styled.div`
  color: #ff0b37;

  height: 30px;
  width: 30px;
`

export const GameHeading = styled.h1`
  color: #0f0f0f;
  font-size: 19px;
  font-weight: 600;
  color: ${props => (props['data-dark'] ? '#ffffff' : '#0f0f0f')};
`

export const VideosList = styled.ul`
  padding: 0px;
  list-style-type: none;
  width: 90%;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
`

export const FalureWidthCard = styled.div`
  width: 100%;
  min-height: 70vh;
  max-width: 1000px;
  display: flex;
  justify-content: center;
  align-items: center;
`
