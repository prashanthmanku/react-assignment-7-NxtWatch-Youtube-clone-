import styled from 'styled-components'

export const ItemContainer = styled.li`
  margin: 20px 15px 0px 0px;
  width: 100px;

  flex-grow: 1;
  @media screen and (min-width: 576px) {
    width: 170px;
    margin: 20px 20px 20px 0px;

    max-width: 900px;
  }
`

export const VideoLinkContainer = styled.div`
  cursor: pointer;
  text-decoration: none;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`

export const ThumbnailImg = styled.img`
  width: 100%;

  margin-bottom: 10px;
`

export const Title = styled.p`
  font-size: 14px;
  margin: 0px;

  color: ${props => (props['data-dark'] ? '#ebebeb' : '#1e293b')};
  font-size: 15px;
  line-height: 21px;
  font-weight: 400;
  font-weight: ${props => (props['data-dark'] ? 400 : 500)};
`

export const Views = styled.p`
  font-size: 13px;
  color: #64748b;
`
