import styled from 'styled-components'

export const MenuContentContainer = styled.div`
  margin-top: 0px;
  width: 100%;

  display: flex;
  flex-direction: column;
  //   background-color: ${props =>
    props.isDarkTheme ? '#212121' : '#ffffff'};
`

export const MenuItemsContainer = styled.ul`
  list-style-type: none;
  padding: 0px;
  width: 100%;
`

export const Li = styled.li`
  width: 100%;
`

export const MenuDetailsContainer = styled.div`
  display: flex;
  align-items: center;
  //   @media screen and (max-width: 767px) {
  //     margin: auto;
  //   }
`

export const MenuItemContainer = styled.div`
  text-decoration: none;
  display: flex;

  width: 100%;
  //   margin-bottom: 10px;
  border-radius: 10px;

  background-color: ${props => {
    if (props['data-selected'] === true) {
      return props['data-dark'] ? ' #383838' : '#f1f5f9'
    }
    if (props['data-focus'] === true) {
      return props['data-dark'] ? '#616e7c' : '  #ebebeb' // d7dfe9
    }

    return null
  }};

  @media screen and (min-width: 768px) {
    padding: 0px 16px;
  }
  padding: 0px 16px;
`

export const MenuIcon = styled.img`
  color: ${props => {
    if (props['data-dark'] === true) {
      return props['data-selected'] ? '#ff0000' : ' #cbd5e1'
    }
    return props['data-selected'] ? '  #ff0000' : '#475569'
  }};
  width: 18px;
  height: 18px;
  //   @media screen and (max-width: 767px) {
  //     &.trending {
  //       margin-left: 18px;
  //     }
  //     &.gaming {
  //       margin-left: 14px;
  //     }
  //     &.saved-videos {
  //       margin-left: 56px;
  //     }
  //   }
`

export const MenuName = styled.p`
  margin-left: 17px;
  font-size: 15px;
  color: ${props => {
    if (props['data-dark'] === true) {
      return props['data-selected'] ? '  #ffffff' : ' #cbd5e1'
    }
    return props['data-selected'] ? ' #000000' : '#475569'
  }};
  font-weight: ${props => (props['data-selected'] ? 600 : 500)};
`
