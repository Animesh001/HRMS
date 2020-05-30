import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { EmplogToolbar, EmplogTable } from './components';
// import mockData from './data';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  content: {
    marginTop: theme.spacing(2)
  }
}));

const Employeeloglist = () => {
  const classes = useStyles();

  const [Emplog] = useState();

  return (
    <div className={classes.root}>
      <EmplogToolbar/>
      <div className={classes.content}>
        <EmplogTable Emplog={Emplog} />
      </div>
    </div>
  );
};

export default Employeeloglist;
