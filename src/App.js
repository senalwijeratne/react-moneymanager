import React, { Component } from 'react'
import styled from 'styled-components'

const AppContainer = styled.div`
  text-align: center;
`

class App extends Component {
  render() {
    return (
      <AppContainer>
        <p>This is a "p" tag</p>
      </AppContainer>
    )
  }
}

export default App
