import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  *, *::after, *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Heebo', sans-serif;
  }

  button {
    border: none;
    cursor: pointer;
  }

  body {
    width: 100%;
    height: 100vh;
    color: ${({ theme }) => theme.colors.black};
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.white};
  }

  .react-modal-overlay {
    background: rgba(0, 0, 0, 0.4);
    position: fixed;
    inset: 0 0 0 0;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media screen and (max-width: 768px) { 
    .react-modal-overlay {
      align-items: flex-start;
    }
  }

  .fadeIn {
    animation: fadeIn 1s ease-in-out;
    -o-animation: fadeIn 1s ease-in-out;
    -moz-animation: fadeIn 1s ease-in-out;
    -webkit-animation: fadeIn 1s ease-in-out;
  }

  .fadeOut {
    animation: fadeOut 1s ease-in-out;
    -o-animation: fadeOut 1s ease-in-out;
    -moz-animation: fadeOut 1s ease-in-out;
    -webkit-animation: fadeOut 1s ease-in-out;
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes fadeOut {
    100% {
      opacity: 0;
    }
    0% {
      opacity: 1;
    }
  }
`
