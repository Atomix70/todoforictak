import React from 'react'
import { useForm } from 'react-hook-form';
import { TextField, Button, MenuItem } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { useState } from 'react';
import { DatePicker } from '@mui/x-date-pickers';
import "./Forms.css"

const Form = ({sendFromForm}) => {
    const { control,register, handleSubmit,reset,setValue,getValues } = useForm();
    const [selectedDate, setSelectedDate] = useState(null);
    // const [taskObject,taskObjectChange]=useState({task:"",description:""})
    // function taskevent(event){
    //     const value= event.target.value
    //     const name=event.target.name
    //     taskObjectChange({
    //         ...taskObject,
    //         [name]:value,
    //     })        
    // }
    // function submitClick(){
    //     // console.log(taskObject)
    //     sendFromForm(taskObject)
    //     taskObjectChange({task:"",description:""})
    // }
    const onSubmit = (data) => {
        // Handle form submission logic here
        console.log(data);
        sendFromForm(data)
        reset()
        setValue('priority', '');        
      };
    const showDate = (data)=>{
        console.log(data)
    }
    
  return (
    // <LocalizationProvider dateAdapter={AdapterDateFns}>
    // <CssBaseline/>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          {...register('task', { required: true })}
          label="Task"
          variant="outlined"
          fullWidth
          onChange={showDate}
        />
        <br /><br />
        <TextField
          {...register('description', { required: true })}
          label="Description"
          variant="outlined"
          fullWidth
          multiline
          rows={4}
        />
        <br /><br />
        <div className='flex-wrapper'>
        <TextField
          {...register('priority', { required: true })}
          label="Priority"
          variant="outlined"
          select
          defaultValue=""
          style={{width:"50%"}}
          inputProps={{ className: "test" }}
        >
          <MenuItem value="low">Low</MenuItem>
          <MenuItem value="medium">Medium</MenuItem>
          <MenuItem value="high">High</MenuItem>
        </TextField>
        <label className="custom-input">
            <p>Expected Completion Date</p>
          <input
          type="date" 
          name="date"
          {...register('date', { required: true })}
          label="Date"
          variant="outlined"
          defaultValue=""
          onChange={showDate}
        //   renderInput={(params) => <TextField {...params} />}
           />
           </label>
           </div>
    <br /><br />
        <Button type="submit" variant="contained"  color="primary">
          Submit
        </Button>
      </form>
      </LocalizationProvider>
  )
}

export default Form