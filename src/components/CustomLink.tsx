import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import { Link as MUILink, LinkProps as MUILinkProps } from '@mui/material';

type CustomLinkProps = NextLinkProps & MUILinkProps;

export default function CustomLink(props: CustomLinkProps) {
  const { href, ...others } = props;

  return (
    <MUILink
      color='inherit'
      underline='none'
      component={NextLink}
      href={href}
      {...others}
    />
  );
}
