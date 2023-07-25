import { Alert, AlertColor, Snackbar } from '@mui/material';
import React, { createContext, useState, useContext } from 'react';

interface snackbarContextType {
  addSnackbar: (message: string, color: AlertColor) => void,
  hideSnackbar: () => void,
}

const SnackbarContext = React.createContext({} as snackbarContextType);

const useSnackbar = () => {
  return useContext(SnackbarContext)
}

const SnackbarProvider = ({ children }: { children: React.ReactNode }) => {

  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [color, setColor] = useState<AlertColor>('success')

  const addSnackbar = (message: string, color: AlertColor) => {
    setMessage(message);
    setColor(color);
    setOpen(true);
  };

  

  const hideSnackbar = () => {
    setMessage('')
    setOpen(false);
  };

  const value = {
    addSnackbar,
    hideSnackbar,
  };

  const handleClose = () => {
    setOpen(false);
  }

  return (
    <SnackbarContext.Provider value={value}>

      {children}

      <Snackbar
        open={open}
        autoHideDuration={5000}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <Alert onClose={handleClose} severity={color} sx={{ width: '100%' }} elevation={6} variant='filled'>
          {message}
        </Alert>
      </Snackbar>

    </SnackbarContext.Provider>
  );
}

export { useSnackbar, SnackbarProvider, type snackbarContextType }