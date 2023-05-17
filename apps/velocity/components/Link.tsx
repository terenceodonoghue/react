import NextLink from 'next/link';
import { useRouter } from 'next/router';

import {
  NavItem,
  type NavItemProps,
} from '@terenceodonoghue/react-components/velocity';

interface LinkProps extends NavItemProps {
  to: string;
}

const Link = ({ to, ...props }: LinkProps) => {
  const router = useRouter();

  return (
    <NextLink href={to}>
      <NavItem selected={router.pathname === to} {...props} />
    </NextLink>
  );
};

export default Link;
