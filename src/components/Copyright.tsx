import { Typography } from '@mui/material';
import CustomLink from '@/components/CustomLink';

export default function Copyright(props: any) {
  return (
    <Typography
      variant='body2'
      color='text.secondary'
      align='center'
      {...props}
    >
      {'Copyright © '}
      <CustomLink color='inherit' href='https://mui.com/'>
        Bibimbap
      </CustomLink>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
