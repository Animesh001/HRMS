import React , {useEffect} from 'react';
import MaterialTable from 'material-table';
import Swal from 'sweetalert2';
import axios from '../../../../axios-routes';
export default function MaterialTableDemo() {
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
; 
    if(state.requestd === false) {
  axios.post("/leaveLog", {
    "from": "2020-05-01",
    "to": "2020-05-30"
    
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

  return (
    <MaterialTable
      title="Employee Logbook"
      columns={state.columns}
      data={state.data}
      editable={{
       
      }}
    />
  );
}
