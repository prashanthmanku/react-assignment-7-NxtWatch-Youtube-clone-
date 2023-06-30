import styled from 'styled-components'
import {BiMenu} from 'react-icons/bi'
import {RiCloseLine} from 'react-icons/ri'

import Popup from 'reactjs-popup'

export const PopupContent = styled.div`
  height: 90vh;
  width: 100vw;
  display: flex;
  align-items: center;
`
export const CloseContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

export const StyledPopup = styled(Popup)`
  &-overlay {
    background-color: ${props => (props['data-dark'] ? '#212121' : '#ffffff')};
  }
  &-popup-content {
  }
`

export const NavButton = styled.button`
  padding: 0px;
  margin: 0px 8px;
  @media screen and (min-width: 768px) {
    margin: 0px 13px;
  }
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`

export const MenuButton = styled(NavButton)`
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const MenuIcon = styled(BiMenu)`
  height: 24px;
  width: 24px;

  color: ${props => (props['data-dark'] ? '#ebebeb' : '#0f0f0f')};
`
export const CloseIcon = styled(RiCloseLine)`
  color: ${props => (props['data-dark'] ? '#ebebeb' : '#0f0f0f')};
  height: 25px;
  width: 25px;
`

export const CloseButton = styled(NavButton)`
  margin-right: 30px;
  margin-top: 20px;
`
