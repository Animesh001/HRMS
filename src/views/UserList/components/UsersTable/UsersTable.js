import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Spinner from 'react-spinner-material';
import { Button } from '@material-ui/core';
import Swal from 'sweetalert2';
import axios from '../../../../axios-routes';
const currencies = [
  {
    value: 'INDIA',
    label: 'INDIA',
  },
  {
    value: 'USA',
    label: 'USA',
  },
  {
    value: 'AUSTRALIA',
    label: 'AUSTRALIA',
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
    let data = new FormData();
    const [isLoading, setIsLoading] = React.useState(false);
const [Emp, setEmp] = React.useState({country: "INDIA"});
   const classes = useStyles();


const imgAdd = (e ,field)=> {

  let emp = {...Emp , [field]: e.target.files[0]};
  setEmp(emp);
  console.log(Emp);
}
   const consoleLogger = (e , field) => {
    let emp ;
 
      emp = {...Emp , [field]: e.target.value};

      setEmp(emp);
      console.log(Emp)
  }
const onSubmitHandler = ()=> {
setIsLoading(true)
  
let emp = {...Emp};
   let fname = "";
   let mname = "";
   let lname = "";
if(!emp.doc1===undefined || !emp.doc2===undefined  || !emp.name===undefined  || !emp.phone===undefined  || !emp.email===undefined  || !emp.dob ===undefined|| !emp.joinDate === undefined  ){
  return Swal.fire('Incomplete Form', 'Please Fill All The Details', 'error')
}

  Object.keys(emp).forEach(key => {
   
    if(key !== "fName" || key !== "mName" || key !== "lName"){
      data.append([key], emp[key]);
    } 
    if(key === "lName"){
      lname =  emp[key];
      console.log( fname+ " " + mname +" " + lname);
      data.append('name', fname+" " + mname + " " + lname);
    } else if(key === "mName") {
      mname  = emp[key];
    } else if(key === "fName"){
      fname =  emp[key];
    }
 
  })

  const config = {     
    headers: { 'content-type': 'multipart/form-data' }
}
  axios.post("/addEmployee", data, config)
    .then(response => {
      setIsLoading(false);
       if(response.data.code === 0){
        Swal.fire('Success', 'Employee Added Successfully!', 'success');
       } else {
        Swal.fire('Oops...', response.data.msg, 'error')
       }
       setEmp({});
    })
    .catch(error => {
      setIsLoading(false);
        Swal.fire('Oops...', 'Connection Error', 'error')
    });
}


      // render(){
  return (
    <div>
    { isLoading ?  <div style={{paddingLeft: "40%"}}>
      <Spinner radius={120} color={"#333"} stroke={2} visible={true} />
    </div> :  
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
      onChange={(e ) => consoleLogger(e, "fName")}
    />
      <TextField
      required
      id="outlined-required"
      label="Middle Name"
      variant="outlined"
      onChange={(e ) => consoleLogger(e, "mName")}
    />
      <TextField
      required
      id="outlined-required"
      label="Last Name"
      variant="outlined"
      onChange={(e ) => consoleLogger(e, "lName")}
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
      onChange={(e ) => consoleLogger(e, "address1")}
    />
      <TextField
      required
      id="outlined-required"
      label="Street Address Line2"
      variant="outlined"
      onChange={(e ) => consoleLogger(e, "address2")}
    />
   
  </div>
  <div>
  <TextField
      required
      id="outlined-required"
      label="City"
      variant="outlined"
      onChange={(e ) => consoleLogger(e, "city")}
    />
      <TextField
      required
      id="outlined-required"
      label="State"
      variant="outlined"
      onChange={(e ) => consoleLogger(e, "state")}
    />
      <TextField
      required
      id="outlined-required"
      label="Zip code"
      variant="outlined"
      onChange={(e ) => consoleLogger(e, "zip")}
    />
  <TextField
          id="outlined-select-currency-native"
          select
          label="Country"

          onChange={(e ) => {consoleLogger(e, "country")}}
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
      onChange={(e ) => consoleLogger(e, "phone")}
    />
     <TextField
      required
      id="outlined-required"
      label="Email"
      variant="outlined"
      onChange={(e ) => consoleLogger(e, "email")}
    />
     <TextField
      required
      id="outlined-required"
      label="Emergency cont"
      variant="outlined"
      onChange={(e ) => consoleLogger(e, "emergencyContact")}
    />
     <TextField
       id="date"
       label="Date Of Birth"
       type="date"
       variant="outlined"
       defaultValue=""
       className={classes.textField}
       InputLabelProps={{
         shrink: true,
       }}
      onChange={(e ) => consoleLogger(e, "dob")}
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
      onChange={(e ) => consoleLogger(e, "posTitle")}
    />
     <TextField
      required
      id="outlined-required"
      label="Report To"
      variant="outlined"
      onChange={(e ) => consoleLogger(e, "reportTo")}
    />
     <TextField
      required
      id="outlined-required"
      label="Employment Type"
      variant="outlined"
      onChange={(e ) => consoleLogger(e, "empType")}
    />
      <TextField
      required
      id="outlined-required"
      label="Department"
      variant="outlined"
      onChange={(e ) => consoleLogger(e, "dept")}
    />
     <TextField
    id="date"
    label="Joining Date"
    type="date"
    variant="outlined"
    defaultValue={new Date().toISOString()}
    className={classes.textField}
    InputLabelProps={{
      shrink: true,
    }}
    onChange={(e ) => consoleLogger(e, "joinDate")}
  />
   <TextField
    id="date"
    label="End Date(if required)"
    type="date"
    variant="outlined"
    defaultValue=""
    className={classes.textField}
    InputLabelProps={{
      shrink: true,
    }}
    onChange={(e ) => consoleLogger(e, "endDate")}
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
      onChange={(e ) => consoleLogger(e, "lastOrg1")}
    />
     <TextField
      required
      id="outlined-required"
      label="Duration"
      variant="outlined"
      onChange={(e ) => consoleLogger(e, "duration1")}
    />
     <TextField
      required
      id="outlined-required"
      label="Designation"
      variant="outlined"
      onChange={(e ) => consoleLogger(e, "designation1")}
    />
    <TextField
      required
      id="outlined-required"
      label="Last Organization"
      variant="outlined"
      onChange={(e ) => consoleLogger(e, "lastOrg2")}
    />
     <TextField
      required
      id="outlined-required"
      label="Duration"
      variant="outlined"
      onChange={(e ) => consoleLogger(e, "duration2")}
    />
     <TextField
      required
      id="outlined-required"
      label="Designation"
      variant="outlined"
      onChange={(e ) => consoleLogger(e, "designation2")}
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
      onChange={(e ) => consoleLogger(e, "bankAccNo")}
    />
    <TextField
      required
      id="outlined-required"
      label="Account Name"
      variant="outlined"
      onChange={(e ) => consoleLogger(e, "AccHolderName")}
    />
    <TextField
      required
      id="outlined-required"
      label="Tax File No"
      variant="outlined"
      onChange={(e ) => consoleLogger(e, "taxFileNo")}
    />
    <TextField
      required
      id="outlined-required"
      label="Bank Name"
      variant="outlined"
      onChange={(e ) => consoleLogger(e, "bankName")}
    />
    <TextField
      id="outlined"
      label="Account Type"
      variant="outlined"
      onChange={(e ) => consoleLogger(e, "accType")}
    />
    <TextField
      required
      id="outlined-required"
      label="IFSC Code"
      variant="outlined"
      onChange={(e ) => consoleLogger(e, "ifsc")}
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
      onChange={(e ) => imgAdd(e, "doc1")}
    />
     <TextField
      type="file"
      required
      variant="outlined"
      onChange={(e ) => imgAdd(e, "doc2")}
    />


      </div>
      <div className="d-flex justify-content-center">
             <div>
        <br/>
      <Button
          color="primary"
          variant="contained"
          onClick={onSubmitHandler}
          type="reset"
          
        >
          Add employee
        </Button>
        </div>
      </div>
</form>
 } 
 </div>
  );
  
}

// export default FormPropsTextFields;
