import { injectGlobal, css } from 'styled-components';

injectGlobal`
  /* http://meyerweb.com/eric/tools/css/reset/
   v2.0 | 20110126
   License: none (public domain)
  */

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  /* Open Sans */
  @font-face {
  font-family: "Open Sans", Arial, sans-serif;

  /* Set box sizing to border-box by default */
  html {
    box-sizing: border-box;
    font-family: "Open Sans", Arial, sans-serif;
    font-size: 14px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }

  h1, h2, h3, h4, h5 {
    font-family: "Open Sans", Arial, sans-serif;
  }

  h1 {
    font-size: 2.074rem;
  }
  h2 {
    font-size: 1.728rem;
  }
  h3 {
    font-size: 1.440rem;
  }
  h4 {
    font-size: 1.200rem;
  }
  h5, p {
    font-size: 1rem;
  }

@media screen and (min-width: 500px) {
  html {
    font-size: 15px;
  }
}

@media screen and (min-width: 700px) {
  html {
    font-size: 16px;
  }
  h1 {
    font-size: 3.157rem;
  }
  h2 {
    font-size: 2.369rem;
  }
  h3 {
    font-size: 1.777rem;
  }
  h4 {
    font-size: 1.333rem;
  }
}

@media screen and (min-width: 900px) {
  html {
    font-size: 17px;
  }
}
`;
