import React, { Component } from 'react'
import styled from 'styled-components'
import dollarIcon from './icons/dollar.png'
import upArrowIcon from './icons/arrow-up.png'
import downArrowIcon from './icons/arrow-down.png'

import FlashCard from './components/FlashCard'
import TransactionTable from './components/TransactionTable'

const AppContainer = styled.div`
  text-align: center;
`

class App extends Component {
  render() {
    return (
      <AppContainer>
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
        <TransactionTable />
      </AppContainer>
    )
  }
}

export default App
