import React, { Component } from 'react'
import styled from 'styled-components'

import NavButton from './NavButton'

import logo from '../icons/cash.png'
import dashboardIcon from '../icons/details.png'
import upArrowIcon from '../icons/arrow-up.png'
import downArrowIcon from '../icons/arrow-down.png'

const NavBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;
  min-height: 100vh;
  background-color: #505050;
`

const LogoTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 20px 10px 0px 10px;
  img {
    width: 64px;
    height: 64px;
  }
  span {
    font-weight: 300;
    font-size: 1.5rem;
    color: #ffffff;
  }
`

const NavLinks = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 20px 0px 20px;
  & > a {
    text-decoration: none;
  }
`

class NavBar extends Component {
  render() {
    return (
      <NavBarContainer>
        <LogoTitle>
          <img src={logo} alt="logo" />
          <span>Money Manager</span>
        </LogoTitle>
        <NavLinks>
          <NavButton
            type={'Dashboard'}
            icon={dashboardIcon}
            toLink={'/'}
            selected
          />
          <NavButton type={'Inflow'} icon={downArrowIcon} toLink={'/inflow'} />
          <NavButton type={'Outflow'} icon={upArrowIcon} toLink={'/outflow'} />
        </NavLinks>
      </NavBarContainer>
    )
  }
}

export default NavBar
