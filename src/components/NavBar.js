import React, { Component } from 'react'
import styled from 'styled-components'

import logo from '../icons/cash.png'

const NavBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;
  height: 100vh;
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

class NavBar extends Component {
  render() {
    return (
      <NavBarContainer>
        <LogoTitle>
          <img src={logo} alt="logo" />
          <span>Money Manager</span>
        </LogoTitle>
        <p>This is the NavBar</p>
      </NavBarContainer>
    )
  }
}

export default NavBar
