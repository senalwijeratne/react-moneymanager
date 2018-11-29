import React from 'react'
import styled, { css } from 'styled-components'

import NavButton from './NavButton'

import logo from '../icons/cash.png'
import dashboardIcon from '../icons/details.png'
import upArrowIcon from '../icons/arrow-up.png'
import downArrowIcon from '../icons/arrow-down.png'

const NavBarContainer = styled.div`
  top: 0px;
  left: 0px;
  margin-left: -25vw;
  display: flex;
  flex-direction: column;
  width: 25vw;
  min-width: 275px;
  min-height: 100vh;
  background-color: #505050;
  z-index: 200;
  transform: translateX(-100%);
  transition: all 0.3s ease-in-out;

  ${props =>
    props.show &&
    css`
      margin-left: 0;
      transform: translateX(0);
    `};

  @media only screen and (max-width: 900px) {
    width: 30%;
    min-width: 300px;
    position: fixed;
  }
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

const NavLinks = styled.nav`
  display: flex;
  flex-direction: column;
  margin: 20px 20px 0px 20px;
  & > a {
    text-decoration: none;
  }
`

const NavBar = props => {
  return (
    <NavBarContainer show={props.show}>
      <LogoTitle>
        <img src={logo} alt="logo" />
        <span>Money Manager</span>
      </LogoTitle>
      <NavLinks>
        <NavButton
          type={'Dashboard'}
          icon={dashboardIcon}
          toLink={'/'}
          buttonClick={props.buttonClick}
          selected
        />
        <NavButton
          type={'Inflow'}
          icon={downArrowIcon}
          toLink={'/inflow'}
          buttonClick={props.buttonClick}
        />
        <NavButton
          type={'Outflow'}
          icon={upArrowIcon}
          toLink={'/outflow'}
          buttonClick={props.buttonClick}
        />
      </NavLinks>
    </NavBarContainer>
  )
}

// class NavBar extends Component {
//   render() {
//     return (
//       <NavBarContainer className={props.show ? 'show' : ''}>
//         <LogoTitle>
//           <img src={logo} alt="logo" />
//           <span>Money Manager</span>
//         </LogoTitle>
//         <NavLinks>
//           <NavButton
//             type={'Dashboard'}
//             icon={dashboardIcon}
//             toLink={'/'}
//             selected
//           />
//           <NavButton type={'Inflow'} icon={downArrowIcon} toLink={'/inflow'} />
//           <NavButton type={'Outflow'} icon={upArrowIcon} toLink={'/outflow'} />
//         </NavLinks>
//       </NavBarContainer>
//     )
//   }
// }

export default NavBar
