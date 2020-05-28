import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';

import { LeavelogToolbar, LeavelogTable } from './components';
// import mockData from './data';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  content: {
    marginTop: theme.spacing(2)
  }
}));

const Leaveloglist = () => {
  const classes = useStyles();

  const [leavelog] = useState();

  return (
    <div className={classes.root}>
      <LeavelogToolbar/>
      <div className={classes.content}>
        <LeavelogTable leavelog={leavelog} />
      </div>
    </div>
  );
};

export default Leaveloglist;
