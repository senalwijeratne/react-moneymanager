import React from 'react'
import styled from 'styled-components'

const TableContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 200px;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  div {
    display: flex;
    flex-direction: row;
    margin: -30px 20px 0px 20px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    background: #ab3fff;
    border-radius: 10px;
  }
  div > h2 {
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
  }
  td {
    padding: 10px 0px 10px 0px;
    border-bottom: 1px solid #ddd;
  }
`

const TableRow = styled.tr`
  color: ${props => (props.inflow ? '#62C466' : '#F16262')};
`

const TransactionTable = props => {
  return (
    <TableContainer>
      <div>
        <h2>Recent Transactions</h2>
      </div>
      <Table>
        <tr>
          <th>Description</th>
          <th>Date</th>
          <th>Amount</th>
        </tr>
        <TableRow inflow>
          <td>Some Inflow</td>
          <td>25-12-2018</td>
          <td>Rs 1000</td>
        </TableRow>
        <TableRow>
          <td>Some Outflow</td>
          <td>24-12-2018</td>
          <td>Rs 600</td>
        </TableRow>
        <TableRow inflow>
          <td>Some Inflow</td>
          <td>24-12-2018</td>
          <td>Rs 20000</td>
        </TableRow>
        <TableRow>
          <td>Some Outflow</td>
          <td>23-12-2018</td>
          <td>Rs 6000</td>
        </TableRow>
        <TableRow inflow>
          <td>Some Inflow</td>
          <td>25-12-2018</td>
          <td>Rs 1000</td>
        </TableRow>
        <TableRow>
          <td>Some Outflow</td>
          <td>24-12-2018</td>
          <td>Rs 600</td>
        </TableRow>
        <TableRow inflow>
          <td>Some Inflow</td>
          <td>24-12-2018</td>
          <td>Rs 20000</td>
        </TableRow>
        <TableRow>
          <td>Some Outflow</td>
          <td>23-12-2018</td>
          <td>Rs 6000</td>
        </TableRow>
      </Table>
    </TableContainer>
  )
}

export default TransactionTable
