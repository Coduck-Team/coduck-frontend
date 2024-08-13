import { Tabs, Tab, Box, Button, Stack, ButtonGroup } from '@mui/material';

export default function StatementNavbar({
  existedLanguageList,
  language,
}: {
  existedLanguageList: { label: string; value: string }[];
  language: string;
}) {
  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Stack
          direction={{ sm: 'column', md: 'row' }}
          gap={2}
          p={2}
          justifyContent='space-between'
        >
          <Tabs value={language}>
            {existedLanguageList.map((lang) => (
              <Tab
                label={lang.label}
                value={lang.value}
                href={'?language=' + lang.value}
                key={lang.value}
              />
            ))}
          </Tabs>
          <ButtonGroup
            variant='text'
            sx={{ flexWrap: 'wrap', justifyContent: 'flex-end' }}
          >
            <Button>Edit With Preview</Button>
            <Button>Review</Button>
            <Button>Delete Current</Button>
            <Button href='?language='>Create New</Button>
          </ButtonGroup>
        </Stack>
      </Box>
    </Box>
  );
}
