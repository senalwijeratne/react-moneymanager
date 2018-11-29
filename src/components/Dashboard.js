import React, { Component } from 'react'
import styled from 'styled-components'
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import FlashCard from './FlashCard'
import TransactionTable from './TransactionTable'

import dollarIcon from '../icons/dollar.png'
import upArrowIcon from '../icons/arrow-up.png'
import downArrowIcon from '../icons/arrow-down.png'

const FlashCardSection = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 70px;
`

class Dashboard extends Component {
  render() {
    return (
      <React.Fragment>
        <FlashCardSection>
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
        </FlashCardSection>
        <TransactionTable tableType={'Recent'} />
      </React.Fragment>
    )
  }
}

export default Dashboard
