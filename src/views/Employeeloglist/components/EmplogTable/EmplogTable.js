import React, {useEffect} from 'react';
import MaterialTable from 'material-table';
import Swal from 'sweetalert2';
import axios from '../../../../axios-routes';
export default function MaterialTableDemo() {
  const [state, setState] = React.useState({
    requestd : false,
    columns: [
      { title: 'Name', field: 'name' },
      { title: 'Address1', field: 'address1' },
      { title: 'Contact', field: 'phone', type: 'numeric' },
      { title: 'Emergency ', field: 'emergencyContact', type: 'numeric' },
      { title: 'Email', field: 'email' },
      { title: 'Position', field: 'posTitle' },
      { title: 'Last Org', field: 'lastOrg1' },
      { title: 'Reports To', field: 'reportTo' },
      { title: 'Leaves Remaining', field: 'leaveRemaining' },
      //   {
    //     title: 'Birth Place',
    //     field: 'birthCity',
    //     lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
    //   },
    ],
    data: [ ],

  });


  useEffect(() => {    // Update the document title using the browser API 
 
    if(state.requestd === false) {
  axios.post("/listEmployee", {}).then(response => {
    let result = response.data.result;
    for(let i=0;i<result.length;i++){
      if(result[i].dob !== undefined || result[i].dob!==null){
        result[i].dob = result[i].dob.substring(0,10);
      } 
      if(result[i].joinDate !== undefined || result[i].joinDate!==null){
        result[i].joinDate = result[i].joinDate.substring(0,10);
      }
      if(!result[i].endDate === undefined || !result[i].endDate===null){
        result[i].endDate = result[i].endDate.substring(0,10);
      } else {
        result[i].endDate = "";
      }
    }


      let Empdata = {...state , requestd:true};
      //console.log(response.data.result);
      Empdata.data = result;
      setState(Empdata);
     }).catch(err => {
       console.log(err);
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

      // other props
      detailPanel={rowData => {
        return (
          <div>
    <br/>    <br/>
   <div className="d-flex justify-content-center">
      <div>
        <h2>Employee Details</h2>
        </div>
   </div>
   <div style={{paddingLeft:"3%"}}>
     <br/>
   <h5>Personal Details</h5>
   <br/>
   <div style={{paddingLeft:"8%"}}>
      <p>Name : {rowData.name}</p>
      <p>Contact : {rowData.phone}</p>
      <p>Emergency Contact : {rowData.emergencyContact}</p>
      <p>Email : {rowData.email}</p>
        <p>Address 1: {rowData.address1}</p>
        <p>Address 2: {rowData.address2}</p>
        <p>City: {rowData.city}</p>
        <p>State: {rowData.state}</p>
      <p>Country:{rowData.country}</p>

        <p>Date Of Birth:{rowData.dob}</p>
  
       
       
      </div>

      <br/>
   <h5>Work Details</h5>
   <br/>
   <div style={{paddingLeft:"8%"}}>
  
        <p>Joining Date: { rowData.joinDate }</p>
        <p>End Date:{ rowData.endDate}</p>
      <p>Last Organization 1: {rowData.lastOrg1}</p>
        <p> Duration :{rowData.duration1}</p>
      <p>Designation : {rowData.designation1}</p>
      <p>Last Organization 2: {rowData.lastOrg2}</p>
        <p> Duration :{rowData.duration2}</p>
      <p>Designation : {rowData.designation2}</p>
      </div>


      <br/>
   <h5>Bank Details</h5>
   <br/>
   <div style={{paddingLeft:"8%"}}>
  
        <p>Bank Name: {rowData.bankName}</p>
        <p>Account No: {rowData.bankAccNo}</p>
      <p>Accounnt Holder Name: {rowData.AccHolderName}</p>
        <p> Tax File No. :{rowData.taxFileNo}</p>
      <p>Account Type : {rowData.accType}</p>
      <p>Bank IFSC: {rowData.ifsc}</p>
      </div>
      <br/>
   <h5>Documents Uploaded</h5>
   <br/>
   <div style={{paddingLeft:"8%"}} >
  
   <img style={{height: "200px" , paddingRight:"5%"}} src={rowData.doc1} /> 
   <img style={{height: "200px"}} src={rowData.doc2} />
      </div>
<br/>

      </div>
   </div>  
        )
      }}
    
      editable={{
       
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              if (oldData) {
                console.log("old" ,oldData)
                setState((prevState) => {
                
                  axios.post("/update", newData).then(result => {
                    if(result.data.code ===0){
                     Swal.fire('Success', 'Updated Successfully', 'success')
                    } else {
                     Swal.fire('Oops...', 'Connection Error', 'error')
                    }
               });
                  const data = [...prevState.data];
                  data[data.indexOf(oldData)] = newData;
                  return { ...prevState, data };
                });
              }
            }, 600);
          }),
        onRowDelete: (oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              setState((prevState) => {
                const data = [...prevState.data];
                let dataToDelete = data[data.indexOf(oldData)];
                  dataToDelete.deleted = true;
                  axios.post("/update", dataToDelete).then(result => {
                       if(result.data.code ===0){
                        Swal.fire('Success', 'Deleted Successfully', 'success')
                       } else {
                        Swal.fire('Oops...', 'Connection Error', 'error')
                       }
                  });
                data.splice(data.indexOf(oldData), 1);
                return { ...prevState, data };
              });
            }, 600);
          }),
      }}
    />
  );
}
