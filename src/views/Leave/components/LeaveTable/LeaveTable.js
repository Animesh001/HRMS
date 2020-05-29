import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import { Button } from '@material-ui/core';
const currencies = [
    {
      value: 'India',
      label: 'CL',
    },
    {
      value: 'USA',
      label: 'PL',
    },
    {
      value: 'USD',
      label: 'SL',
    },
    {
        value: 'US',
        label: 'COMP-OFF',
      },
      {
        value: 'USt',
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
      />
      <TextField
        required
        id="outlined-required"
        label=" First Name"
        variant="outlined"
      />
      <TextField
        required
        id="outlined-required"
        label="Last Name"
        variant="outlined"
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
    defaultValue="2017-05-24"
    className={classes.textField}
    InputLabelProps={{
      shrink: true,
    }}
  />

<TextField
    id="date"
    label="To"
    type="date"
    variant="outlined"
    defaultValue="2017-05-24"
    className={classes.textField}
    InputLabelProps={{
      shrink: true,
    }}
  />

<TextField
          id="outlined-select-currency-native"
          select
          label="Leave Types"
          value={currency}
          onChange={handleChange}
          SelectProps={{
            native: true,
          }}
          helperText="Please select Leave type"
          variant="outlined"
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
          value={currency}
          onChange={handleChange}
          SelectProps={{
            native: true,
          }}
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
          value={currency}
          onChange={handleChange}
          SelectProps={{
            native: true,
          }}
          helperText="Please select Leave"
          variant="outlined"
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
        />
           </div>
           <div className="d-flex justify-content-center">
             <div>
           <Button
          color="primary"
          variant="contained"
        >
          Approved
        </Button>
        </div>
           </div>
      </form>
);
    }
