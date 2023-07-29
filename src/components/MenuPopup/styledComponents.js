import styled from 'styled-components'
import {BiMenu} from 'react-icons/bi'

import Popup from 'reactjs-popup'

export const PopupContent = styled.div`
  height: 100vh;
  width: 90vw;

  box-shadow: 0px 4px 16px 0px #212121;
  background-color: ${props => (props['data-dark'] ? '#212121' : '#ffffff')};
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const CloseContainer = styled.div`
  height: 64px;
  min-height: 50px;
  display: flex;
  align-items: center;

  width: 250px;
  width: 100%;
  background-color: ${props => (props['data-dark'] ? '#212121' : '#ffffff')};
`

export const StyledPopup = styled(Popup)`
  &-overlay {
    background-color: ${props => (props['data-dark'] ? '#212121' : '#ffffff')};

    width: 250px;
    background-color: transparent;
  }
  &-popup-content {
  }
`
export const SidebarCard = styled.div`
  width: 250px;
  display: flex;
  flex-direction: column;
  background-color: ${props => (props['data-dark'] ? '#212121' : '#ffffff')};
  @media screen and (max-width: 767px) {
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
  margin-right: 20px;
`

export const MenuIcon = styled(BiMenu)`
  height: 28px;
  width: 28px;

  color: ${props => (props['data-dark'] ? '#ebebeb' : '#0f0f0f')};
`

export const LogoImg = styled.img`
  width: 100px;
  //   margin-top: 10px;
  margin-left: 20px;
`

export const PopupNavWidth = styled.div`
  width: 90%;
  margin: auto;
`
