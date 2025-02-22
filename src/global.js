import styled, { createGlobalStyle } from "styled-components";
import { Link } from "gatsby";

export const styles = `
@font-face {
  font-family: "Gorod";
  src: url("./assets/fonts/Gorod/Gorod.woff2") format("woff2"),
       url("./assets/fonts/Gorod/Gorod.woff") format("woff");
  font-display: fallback;
}







* {
  margin: 0;
  padding: 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

#gatsby-focus-wrapper {
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;

  // overflow: hidden;
}

body {
  --color-grey: rgb(130, 130, 130);
  --color-blue: rgb(17, 104, 205);
  --color-green: #45E786;
  --color-orange: #EB5B0B;
  --color-background: rgb(21, 21, 21);
  --color-white-transparent: rgba(256,256,256,0.1);
  
  height: 100%;
  background: var(--color-background);
  
  line-height: 1.35;
  color: var(--color-grey);
}

body, input, button {
  font-weight: 400;
  font-family: "Roboto", sans-serif;
  font-size: 16px;
}

main {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* overflow-x: hidden; */
}

input, input:hover, input:active, input:focus {
outline: none;
}

textarea, textarea:hover, textarea:active, textarea:focus {
outline: none;
}

img {
-ms-flex-item-align: start;
  -ms-grid-row-align: start;
  align-self: start;
}

p {
margin: 0;
padding: 0;
}

ul, li {
display: block;
padding: 0;
margin: 0;
-webkit-box-sizing: border-box;
      box-sizing: border-box;
}

div, p, a, span, input, form, button {
-webkit-box-sizing: border-box;
      box-sizing: border-box;
}

a {
font-weight: inherit;
letter-spacing: inherit;
font-size: inherit;
}

button {
border: none;
}

button:focus {
outline: none;
}

ul, li {
display: block;
padding: 0;
margin: 0;
-webkit-box-sizing: border-box;
      box-sizing: border-box;
}

footer {
  margin-top: auto;
}

@media (max-width: 1260px) {
  .no-scroll-mobile {
    position: fixed;

    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }
}
`

export const GlobalStyle = createGlobalStyle`
    ${styles}

`;

export const GlobalStyleOverflowed = createGlobalStyle`
    /* ${styles} */
    #___gatsby {
      overflow-x: hidden;
    }
`;

export const Container = styled.div`
  width: 1240px;
  margin: 0 auto;
  height: 100%;
  min-height: 100%;
  
  @media (max-width: 1260px) {
    width: 100%;
    padding: 0 3.125vw;
  }

  ${props => props.withMargin && `
    margin-top: -4px;
  
    @media (max-width: 575px) {
      margin-top: -4vw;
    }
  `}
`;

export const CustomLink = styled(Link)``;

export const DesktopWrapper = styled.div`
    display: block;
    @media (max-width: 1260px) {
        display: none;
    }
`

export const MobileWrapper = styled.div`
    display: none;
    @media (max-width: 1260px) {
        display: block;
        width: 100%;
    }
`
