import React from 'react';
import SnackBar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';

const Toast = ({ open, handleClose, children, severity }) => {
  return(
    <SnackBar 
      open = {open}
      onClose = {handleClose}
      autoHideDuration={2000}
    >
      <Alert 
      onClose = {handleClose}
      variant ='filled'
      severity= {severity}
      >
        {children}
      </Alert>
    </SnackBar>
  );
}

export default Toast;