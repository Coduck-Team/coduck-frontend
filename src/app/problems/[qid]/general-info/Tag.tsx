'use client';
import { Button, Chip, Paper, Stack, TextField, Typography } from '@mui/material';
import { MouseEvent, useState } from 'react';

import { removeChip } from './util';

export default function Tag() {
  const [tags, setTags] = useState(['Contest 1', 'Contest 2', 'Contest 3']);

  const handleTagDelete = (event: MouseEvent<HTMLElement, MouseEvent>) => {
    removeChip(event, setTags);

    // TODO: Remove the tag from the database
  };

  return (
    <Paper>
      <Stack px={4} py={2} gap={2}>
        <Typography component='h2' variant='h6'>
          Tags
        </Typography>
        <Stack direction='row' gap={2}>
          <TextField
            id='tag'
            label='Tag'
            helperText='Use only English and try autocomplete tags'
          />
          <Button variant='contained'>Add</Button>
        </Stack>
        <Stack direction='row' gap={2}>
          {tags.map((contest, index) => (
            <Chip key={index} label={contest} onDelete={handleTagDelete} />
          ))}
        </Stack>
      </Stack>
    </Paper>
  );
}
