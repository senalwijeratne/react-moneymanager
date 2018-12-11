import React from 'react'
import styled from 'styled-components'
import { gql } from 'apollo-boost'
import { graphql } from 'react-apollo'
import { HollowDotsSpinner } from 'react-epic-spinners'

const TableContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 200px;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  .tableHeader {
    display: flex;
    flex-direction: row;
    margin: -30px 20px 0px 20px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    background: #ab3fff;
    border-radius: 10px;
  }
  .tableHeader > h2 {
    font-weight: 300;
    padding-left: 20px;
    font-size: 2rem;
    color: #ffffff;
  }
`

const Table = styled.table`
  text-align: left;
  margin: 30px 5% 30px 5%;
  th {
    color: #ab3fff;
    padding-bottom: 10px;
    @media only screen and (max-width: 900px) {
      font-weight: 500;
    }
  }
  td {
    padding: 10px 0px 10px 0px;
    border-bottom: 1px solid #ddd;
  }
`

const TableRow = styled.tr`
  color: ${props => (props.inflow ? '#62C466' : '#F16262')};
  td:last-child {
    /* text-align: right; */
  }
`

const getTransactions = gql`
  {
    transactions {
      id
      createdAt
      description
      isInflow
      amount
    }
  }
`

const TransactionTable = props => {
  console.log(props)
  return (
    <TableContainer>
      <div className="tableHeader">
        <h2>{props.tableType} Transactions</h2>
      </div>
      {props.data.loading ? (
        <HollowDotsSpinner
          color="#ab3fff"
          style={{
            alignSelf: 'center',
            marginTop: '60px'
          }}
        />
      ) : (
        <Table>
          <tbody>
            <tr>
              <th>Description</th>
              <th>Date</th>
              <th>Amount</th>
            </tr>
            {props.data.transactions.map(transaction => {
              return (
                <TableRow
                  key={transaction.id}
                  inflow={transaction.isInflow ? true : false}
                >
                  <td>{transaction.description}</td>
                  <td>{transaction.createdAt.slice(0, 10)}</td>
                  <td>{transaction.amount}</td>
                </TableRow>
              )
            })}
          </tbody>
        </Table>
      )}
    </TableContainer>
  )
}

export default graphql(getTransactions)(TransactionTable)
