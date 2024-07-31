import type { Metadata } from 'next';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { Container, ThemeProvider } from '@mui/material';

import theme from '../theme';

import './globals.css';
import Navigation from '@/components/Navigation';

export const metadata: Metadata = {
  title: 'Bibimbap',
  description: 'A delicious Korean dish',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <Container component='main'>
              <Navigation />
              {children}
            </Container>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
