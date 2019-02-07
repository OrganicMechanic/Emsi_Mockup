import React, { Component } from 'react'
import { BootstrapTable,
  TableHeaderColumn } from 'react-bootstrap-table'

class Table1 extends Component {
  render () {
    return (
      <div>
        <BootstrapTable data={this.props.data}>
          <TableHeaderColumn isKey
            dataField='industry'
            dataAlign='center'
            headerAlign='left'
            width='60%'>
            <font size='2'>Industry</font>
          </TableHeaderColumn>
          <TableHeaderColumn dataField='occupation'
            dataAlign='center'
            headerAlign='center'
            width='10%'>
            <b><font size='2'>Occupation Jobs in Industry (2015)</font></b>
          </TableHeaderColumn>
          <TableHeaderColumn dataField='percent'
            dataAlign='center'
            headerAlign='center'
            width='10%'>
            <b><font size='2'>% of Occupation in Industry (2015)</font></b>
          </TableHeaderColumn>
          <TableHeaderColumn dataField='total'
            dataAlign='center'
            headerAlign='center'
            width='10%'>
            <b><font size='2'>% of Total Jobs in Industry (2015)</font></b>
          </TableHeaderColumn>
        </BootstrapTable>
      </div>
    )
  }
}

export default Table1
