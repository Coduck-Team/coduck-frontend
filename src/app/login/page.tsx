import {
  Avatar,
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  TextField,
  Typography,
} from '@mui/material';
import { LockOutlined } from '@mui/icons-material';

import LoginSubmitBox from './SubmitBox';

import Copyright from '@/components/Copyright';
import CustomLink from '@/components/CustomLink';

export default function Login() {
  return (
    <>
      <Box
        sx={{
          mt: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlined />
        </Avatar>
        <Typography component='h1' variant='h5'>
          Login
        </Typography>
        <LoginSubmitBox>
          <TextField
            margin='normal'
            required
            fullWidth
            id='email'
            label='Email Address'
            name='email'
            autoComplete='email'
            autoFocus
          />
          <TextField
            margin='normal'
            required
            fullWidth
            name='password'
            label='Password'
            type='password'
            id='password'
            autoComplete='current-password'
          />
          <FormControlLabel
            control={<Checkbox value='remember' color='primary' />}
            label='Remember me'
          />
          <Button type='submit' fullWidth variant='contained' sx={{ mt: 3, mb: 2 }}>
            Login
          </Button>
          <Grid container>
            <Grid item xs>
              <CustomLink href='#' variant='body2'>
                Forgot password?
              </CustomLink>
            </Grid>
            <Grid item>
              <CustomLink href='/register' variant='body2'>
                {"Don't have an account? Sign Up"}
              </CustomLink>
            </Grid>
          </Grid>
        </LoginSubmitBox>
      </Box>
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </>
  );
}
