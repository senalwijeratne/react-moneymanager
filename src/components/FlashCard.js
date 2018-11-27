import React, { Component } from 'react'
import styled from 'styled-components'

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 200px;
  max-width: 400px;
  background-color: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;

  hr {
    width: calc(100%-40px);
  }
`
const CardTop = styled.div`
  display: flex;
  flex-direction: row;

  div {
    display: flex;
    margin: 0px 20px 0px auto;
    flex-direction: column;
    align-self: flex-end;
  }

  div > p,
  div > h1 {
    margin: 0;
    text-align: right;
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    /* font-size: 64px; */
    text-align: right;
    color: #505050;
  }

  div > p {
    color: #62c466;
  }
`
const CardBottom = styled.div`
  display: flex;
  flex-direction: column;

  span {
    width: calc(100% - 40px);
    height: 1px;
    margin: 20px auto 15px auto;
    background-color: #50505075;
  }

  p {
    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    font-size: 0.8rem;
    margin: 0px auto 15px 20px;
    color: #505050;
  }
`

const IconContainer = styled.img`
  width: auto;
  height: auto;
  padding: 20px;
  margin: -40px 0px 0px 20px;
  background: ${props => props.bgColor};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
`

class FlashCard extends Component {
  amountTest = () => {
    return this.props.amount.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  }

  dateRangeText = () => {
    return '1st nov 2018 - today'
  }

  render() {
    return (
      <CardContainer>
        <CardTop>
          <IconContainer
            src={this.props.icon}
            alt="icon"
            bgColor={this.props.bgColor}
          />
          <div>
            <p>Balance</p>
            <h1>{`Rs  ${this.amountTest()}`}</h1>
          </div>
        </CardTop>
        <CardBottom>
          <span />
          <p>{this.dateRangeText()}</p>
        </CardBottom>
      </CardContainer>
    )
  }
}

export default FlashCard
