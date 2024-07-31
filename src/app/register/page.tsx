import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Grid,
  TextField,
  Typography,
  FormControlLabel,
} from '@mui/material';
import { LockOutlined } from '@mui/icons-material';
import Copyright from '@/components/Copyright';
import CustomLink from '@/components/CustomLink';
import RegisterSubmitBox from './SubmitBox';
import TACModal from '@/components/TACModal';

export default function SignUp() {
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
          Register
        </Typography>
        <RegisterSubmitBox>
          <TextField
            margin='normal'
            autoComplete='given-name'
            name='firstName'
            required
            fullWidth
            id='firstName'
            label='First Name'
            autoFocus
          />
          <TextField
            margin='normal'
            required
            fullWidth
            id='lastName'
            label='Last Name'
            name='lastName'
            autoComplete='family-name'
          />
          <TextField
            margin='normal'
            required
            fullWidth
            id='email'
            label='Email Address'
            name='email'
            autoComplete='email'
          />
          <TextField
            margin='normal'
            required
            fullWidth
            id='username'
            label='Username'
            name='username'
            autoComplete='username'
          />
          <TextField
            margin='normal'
            required
            fullWidth
            name='password'
            label='Password'
            type='password'
            id='password'
            autoComplete='new-password'
          />
          <TextField
            margin='normal'
            required
            fullWidth
            name='confirmPassword'
            label='Confirm Password'
            type='password'
            id='confirmPassword'
            autoComplete='new-password'
          />
          <Grid container justifyContent='space-between' alignItems='center'>
            <FormControlLabel
              control={<Checkbox value='agreeTAC' color='primary' />}
              label='I agree to the terms and conditions.'
            />
            <TACModal />
          </Grid>
          {/* <FormControlLabel
            control={<Checkbox value='allowExtraEmails' color='primary' />}
            label='I want to receive inspiration, marketing promotions and updates via email.'
          /> */}
          <Button
            type='submit'
            fullWidth
            variant='contained'
            sx={{ mt: 3, mb: 2 }}
          >
            Register
          </Button>
          <Grid container justifyContent='flex-end'>
            <Grid item>
              <CustomLink href='#' variant='body2'>
                Already have an account? Login
              </CustomLink>
            </Grid>
          </Grid>
        </RegisterSubmitBox>
      </Box>
      <Copyright sx={{ mt: 5, mb: 4 }} />
    </>
  );
}
