import { createGlobalStyle } from "styled-components";
import theme from "./theme";

export const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'Roboto', sans-serif;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Montserrat', sans-serif;
  }

  /* Rest of your existing styles remain the same */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  :focus-visible {
    outline: none;
    box-shadow: 0 0 0 2px ${theme.colors.neutral.gray};
  }

  input,
  textarea,
  select,
  button {
    font-family: inherit;
    font-size: inherit;
    
    &:focus {
      outline: none;
    }
  }

  button,
  input,
  select,
  textarea {
    &:hover {
      transition: all 0.2s ease-in-out;
    }
  }

  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
`;
