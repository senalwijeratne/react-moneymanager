import React, { Component } from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'

import NavBar from './components/NavBar'
import Dashboard from './components/Dashboard'
import TransactionTable from './components/TransactionTable'
import BackDrop from './components/Backdrop'

import menuIcon from './icons/forwardWhite.png'

const AppContainer = styled.div`
  display: flex;
`

const MainSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 60px 20px 20px 20px;
`

const SideToggle = styled.img`
  width: 7vh;
  height: 7vh;
  top: 1vh;
  left: 1vh;
  position: fixed;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.3);
  cursor: pointer;
`

const client = new ApolloClient({
  uri: 'https://api-apeast.graphcms.com/v1/cjpatthzi0uje01gzz60r3a7y/master'
})

class App extends Component {
  state = {
    sideBarOpen: false
  }

  sideBarToggleHandler = () => {
    this.setState(prevState => {
      console.log('SideBar Toggled')
      return { sideBarOpen: !prevState.sideBarOpen }
    })
  }

  backDropClickHandler = () => {
    console.log('Backdrop Clicked')
    this.setState({ sideBarOpen: false })
  }

  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <AppContainer>
            {this.state.sideBarOpen ? (
              <React.Fragment>
                <BackDrop click={this.backDropClickHandler} />
              </React.Fragment>
            ) : (
              <SideToggle src={menuIcon} onClick={this.sideBarToggleHandler} />
            )}
            <NavBar
              show={this.state.sideBarOpen}
              buttonClick={this.backDropClickHandler}
            />
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
      </ApolloProvider>
    )
  }
}

export default App
