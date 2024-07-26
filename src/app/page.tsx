import Navigation from '@/components/Navigation';
import { Container, Paper, Stack, Typography } from '@mui/material';

export default function Home() {
  const serviceSummary = {
    numUsers: 55202,
    numProblems: 372278,
    numInvokers: 0,
  };
  const changeLogs = [
    '27 Jun 2016 - Polygon API has been released. You can view documentation here.',
    '7 Dec 2011 - Now you may download testlib and polygon documentation from Polygon installation.',
    '17 Jul 2010 - Supported contests and PDF-statements.',
    '3 Nov 2009 - Released new version. Tags and problem filters supported. Also many other smaller fixes done.',
    '8 Mar 2009 - Use public issue tracker to post bug or feature request.',
    '8 Mar 2009 - Beta version has been deployed.',
  ];

  return (
    <Container component='main'>
      <Navigation />
      <Stack direction='row' gap={2} mt={2}>
        <Paper sx={{ p: 2 }} elevation={3}>
          <Typography variant='body1'>
            The mission of Polygon is to provide platform for creation of
            programming contest problems. Polygon supports the whole development
            cycle:
          </Typography>
          {/* The following has to have a list using Tailwind CSS */}
          <ul className='list-disc list-inside'>
            <li>problem statement writing</li>
            <li>test data preparing (generators supported)</li>
            <li>model solutions (including correct and wittingly incorrect)</li>
            <li>judging</li>
            <li>automatic validation</li>
          </ul>
        </Paper>
        <Stack direction='column' gap={2}>
          <Paper sx={{ p: 2 }} elevation={3}>
            <Typography variant='body2'>
              Registered users: {serviceSummary.numUsers}
            </Typography>
            <Typography variant='body2'>
              Problems total: {serviceSummary.numProblems}
            </Typography>
            <Typography variant='body2'>
              Invokers waiting: {serviceSummary.numInvokers}
            </Typography>
          </Paper>
          <Paper sx={{ p: 2 }} elevation={3}>
            {changeLogs.map((log, index) => (
              <Typography key={index} variant='body2'>
                {log}
              </Typography>
            ))}
          </Paper>
        </Stack>
      </Stack>
    </Container>
  );
}
