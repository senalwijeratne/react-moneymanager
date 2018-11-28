import React, { Component } from 'react'
import styled from 'styled-components'

import FlashCard from './components/FlashCard'
import TransactionTable from './components/TransactionTable'
import NavBar from './components/NavBar'

import dollarIcon from './icons/dollar.png'
import upArrowIcon from './icons/arrow-up.png'
import downArrowIcon from './icons/arrow-down.png'

const AppContainer = styled.div`
  display: flex;
`

const MainSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 20px 20px 20px 20px;
  text-align: center;
  div {
    display: flex;
    justify-content: flex-start;
  }
`

class App extends Component {
  render() {
    return (
      <AppContainer>
        <NavBar />
        <MainSection>
          <div>
            <FlashCard
              cardType={'Balance'}
              icon={dollarIcon}
              bgColor={'#ab3fff'}
              amount={'5800'}
            />
            <FlashCard
              cardType={'Inflow'}
              icon={upArrowIcon}
              bgColor={'#62C466'}
              amount={'12600'}
            />
            <FlashCard
              cardType={'Outflow'}
              icon={downArrowIcon}
              bgColor={'#F16262'}
              amount={'6800'}
            />
          </div>
          <TransactionTable />
        </MainSection>
      </AppContainer>
    )
  }
}

export default App
