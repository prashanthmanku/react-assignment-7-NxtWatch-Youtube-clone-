import styled from 'styled-components'

export const MenuContentContainer = styled.div`
  margin-top: 0px;
  width: 100%;

  display: flex;
  flex-direction: column;
  background-color: ${props => (props.isDarkTheme ? '#212121' : '#ffffff')};
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
  @media screen and (max-width: 767px) {
    margin: auto;
  }
`

export const MenuItemContainer = styled.div`
  text-decoration: none;
  display: flex;

  width: 100%;

  background-color: ${props => {
    if (props.isselected === true) {
      return props.isDarkTheme ? ' #383838' : '#f1f5f9'
    }
    return null
  }};

  @media screen and (min-width: 768px) {
    padding: 0px 16px;
  }
`

export const MenuIcon = styled.img`
  color: ${props => {
    if (props.isDarkTheme === true) {
      return props.isselected ? '#ff0000' : ' #cbd5e1'
    }
    return props.isselected ? '  #ff0000' : '#475569'
  }};
  width: 16px;
  height: 16px;
  @media screen and (max-width: 767px) {
    &.trending {
      margin-left: 18px;
    }
    &.gaming {
      margin-left: 14px;
    }
    &.saved-videos {
      margin-left: 56px;
    }
  }
`

export const MenuName = styled.p`
  margin-left: 17px;
  font-size: 14px;
  color: ${props => {
    if (props.isDarkTheme === true) {
      return props.isselected ? '  #ffffff' : ' #cbd5e1'
    }
    return props.isselected ? ' #000000' : '#475569'
  }};
  font-weight: ${props => (props.isselected ? 600 : 500)};
`
