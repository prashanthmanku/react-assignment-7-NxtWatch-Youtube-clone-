import styled from 'styled-components'
import {FaMoon} from 'react-icons/fa'
import {FiSun, FiLogOut} from 'react-icons/fi'
import {BiMenu} from 'react-icons/bi'
import Popup from 'reactjs-popup'

export const NavbarContainer = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10vh;
  background-color: ${props => (props.isDarkTheme ? '#212121' : '#f9f9f9')};
  background-color: ${props =>
    props['data-dark'] ? '#212121' : '#ffffff'}; //  ffffff f9f9f9
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 100;
  //   right: 0;
  //   bottom: 0;
`

export const ContentContainer = styled.div`
  width: 90%;
  //   max-width: 1110px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const LogoImg = styled.img`
  width: 100px;
`

export const NavItemsContainer = styled.div`
  display: flex;
  align-items: center;
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

export const ThemeButton = styled(NavButton)``

export const DarkIcon = styled(FaMoon)`
  height: 20px;
  width: 20px;
  color: #0f0f0f;
`

export const LightIcon = styled(FiSun)`
  height: 20px;
  width: 20px;
  color: #ebebeb;
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

export const ProfileButton = styled(NavButton)`
  @media screen and (max-width: 767px) {
    display: none;
  }
`

export const ProfileImg = styled.img`
  height: 20px;
  width: 20px;
`
export const StyledPopUp = styled(Popup)`
  &-popup-content {
  }
`

export const PopupContendCard = styled.div`
  margin: auto;

  background-color: ${props => (props['data-dark'] ? '#212121' : 'white')};
  border-radius: 10px;
  padding: 40px 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;

  @media screen and (min-width: 768px) {
    padding: 60px 60px;
  }
`

export const PopupHeading = styled.h1`
  color: ${props => (props['data-dark'] ? '#ebebeb' : '#1e293b')};
  font-size: 17px;
  font-weight: 500;
  margin-top: 0px;
  margin-bottom: 30px;
`

export const PopupButtonCard = styled.div`
  display: flex;
  justify-content: center;
`

export const PopupButton = styled.button`
  margin: 0px 10px;
  padding: 8px 14px;
  background-color: ${props => (props.confirm ? '#3b82f6' : 'transparent')};
  color: ${props => (props.confirm ? '#ffffff' : ' #64748b')};
  border: ${props => (props.confirm ? 'none' : '1px solid #64748b')};
  border-radius: 4px;
`

export const MobileLogoutBtn = styled(NavButton)`
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const LogoutIcon = styled(FiLogOut)`
  height: 20px;
  width: 20px;
  color: ${props => (props['data-dark'] ? '#ebebeb' : '#0f0f0f')};
`

export const DeskTopLogoutButton = styled.button`
  background-color: transparent;
  font-size: 13px;
  font-weight: 500;
  padding: 5px 14px;
  border-radius: 3px;
  color: #3b82f6;
  border: 1px solid ${props => (props.dark ? '#ebebeb' : '#3b82f6')};
  color: ${props => (props['data-dark'] ? '#ebebeb' : '#3b82f6')};
  align-self: flex-start;
  margin: 0px 13px;
  @media screen and (max-width: 767px) {
    display: none;
  }
`
