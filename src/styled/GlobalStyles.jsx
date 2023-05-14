import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root{
    --text1: #efeff1;
    --text2: #bf94ff;
    --textCategory: #adadb8;


    --fonButtons: #772ce8;
    --fontHoverButton: #9147ff;
    --fontHeader: #18181b;
    --fonHeader2: #1f1f23;
    --fontContainer: #0e0e10;
    --fontCategory: #53535f;
    --fontHober: #170931;
      @font-face {
        font-family: 'font1';
        src: url('src/assets/fonts/inter-latin-variable-wghtOnly-normal-a05a0d687a088c4efed3.woff2') format('woff2');
      }
      @font-face {
        font-family: 'font2';
        src: url('src/assets/fonts/Roobert-SemiBold-2c9de19c87721c9bcb39.woff2') format('woff2');
      }

    --family: 'font1', sans-serif;
    --family2: 'font2', sans-serif;
    background-color: var(--fontContainer);
  }
  body{
    margin: 0;
  }
  html {
    min-height: 100%;
    font-size: 62.5%;
    box-sizing: border-box;
    background-color: var(--fontContainer);
    color: var(--text1);
    font-family: var(--family);

    
  }
  *, *:before, *:after {
      box-sizing: inherit;
  }
  h1, h2, h3{

  }
  img,
  picture {
      width: 100%;
      display: block;
  }
`;