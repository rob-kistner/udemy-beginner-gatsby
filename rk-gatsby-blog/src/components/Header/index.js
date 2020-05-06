import React from 'react';
import { Link } from 'gatsby';

import {useSiteConfigQuery} from 'hooks/useSiteConfigQuery';

import {Wrapper, Logo} from './Header.styles';

export default function Header({ siteTitle = `` }) {
  const siteConfig = useSiteConfigQuery();

  return (
    <Wrapper>
      <Link to='/'>
        <img src={siteConfig.logo.publicURL} alt={siteTitle} />
      </Link>
    </Wrapper>
  );
}
