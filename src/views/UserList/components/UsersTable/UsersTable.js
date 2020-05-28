import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';

const currencies = [
  {
    value: 'India',
    label: 'India',
  },
  {
    value: 'USA',
    label: 'USA',
  },
  {
    value: 'USD',
    label: 'Australia',
  },
];


const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
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
       <h1>Personal Information</h1>
     </div>
  <div>
    <TextField
      required
      id="outlined-required"
      label="First Name"
      variant="outlined"
    />
      <TextField
      required
      id="outlined-required"
      label="Middle Name"
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
       <h3>Address</h3>
     </div>
  <div>
  <TextField
      required
      id="outlined-required"
      label="Street Address"
      variant="outlined"
    />
      <TextField
      required
      id="outlined-required"
      label="Street Address Line2"
      variant="outlined"
    />
   
  </div>
  <div>
  <TextField
      required
      id="outlined-required"
      label="City"
      variant="outlined"
    />
      <TextField
      required
      id="outlined-required"
      label="State"
      variant="outlined"
    />
      <TextField
      required
      id="outlined-required"
      label="Zip code"
      variant="outlined"
    />
  <TextField
          id="outlined-select-currency-native"
          select
          label="Country"
          value={currency}
          onChange={handleChange}
          SelectProps={{
            native: true,
          }}
          helperText="Please select your country"
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
       <h3>Contact Details</h3>
     </div>

     <div>
  <TextField
      required
      id="outlined-required"
      label="Phone no"
      variant="outlined"
    />
     <TextField
      required
      id="outlined-required"
      label="Email"
      variant="outlined"
    />
     <TextField
      required
      id="outlined-required"
      label="Emergency cont"
      variant="outlined"
    />
     <TextField
      required
      id="outlined-required"
      label="Birth Date"
      variant="outlined"
    />
    </div>
    <div>
       <h3>Position Details</h3>
     </div>
     <div>
  <TextField
      required
      id="outlined-required"
      label="Position Title"
      variant="outlined"
    />
     <TextField
      required
      id="outlined-required"
      label="Report To"
      variant="outlined"
    />
     <TextField
      required
      id="outlined-required"
      label="Employment Type"
      variant="outlined"
    />
      <TextField
      required
      id="outlined-required"
      label="Department"
      variant="outlined"
    />
     <TextField
    id="date"
    label="Joining Date"
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
    label="End Date(if required)"
    type="date"
    variant="outlined"
    defaultValue="2017-05-24"
    className={classes.textField}
    InputLabelProps={{
      shrink: true,
    }}
  />
    </div>
    <div>
       <h3>Experiance Details</h3>
     </div>
     <div>
     <TextField
      required
      id="outlined-required"
      label="Last Organization"
      variant="outlined"
    />
     <TextField
      required
      id="outlined-required"
      label="Duration"
      variant="outlined"
    />
     <TextField
      required
      id="outlined-required"
      label="Designation"
      variant="outlined"
    />
    <TextField
      required
      id="outlined-required"
      label="Last Organization"
      variant="outlined"
    />
     <TextField
      required
      id="outlined-required"
      label="Duration"
      variant="outlined"
    />
     <TextField
      required
      id="outlined-required"
      label="Designation"
      variant="outlined"
    />
       </div>
    <div>
       <h3>Bank & Tax Details</h3>
     </div>
     <div>
  <TextField
      required
      id="outlined-required"
      label="Account No"
      variant="outlined"
    />
    <TextField
      required
      id="outlined-required"
      label="Account Name"
      variant="outlined"
    />
    <TextField
      required
      id="outlined-required"
      label="Tax File No"
      variant="outlined"
    />
    <TextField
      required
      id="outlined-required"
      label="Bank Name"
      variant="outlined"
    />
    <TextField
      id="outlined"
      label="Account Type"
      variant="outlined"
    />
    <TextField
      required
      id="outlined-required"
      label="IFSC Code"
      variant="outlined"
    />
    </div>
    <div>
       <h3>Upload Docs</h3>
     </div>
    <div>
    <TextField
      type="file"
      required
      variant="outlined"
    />
     <TextField
      type="file"
      required
      variant="outlined"
    />
      </div>
</form>

  );
  
}

// export default FormPropsTextFields;
