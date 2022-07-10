import { css } from '@emotion/react';

export const global = css`
  @import url(https://fonts.googleapis.com/css?family=Inter:regular,bold,italic&subset=latin,latin-ext);
  @import url(http://fonts.cdnfonts.com/css/optician-sans);

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Inter', 'Optician Sans', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  a,
  u {
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }
`;
