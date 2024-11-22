import React from 'react';
import { Modal, Box, Typography, Button } from '@mui/material';
import { useForm, FormProvider } from 'react-hook-form';
import { useAuth } from './AuthContext';
import FTextField from './FTextField';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function LoginModal({ open, onClose, onSuccess }) {
  const { login } = useAuth();
  const methods = useForm({
    defaultValues: {
      username: 'testuser', // Set the default username
      password: 'coderschool123', // Set the default password
    },
  });
  console.log('Methods:', methods);

  const onSubmit = (data) => {
    const { username, password } = data;
    if (login(username, password)) {
      onSuccess();
    } else {
      alert('Fill in username or password');
    }
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="login-modal-title"
      aria-describedby="login-modal-description"
    >
      <Box sx={style}>
        <Typography id="login-modal-title" variant="h6" component="h2">
          Login
        </Typography>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <FTextField
              name="username"
              label="Username"
              rules={{ required: 'Username is required' }}
            />
            <FTextField
              name="password"
              label="Password"
              type="password"
              rules={{ required: 'Password is required' }}
            />
            <Box sx={{ mt: 2, display: 'flex', justifyContent: 'flex-end' }}>
              <Button onClick={onClose} color="secondary" sx={{ mr: 2 }}>
                Cancel
              </Button>
              <Button type="submit" variant="contained" color="primary">
                Login
              </Button>
            </Box>
          </form>
        </FormProvider>
      </Box>
    </Modal>
  );
}