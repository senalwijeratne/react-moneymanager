import React, { Component } from 'react'
import styled from 'styled-components'
import icon from './icons/dollar.png'

import FlashCard from './components/FlashCard'

const AppContainer = styled.div`
  text-align: center;
`

class App extends Component {
  render() {
    return (
      <AppContainer>
        <h2>Main React App</h2>
        <FlashCard icon={icon} bgColor={'#ab3fff'} amount={'5800'} />
      </AppContainer>
    )
  }
}

export default App
