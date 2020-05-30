import React , {useEffect} from 'react';
import MaterialTable from 'material-table';
import Swal from 'sweetalert2';
import axios from '../../../../axios-routes';
import TextField from '@material-ui/core/TextField';

export default function MaterialTableDemo(props) {
  const [state, setState] = React.useState({
    requestd:false,
    columns: [
      { title: 'Name', field: 'name' },
      { title: 'Leave from', field: 'leaveFrom' },
      { title: 'Leave Upto', field: 'leaveTo' },
      { title: 'Leave Type', field: 'leaveType' },
      { title: 'Employee Status', field: 'status' },
      { title: 'Leave', field: 'time' },
      { title: 'Leave Reason', field: 'reason' },
      { title: 'Total Leave', field: 'total' },
      { title: 'Leave Remaining', field: 'leaveRemaining' },
     






    //   {
    //     title: 'Birth Place',
    //     field: 'birthCity',
    //     lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
    //   },
    ],
    data: [

    ],
  });

  useEffect(() => {    // Update the document title using the browser API 

    if(state.requestd === false) {
  axios.post("/leaveLog", {
    "from": date.from,
    "to": date.to
    
    }).then(response => {
    
      let Empdata = {...state , requestd:true};
      let list = [];
   
for(let i=0;i<response.data.result.length;i++){
   let changedVal = response.data.result[i];

   changedVal.leaveFrom = changedVal.leaveFrom.toString().substring(0,10);
   changedVal.leaveTo = changedVal.leaveTo.toString().substring(0,10);
   changedVal = {...changedVal , total : "36"}
   if(changedVal.empStatus === 'Ind1'){
     changedVal = {...changedVal , status: "Probation"}
   } else {
    changedVal = {...changedVal , status: "Probation"}
   }

   if(changedVal.leaveTime === "1") {
     changedVal = {...changedVal ,time:"Full Day" }
   } else{
    changedVal = {...changedVal ,time:"Half Day" }
   }

   list.push(changedVal);
}
console.log(list);
      //console.log(response.data.result);
      Empdata.data = list;
      setState(Empdata);
     }).catch(err => {
      Swal.fire('Oops...', 'Connection Error', 'error')
     })
    }  
    console.log("useEffect")
   });
   const [date, setDate] = React.useState({from: new Date().toISOString().substring(0,8) + "01" , to:  new Date().toISOString().substring(0,8) + "31"})

   const clickHandler=(e, field)=> {

     setDate({...date, [field]: e.target.value});
     console.log(date);
     if(field === 'to' ){
       setState({...state, requestd:false});
     }
   }
  return (
    <div>
<div className="d-flex justify-content-center">
  <div>
    <TextField
          id="outlined-helperText"
          defaultValue={date.from}
          helperText="Search by Leave From"
          variant="outlined"
          type="Date"
          onChange={(e) =>clickHandler(e, 'from')}
          
          className="col-md-4 col-sm-12"
        />
      {"  "}

        <TextField
          id="outlined-helperText"
          defaultValue={date.to}
          helperText="Search by Leave Upto"
          variant="outlined"
          type="Date"
          onChange={(e) =>clickHandler(e, 'to')}
          style={{width:"30pc"}}
          className="col-md-4 col-sm-12"
        />
        </div>
</div>
<br/>
<div className="row">
    <MaterialTable
      title="Employee Logbook"
      columns={state.columns}
      data={state.data}
      editable={{
       
      }}

      
    />
   </div> 
   </div>
  );
}
