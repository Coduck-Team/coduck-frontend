import {
  Button,
  Checkbox,
  FormControlLabel,
  Paper,
  Stack,
  TextField,
} from '@mui/material';

import Tag from './Tag';
import Contest from './Contest';

export default function Problem() {
  return (
    <Stack mt={2} gap={4}>
      <Paper>
        <Stack direction='column' px={4} py={2} gap={2}>
          <TextField
            id='input_file'
            label='Input file'
            helperText='Input file name or "stdin" for standard input'
          />
          <TextField
            id='output_file'
            label='Output file'
            helperText='Output file name or "stdout" for standard output'
          />
          <TextField
            id='time_limit'
            label='Time limit (ms)'
            helperText='Time limit per test (between 250 ms and 15000 ms)'
          />
          <TextField
            id='memory_limit'
            label='Memory limit (MB)'
            helperText='Memory limit (between 4 MB and 1024 MB)'
          />
          <FormControlLabel
            control={<Checkbox />}
            label='This problem is interactive'
          />
          <Button variant='contained'>Save</Button>
        </Stack>
      </Paper>

      <Tag />
      <Contest />
    </Stack>
  );
}
