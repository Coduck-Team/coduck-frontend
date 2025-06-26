'use client';
import { Roboto } from 'next/font/google';
import { createTheme } from '@mui/material/styles';
import { mainModule } from 'process';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const theme = createTheme({
  palette: {
    primary: {
      main: '#ffcc33',
      contrastText: '#000000',
    },
    secondary: {
      main: '#fff1c2', // #fffde7
      contrastText: '#000000',
    },
    info: {
      main: '#fff7cc',
      contrastText: '#000000',
    },
    background: {
      default: '#ffffff',
      paper: '#f9f9f9',
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
});

export default theme;
