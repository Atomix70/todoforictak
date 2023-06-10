import React from 'react'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TextField,Button } from '@mui/material';
import { useState } from 'react';


const Form = ({sendFromForm}) => {
    const [taskObject,taskObjectChange]=useState({task:"",description:""})
    function taskevent(event){
        const value= event.target.value
        const name=event.target.name
        taskObjectChange({
            ...taskObject,
            [name]:value,
        })        
    }
    function submitClick(){
        // console.log(taskObject)
        sendFromForm(taskObject)
        taskObjectChange({task:"",description:""})
    }
    
  return (
    <div>
    {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker />
    </LocalizationProvider> */}
    <TextField id="outlined-basic" value={taskObject.task} onChange={taskevent} name="task"label="task" variant="outlined" /><br/><br/>
    <TextField id="outlined-basic" value={taskObject.description} onChange={taskevent} name="description" label="Description"  multiline rows={4} variant="outlined" /><br/><br/>
    <Button variant="contained" onClick={submitClick}>Submit</Button>    
</div>
  )
}

export default Form