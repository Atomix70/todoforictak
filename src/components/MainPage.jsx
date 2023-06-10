import { Typography } from '@mui/material'
import React from 'react'
import TableComponent from '../style-components/TableComponent'
import Form from './Form'
import { useState } from 'react'

const MainPage = ({className}) => {

  const [upcomingTask,upcomingTaskChange]=useState([])
  const [completedTask,completedTaskChange]=useState([])
  const chooseMessageFromForm = (message) => {
    upcomingTaskChange([...upcomingTask,message])
  };
  const chooseMessageFromTable = (message) => {
    // upcomingTaskChange([...upcomingTask,message])
    console.log(message)
    completedTaskChange([...completedTask,upcomingTask[message]])
    upcomingTaskChange(upcomingTask.filter(item=>item != upcomingTask[message] ))
  };
  
  return (
    <div className={className}>
      <Form sendFromForm={chooseMessageFromForm}></Form>
      <br />
      <br />
      <Typography variant="h4">Upcoming Tasks</Typography>
      <br />
      <br />
      <TableComponent type="upcoming" sendFromTable={chooseMessageFromTable} table={upcomingTask}/>
      <br />
      <br />
      <Typography variant="h4" >Completed Tasks</Typography>
      <br />
      <br />
      <TableComponent type="completed" table={completedTask}/>
    </div>
  )
}

export default MainPage