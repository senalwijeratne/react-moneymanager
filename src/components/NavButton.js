import React from 'react'
import styled from 'styled-components'

const NavButtonContainer = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;

  width: 100%;
  height: 50px;
  background: ${props => (props.selected ? '#ab3fff' : 'none')};
  box-shadow: ${props =>
    props.selected ? '0px 4px 4px rgba(0, 0, 0, 0.25)' : ''};
  border-radius: 10px;
  margin-bottom: 10px;

  color: #ffffff;
  cursor: pointer;
  border: none;
  padding: 0;
  text-align: left;

  img {
    width: 30px;
    padding-left: 20px;
  }
  p {
    margin: 0;
    padding-left: 10px;
  }
`

const NavButton = ({ icon, selected }) => {
  return (
    <NavButtonContainer selected={selected}>
      <img src={icon} alt="icon" />
      <p>Button</p>
    </NavButtonContainer>
  )
}

export default NavButton
