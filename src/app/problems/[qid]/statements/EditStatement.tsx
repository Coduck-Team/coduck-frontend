import {
  Button,
  Paper,
  Stack,
  TextField,
  Typography,
  ButtonGroup,
} from '@mui/material';

// As same as Polygon, the page link is same for creating new language and editing existed language
// It can be divided into two pages if needed

export default function EditStatement({
  language,
  languageName,
}: {
  language: string;
  languageName: string;
}) {
  // have to fetch the statement and tutorial from the server by the language
  return (
    <Paper>
      <Stack direction='column' px={4} py={2} gap={2}>
        <Stack direction='column'>
          <Stack
            direction={{ sm: 'column', md: 'row' }}
            gap={2}
            px={2}
            justifyContent='space-between'
          >
            <Typography variant='h6'>
              Edit {languageName}({language}) Statement
            </Typography>
            <ButtonGroup variant='text' sx={{ justifyContent: 'flex-end' }}>
              <Button>In LaTex</Button>
              <Button>In HTML</Button>
              <Button>In PDF</Button>
            </ButtonGroup>
          </Stack>
          <Typography variant='caption' px={2}>
            It is recommended to use simple TeX, &ldquo;Preview in HTML&rdquo; feature
            supports only subset of TeX markup
          </Typography>
        </Stack>
        <TextField id='prob_name' label='Name' fullWidth />
        <TextField id='legend' label='Legend' rows={10} multiline fullWidth />
        <TextField
          id='input_format'
          label='Input Format'
          rows={5}
          multiline
          fullWidth
        />
        <TextField
          id='output_format'
          label='Output Format'
          rows={5}
          multiline
          fullWidth
        />
        <TextField id='scoring' label='Scoring' rows={10} multiline fullWidth />
        <TextField id='notes' label='Notes' rows={5} multiline fullWidth />
        <TextField id='tutorial' label='Tutorial' rows={10} multiline fullWidth />
        <Button variant='contained'>Save</Button>
      </Stack>
    </Paper>
  );
}
