'use client';

import { Stack } from '@mui/material';
import { useSearchParams } from 'next/navigation';
import { useState } from 'react';

import NewLanguage from './NewLanguage';
import EditStatement from './EditStatement';
import StatementNavbar from './StatementNavbar';

// languageList variable is all-supported languages
// if it needs to be fetched from the server, it should be done in the useEffect hook
const languageList = [
  { label: 'Korean', value: 'ko' },
  { label: 'English', value: 'en' },
  { label: 'Japanese', value: 'ja' },
  { label: 'Chinese', value: 'zh' },
  { label: 'Vietnamese', value: 'vi' },
  { label: 'Russian', value: 'ru' },
  { label: 'French', value: 'fr' },
];

export default function Problem() {
  // existedLanguageList variable is the list of languages that already have statements and tutorials
  // it should be fetched from the server in the useEffect hook
  const [existedLanguageList] = useState([
    { label: 'English', value: 'en' },
    { label: 'French', value: 'fr' },
  ]);
  // get query parameters
  const searchParams = useSearchParams();
  const [language] = useState(searchParams.get('language') || '');
  return (
    <Stack mt={2} gap={4}>
      <StatementNavbar existedLanguageList={existedLanguageList} language={language} />
      {!existedLanguageList.find((lang) => lang.value === language) && (
        <NewLanguage
          languageList={languageList}
          existedLanguageList={existedLanguageList}
        />
      )}
      {existedLanguageList.find((lang) => lang.value === language) && (
        <EditStatement
          language={language}
          languageName={
            existedLanguageList.find((lang) => lang.value === language)?.label || ''
          }
        />
      )}
    </Stack>
  );
}
