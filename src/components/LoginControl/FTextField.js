import React from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import { TextField } from '@mui/material';

function FTextField({ name, rules, ...other }) {
  const { control } = useFormContext(); // Ensure this is not null
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          fullWidth
          error={!!error}
          helperText={error?.message}
          {...other}
        />
      )}
    />
  );
}

export default FTextField;