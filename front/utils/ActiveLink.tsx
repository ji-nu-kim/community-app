import React, { Children, ReactNode } from 'react';
import Link from 'next/link';
import { withRouter } from 'next/router';

interface ActiveLinkProps {
  children: ReactNode;
  activeClassName: string;
}

function ActiveLink({ children, activeClassName, ...props }: ActiveLinkProps) {
  return <Link href={href} passHref></Link>;
}

export default withRouter(ActiveLink);
