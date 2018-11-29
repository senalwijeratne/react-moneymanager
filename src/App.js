import React, { Component } from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import NavBar from './components/NavBar'
import Dashboard from './components/Dashboard'
import TransactionTable from './components/TransactionTable'

const AppContainer = styled.div`
  display: flex;
`

const MainSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 60px 20px 20px 20px;
`

class App extends Component {
  render() {
    return (
      <Router>
        <AppContainer>
          <NavBar />
          <MainSection>
            <Route exact path={'/'} component={Dashboard} />
            <Route
              exact
              path={'/inflow/'}
              render={() => {
                return <TransactionTable tableType={'Inflow'} />
              }}
            />
            <Route
              exact
              path={'/outflow/'}
              render={() => {
                return <TransactionTable tableType={'Outflow'} />
              }}
            />
          </MainSection>
        </AppContainer>
      </Router>
    )
  }
}

export default App
