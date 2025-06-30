import type { Metadata } from 'next';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { Container, ThemeProvider } from '@mui/material';

import theme from '../theme';

import './globals.css';
// import Navigation from '@/components/Navigation';
import Header from '@/components/Header';

export const metadata: Metadata = {
  title: 'coduck',
  description: 'coduck~',
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
            <Container component='main' maxWidth={false} disableGutters>
              {/* <Navigation /> */}
              <Header />
              {children}
            </Container>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
