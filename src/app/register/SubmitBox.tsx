'use client';
import { FormEvent } from 'react';
import { Box } from '@mui/material';

export default function RegisterSubmitBox({
  children,
}: {
  children: React.ReactNode;
}) {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };
  return (
    <Box
      component='form'
      onSubmit={handleSubmit}
      noValidate
      sx={{ mt: 3, maxWidth: { xs: '75vw', sm: '50vw' }, width: '100%' }}
    >
      {children}
    </Box>
  );
}
