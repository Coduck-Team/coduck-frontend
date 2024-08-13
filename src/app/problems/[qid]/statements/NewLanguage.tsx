'use client';

import { Button, Paper, Stack, TextField, Autocomplete, Link } from '@mui/material';
import { useState } from 'react';

// As same as Polygon, the page link is same for creating new language and editing existed language
// It can be divided into two pages if needed

export default function NewLanguage({
  languageList,
  existedLanguageList,
}: {
  languageList: { label: string; value: string }[];
  existedLanguageList: { label: string; value: string }[];
}) {
  // cloneClicked variable is used to show the existedLanguageList when the user wants to clone
  const [cloneClicked, setCloneClicked] = useState(false);
  return (
    <Paper>
      <Stack direction='column' px={4} py={2} gap={2}>
        <Autocomplete
          id='language_setting'
          options={languageList.filter(
            (lang) =>
              !existedLanguageList.find(
                (existedLang) => existedLang.value === lang.value,
              ),
          )}
          getOptionLabel={(option) => option.label}
          renderInput={(params) => (
            <TextField
              {...params}
              label='Language'
              helperText={
                !cloneClicked && (
                  <>
                    If you want to clone statement and tutorial from existing,{' '}
                    <Link href='#' onClick={() => setCloneClicked(true)}>
                      click here
                    </Link>
                  </>
                )
              }
            />
          )}
        />
        {cloneClicked && (
          <Autocomplete
            id='existed_language_setting'
            options={existedLanguageList}
            getOptionLabel={(option) => option.label}
            renderInput={(params) => (
              <TextField {...params} label='Clone from language' />
            )}
          />
        )}
        <Button variant='contained'>Create</Button>
      </Stack>
    </Paper>
  );
}
