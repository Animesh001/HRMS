import React, {useState}from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import axios from '../../../../axios-routes';
import { Button } from '@material-ui/core';
import Swal from 'sweetalert2';
const currencies = [
    {
      value: 'CL',
      label: 'CL',
    },
    {
      value: 'PL',
      label: 'PL',
    },
    {
      value: 'SL',
      label: 'SL',
    },
    {
        value: 'COMP-OFF',
        label: 'COMP-OFF',
      },
      {
        value: 'LWP',
        label: 'LWP',
      },
  ];

  const curr = [
    {
      value: 'Ind1',
      label: 'Probation',
    },
    {
        value: 'In2',
        label: 'Confirmed',
      },
];

const cur = [
  {
    value: '1',
    label: 'Full Day',
  },
  {
      value: '2',
      label: 'Half Day',
    },
];



const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(2),
        width: '50ch',
      },
    },
  }));

  // export class UsersTable extends React.Component{
    export default function FormPropsTextFields() {
     const classes = useStyles();
     const [currency, setCurrency] = React.useState('EUR');
  
     const handleChange = (event) => {
       setCurrency(event.target.value);
     };

    
     const [leaveData, setLeaveData]  = useState({phone: "" ,name: "" ,leaveType:"CL" ,empStatus:"Ind1",leaveTime: "1"});
     const dataHandler =(e, field )=> {
       let ph =e.target.value;
      let data = {...leaveData , [field]: e.target.value};
      setLeaveData({...data})
      console.log(leaveData);
       if(field ==='phone' && ph.length === 10 ){
           axios.post("/findEmployee",{ phone: e.target.value}).then(result => {
             if(result.data.result.length > 0){
              let name = result.data.result[0].name;
              let data = {...leaveData , name: name , phone: ph};
            setLeaveData({...data})
             } else{
               setLeaveData({phone: "" ,name: "" ,leaveType:"CL" ,empStatus:"Ind1",leaveTime: "1"});
              Swal.fire('Oops...', 'Employee Not Found Make Sure You Entered Registered Mobile No.', 'error')
             }
            
           })
       }
         
     }
   
     const onSubmitHandler = () => {
       axios.post("/addLeave", leaveData).then(res => {
        Swal.fire('Successful', 'Leave Added Successfully', 'success')
       }).catch(err => {
        Swal.fire('Oops...', 'Failed To Add Leave', 'error')
       });
     }
   
        // render(){
    return (
     <form className={classes.root} noValidate autoComplete="off">
       <div>
         <h1>Employee Leave Form</h1>
       </div>
    <div>

    <TextField
        required
        id="outlined-required"
        label="Mobile No"
        variant="outlined"
        value={leaveData.phone}
        onChange={(e) => dataHandler(e, 'phone')}
      />
      <TextField
        required
        id="outlined-required"
        label=" First Name"
        value = {leaveData.name.split(" ")[0]}
        variant="outlined"
      disabled
      />
      <TextField
        required
        id="outlined-required"
        label="Last Name"
        value = {(leaveData.name.split(" ")[2] !==undefined ? leaveData.name.split(" ")[2]:"")}
        variant="outlined"
        disabled
      />
      </div>
      <div>
         <h3>Leave Date Details</h3>
       </div>
       <div>
       <TextField
    id="date"
    label="From"
    type="date"
    variant="outlined"
    defaultValue={new Date()}
    className={classes.textField}
    InputLabelProps={{
      shrink: true,
    }}
    onChange={(e) => dataHandler(e, 'leaveFrom')}
  />

<TextField
    id="date"
    label="To"
    type="date"
    variant="outlined"
    defaultValue={new Date()}
    className={classes.textField}
    InputLabelProps={{
      shrink: true,
    }}
    onChange={(e) => dataHandler(e, 'leaveTo')}
  />

<TextField
          id="outlined-select-currency-native"
          select
          label="Leave Types"
          defaultValue={leaveData.leaveType}
          
          SelectProps={{
            native: true,
          }}
          helperText="Please select Leave type"
          variant="outlined"
          onChange={(e) => dataHandler(e, 'leaveType')}
        >
          {currencies.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
           </div>
           <div>
         <h3>Employee Status</h3>
       </div>
       <div>
       <TextField
          id="outlined-select-currency-native"
          select
          label="Employee Status"
          defaultValue={leaveData.empStatus}
         // onChange={}
          SelectProps={{
            native: true,
          }}
          onChange={(e) => {dataHandler(e, 'empStatus'); handleChange(e)}}
          helperText="Please select Employee status"
          variant="outlined"
        >
          {curr.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>

        <TextField
          id="outlined-select-currency-native"
          select
          label="Leave"
          defaultValue={leaveData.leaveTime}
         
          SelectProps={{
            native: true,
          }}
          helperText="Please select Leave"
          variant="outlined"
          onChange={(e) => {dataHandler(e, 'leaveTime');handleChange(e)}}
        >
          {cur.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
           </div>
           <div>
         <h3>Leave Reason</h3>
       </div>
       <div>
       

<TextField
          id="outlined-multiline-static"
          label="Reason"
          multiline
          rows={9}
          variant="outlined"
          width="150ch"
          onChange={(e) => dataHandler(e, 'reason')}
          
        />
           </div>
           <div className="d-flex justify-content-center">
             <div>
           <Button
          color="primary"
          variant="contained"
          onClick={onSubmitHandler}
          type="reset"
        >
          Add Leave
        </Button>
        </div>
           </div>
      </form>
);
    }
