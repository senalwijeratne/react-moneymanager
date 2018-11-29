import React from 'react'
import styled from 'styled-components'

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 20px;
  max-width: 400px;
  background-color: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;

  hr {
    width: calc(100%-40px);
  }

  @media only screen and (max-width: 900px) {
  }
`
const CardTop = styled.div`
  display: flex;
  flex-direction: row;

  img {
    width: 20%;
    height: 20%;
    padding: 20px;
    margin: -30px 0px 0px 20px;
    background: ${props => props.bgColor};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
  }

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
    font-weight: 300;
    font-size: 2rem;
    color: #505050;
  }

  div > p {
    font-size: 1rem;
    color: ${props => props.bgColor};
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
    font-weight: 300;
    font-size: 0.8rem;
    margin: 0px auto 15px 20px;
    color: #505050;
  }
`

const FlashCard = ({ icon, bgColor, amount, cardType, buttonClick }) => {
  const addCommas = () => {
    return amount.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  }

  const dateRangeText = () => {
    return '1st nov 2018 - today'
  }

  return (
    <CardContainer>
      <CardTop bgColor={bgColor}>
        <img src={icon} alt="icon" bgColor={bgColor} />
        <div>
          <p>{cardType}</p>
          <h1>{`Rs  ${addCommas()}`}</h1>
        </div>
      </CardTop>
      <CardBottom>
        <span />
        <p>{dateRangeText()}</p>
      </CardBottom>
    </CardContainer>
  )
}

export default FlashCard
