import React, { Component } from 'react'
import logo from './logo.svg'
import styled from 'styled-components'

const AppContainer = styled.div`
  text-align: center;

  .App-logo {
    animation: App-logo-spin infinite 20s linear;
    height: 40vmin;
  }

  .App-link {
    color: #61dafb;
  }

  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`

const Heading = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`

class App extends Component {
  render() {
    return (
      <AppContainer>
        <Heading>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </Heading>
      </AppContainer>
    )
  }
}

export default App
