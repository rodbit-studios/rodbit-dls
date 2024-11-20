import { createGlobalStyle } from "styled-components";
import theme from "./theme";

export const GlobalStyles = createGlobalStyle`
  /* Reset styles */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  /* Global focus styles */
  :focus-visible {
    outline: none;
    box-shadow: 0 0 0 2px ${theme.colors.primary}40;
  }

  /* Form element base styles */
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

  /* Interactive element base styles */
  button,
  input,
  select,
  textarea {
    &:hover {
      transition: all 0.2s ease-in-out;
    }
  }

  /* Accessibility styles */
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
