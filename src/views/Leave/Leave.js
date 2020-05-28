import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';

import { LeaveToolbar, LeaveTable } from './components';
// import mockData from './data';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  content: {
    marginTop: theme.spacing(2)
  }
}));

const Leave = () => {
  const classes = useStyles();

  const [leaves] = useState();

  return (
    <div className={classes.root}>
      <LeaveToolbar/>
      <div className={classes.content}>
        <LeaveTable leaves={leaves} />
      </div>
    </div>
  );
};

export default Leave;
