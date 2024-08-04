'use client';
import { Button, Chip, Paper, Stack, TextField, Typography } from '@mui/material';
import { MouseEvent, useState } from 'react';

import { removeChip } from './util';

export default function Contest() {
  const [contests, setContests] = useState(['Contest 1', 'Contest 2', 'Contest 3']);

  const handleContestDelete = (event: MouseEvent<HTMLElement, MouseEvent>) => {
    removeChip(event, setContests);

    // TODO: Remove the contest from the database
  };

  return (
    <Paper>
      <Stack px={4} py={2} gap={2}>
        <Typography component='h2' variant='h6'>
          Contests
        </Typography>
        <Stack direction='row' gap={2}>
          <TextField id='contest' label='Contest UID' />
          <Button variant='contained'>Add</Button>
        </Stack>
        <Stack direction='row' gap={2}>
          {contests.map((contest, index) => (
            <Chip key={index} label={contest} onDelete={handleContestDelete} />
          ))}
        </Stack>
      </Stack>
    </Paper>
  );
}
