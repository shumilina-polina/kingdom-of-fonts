import styled, { createGlobalStyle } from "styled-components";
import { Link } from "gatsby";

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: "Gorod";
        src: url("./assets/fonts/Gorod/Gorod.woff2") format("woff2"),
             url("./assets/fonts/Gorod/Gorod.woff") format("woff");
        font-display: fallback;
    }







    * {
        --color-grey: rgb(130, 130, 130);
        --color-blue: rgb(17, 104, 205);
        --color-green: #45E786;
        --color-orange: #EB5B0B;
        --color-background: rgb(21, 21, 21);
        --color-white-transparent: rgba(256,256,256,0.1);
        /* letter-spacing: 0vw; */
        font-weight: 400;
        font-family: "Roboto", sans-serif;
        font-size: 16px;
        margin: 0;
        padding: 0;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        line-height: 1.35;
        color: var(--color-grey);
    }

    main {
        padding-top: 0px;

        @media (max-width: 575px) {
          padding-top: 0;
        }

    }



    #gatsby-focus-wrapper {
        min-height: 100vh;
        width: 100%;
        display: flex;
        flex-direction: column;

        // overflow: hidden;
    }

    body {
        height: 100%;
        background: var(--color-background);
        
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

    a, a:hover {
    color: var(--color-blue);
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

    ${window !== undefined && ["/restore", "/buy", "/thanks"].includes(window.location.pathname) && `
      #___gatsby {
        overflow-x: hidden;
      }
    `}
`;

export const Container = styled.div`
  width: 1170px;
  margin: 0 auto;
  height: 100%;
  min-height: 100%;
  @media (max-width: 1200px) {
    width: 100%;
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* padding: 0 30px; */
  }
  @media (max-width: 1050px) {
    width: 100%;
  }
  @media (max-width: 575px) {
    padding: 0 4vw;
    width: 100%;

  }
  

  ${props => props.withMargin && `
    margin-top: -48px;
  `}
`;

export const CustomLink = styled(Link)``;
