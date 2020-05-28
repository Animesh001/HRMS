import React from 'react';
import MaterialTable from 'material-table';

export default function MaterialTableDemo() {
  const [state, setState] = React.useState({
    columns: [
      { title: 'Name', field: 'name' },
      { title: 'Leave from', field: 'lfrom' },
      { title: 'Leave Upto', field: 'lupto', type: 'numeric' },
      { title: 'Leave Type', field: 'ltype' },
      { title: 'Employee Status', field: 'Estatus' },
      { title: 'Leave', field: 'l' },
      { title: 'Leave Reason', field: 'lreason' },
      { title: 'Total Leave', field: 'tl' },
      { title: 'Leave Taken', field: 'lt' },
      { title: 'Leave Status', field: 'lstatus' },






    //   {
    //     title: 'Birth Place',
    //     field: 'birthCity',
    //     lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
    //   },
    ],
    data: [
    {   name: 'Mehmet', 
        lfrom: '24/04/2020',
        lupto:'26/04/2020', 
        ltype: "CL" ,
        Estatus:"Confirmed",
        l:"Full Day",
        lreason:"Due to high fever",
        lstatus:"Approved",
        tl:36,
        lt:5,



    },
    {   name: 'Animesh', 
    lfrom: '24/04/2020',
    lupto:'26/04/2020', 
    ltype: "CL" ,
    Estatus:"Confirmed",
    l:"Full Day",
    lreason:"Due to high fever",
    lstatus:" Not Approved",
    tl:36,
    lt:10,

},
    ],
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
                data.splice(data.indexOf(oldData), 1);
                return { ...prevState, data };
              });
            }, 600);
          }),
      }}
    />
  );
}
