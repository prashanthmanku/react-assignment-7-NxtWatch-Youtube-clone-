import styled from 'styled-components'

export const NotFoundRouteBgCard = styled.div``

export const NotFoundCard = styled.div`
  margin-top: 64px;
  @media screen and (min-width: 768px) {
    margin-left: 250px;
  }

  min-height: 90vh;
  background-color: ${props => (props['data-dark'] ? '#181818' : ' #f1f5f9')};
  display: flex;
  justify-content: center;
  align-items: center;
`

export const NotFoundWidthCard = styled.div`
  width: 90%;

  text-align: center;
  //   display: flex;
  //   justify-content: center;
  //   flex-direction: column;
  //   align-items: center;
`

export const Img = styled.img`
  width: 70%;
  max-width: 400px;
  margin-bottom: 30px;
`

export const SidebarCard = styled.div`
  @media screen and (max-width: 767px) {
    display: none;
  }
`

export const Heading = styled.h1`
  font-size: 21px;
  font-weight: 600;
  color: ${props => (props['data-dark'] ? '#ebebeb' : '#1e293b')};
`

export const Description = styled.p`
  color: #64748b;
  font-size: 15px;
`
