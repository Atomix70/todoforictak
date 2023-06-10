import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';


const TableComponent = (props) => {
  var rows=(!!props.table?props.table:[])
  return (
    <div>
       <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Task</TableCell>
            <TableCell align="right">Description</TableCell>
            <TableCell align="right">Priority</TableCell>
            <TableCell align="right">Date</TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row,index) => (
            <TableRow
              key={row.task}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.task}
              </TableCell>
              <TableCell align="right">{row.description.slice(0,40)}</TableCell>
              <TableCell align="right">{row.priority}</TableCell>
              <TableCell align="right">{row.date}</TableCell>
              { props.type=="upcoming"?
              <TableCell align="right"><Button variant='outlined' onClick={()=>{props.sendFromTable(index)}}>Mark as Done</Button></TableCell>:
              ""}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}

export default TableComponent