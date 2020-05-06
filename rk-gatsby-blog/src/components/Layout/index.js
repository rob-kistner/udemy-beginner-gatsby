import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import {useMetaDataQuery} from 'hooks/useMetaDataQuery';
import { ThemeProvider } from 'styled-components'
import { GlobalStyles, lightTheme, darkTheme } from 'styles/GlobalStyles'

import Header from 'components/Header';

export default function Layout({ children }) {
  const data = useMetaDataQuery();
  console.log(data);

  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyles />
      <Header siteTitle = {data.title} />
      Layout Component
      {children}
    </ThemeProvider>
  )
}
