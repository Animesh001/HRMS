import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';




const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  row: {
    height: '42px',
    display: 'flex',
    alignItems: 'center',
    marginTop: theme.spacing(1)
  },
  spacer: {
    flexGrow: 1
  },
  importButton: {
    marginRight: theme.spacing(1)
  },
  exportButton: {
    marginRight: theme.spacing(1)
  },
  searchInput: {
    marginRight: theme.spacing(1)
  }
}));

const UsersToolbar = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
      {/* <div className={classes.row}>
        <span className={classes.spacer} />
        
        <Button
          color="primary"
          variant="contained"
        >
          Approved
        </Button>
      </div> */}
<div>
<TextField
          id="outlined-helperText"
          defaultValue="Date from"
          helperText="Search by Leave From"
          variant="outlined"
          type="Date"
        />
        <TextField
          id="outlined-helperText"
          defaultValue="Date To"
          helperText="Search by Leave Upto"
          variant="outlined"
          type="Date"
        />



        </div>
    </div>
  );
};

UsersToolbar.propTypes = {
  className: PropTypes.string
};

export default UsersToolbar;
