
import { createGlobalStyle } from 'styled-components';
  // these will import the font files referenced
  // by the import variable name
import MuliRegular from 'fonts/Muli-Regular.woff';
import MuliBlack from 'fonts/Muli-Black.woff';

export const colors = {
  white        : '#fff',
  darkGrey     : '#1a1c20',
  deepDarkGray : '#404040',
  blueShade1   : '#215973',
  blueShade2   : '#6fadc6',
  blueShade3   : '#d1e1e9',
}

export const darkTheme = {
  colors: {
    background     : colors.darkGrey,
    menuBackground : colors.blueShade1,
    textDark       : colors.blueShade3,
    textMain       : colors.blueShade2,
    textSecondary  : colors.blueShade3,
  }
}

export const lightTheme = {
  colors: {
    background     : colors.white,
    menuBackground : colors.blueShade3,
    textDark       : colors.blueShade1,
    textMain       : colors.blueShade2,
    textSecondary  : colors.deepDarkGray,
  }
}

  /**
   * ! BTW: the function name with backticks immediately 
   * ! following is called a 'tagged function'
   *
   * !      createGlobalStyle`
   * 
   * !      `;
   */
export const GlobalStyles = createGlobalStyle`
  :root {
    --site-max-width: 1200px;
  }

  @font-face {
    font-family: 'Muli Regular';
    src: local('Muli Regular'), local('MuliRegular'),
         url(${MuliRegular}) format('woff');
    font-weight: 300;
    font-style: normal;
  }
  
  @font-face {
    font-family: 'Muli Black';
    src: local('Muli Black'), local('MuliBlack'),
         url(${MuliBlack}) format('woff');
    font-weight: 900;
    font-style: normal;
  }

  body {
    font-family: "Muli Regular", Arial, Helvetica, sans-serif;
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.textSecondary};
    margin: 0;
    padding: 0 20px 80px 20px;
    transition: all 0.5s ease;
  }

  main {
    max-width: 960px;
    margin: 40px auto;
  }

  h1, h2, h3, h4, h5, h6 {
    color: ${props => props.theme.colors.textMain};
    font-family: "Muli Black", Arial, Helvetica, sans-serif;
    transition: all 0.5s ease;
    letter-spacing: 1px;
  }

  h2 {
    font-size: 1rem;
    letter-spacing: 1.8px;
    text-transform: uppercase;

    @media screen and (min-width: 768px) {
      font-size: 1.5rem;
      line-height: 1.5;
    }
  }
  
  h3 {
    font-size: 0.8rem;
    letter-spacing: 1.5px;
    margin: 30px 0 -15px 0;

    @media screen and (min-width: 768px) {
      font-size: 1.2rem;
      line-height: 1.5;
    }
  }

  p {
    font-size: 0.9rem;
    line-height: 1.2;

    @media screen and (min-width: 768px) {
      font-size: 1.1rem;
      line-height: 1.5;
    }
  }

  a {
    text-decoration: none;
  }

`;