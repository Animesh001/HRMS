import React from 'react';
import MaterialTable from 'material-table';

export default function MaterialTableDemo() {
  const [state, setState] = React.useState({
    columns: [
      { title: 'Name', field: 'name' },
      { title: 'Address', field: 'Add' },
      { title: 'Contact', field: 'cont', type: 'numeric' },
      { title: 'Position Info', field: 'post' },
      { title: 'Exprieance Info', field: 'Exinfo' },
      { title: 'Bank Info', field: 'Bank' },



    //   {
    //     title: 'Birth Place',
    //     field: 'birthCity',
    //     lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
    //   },
    ],
    data: [
      { name: 'Mehmet', 
      Add: 'Dangipara near rajendra prasad girls high school Siliguri',
       cont:7602335491, post: "Guest faulty" ,Exinfo:"4 years",
      Bank:"Hdfc",
    },
    { name: 'Animesh', 
    Add: 'Dangipara near rajendra prasad girls high school Siliguri',
     cont:7602335491, post: "Guest faulty" ,Exinfo:"4 years",
    Bank:"Hdfc",
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
