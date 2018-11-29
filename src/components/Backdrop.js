import React from 'react'
import styled from 'styled-components'

const BlackBackDrop = styled.div`
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 100;
  cursor: pointer;
`

const BackDrop = props => <BlackBackDrop onClick={props.click} />

export default BackDrop
