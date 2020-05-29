import React, {useEffect} from 'react';
import MaterialTable from 'material-table';
import Swal from 'sweetalert2';
import axios from '../../../../axios-routes';
import { EmplogTable } from '..';
export default function MaterialTableDemo() {
  const [state, setState] = React.useState({
    requestd : false,
    columns: [
      { title: 'Name', field: 'name' },
      { title: 'Address 1', field: 'address1' },
      { title: 'Address 2', field: 'address2' },
      { title: 'Contact', field: 'phone', type: 'numeric' },
      { title: 'Position Info', field: 'post' },
      { title: 'Exprieance Info', field: 'Exinfo' },
      { title: 'Bank Info', field: 'Bank' },



    //   {
    //     title: 'Birth Place',
    //     field: 'birthCity',
    //     lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
    //   },
    ],
    data: [ ],
  });


  useEffect(() => {    // Update the document title using the browser API 
    const data = {...state}; 
    if(state.requestd == false) {
  axios.post("/listEmployee", {}).then(response => {
    
      let Empdata = {...state , requestd:true};
      let list = [];
  
      //console.log(response.data.result);
      Empdata.data = response.data.result;
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
        onRowAdd: (newData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              setState((prevState) => {
                const data = [...prevState.data];
                data.push(newData);
                return { ...prevState, data };
              });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              if (oldData) {
                setState((prevState) => {
                  
                  axios.post("/update", newData).then(result => {
                    if(result.data.code ==0){
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
                       if(result.data.code ==0){
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
