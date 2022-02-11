import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  min-width: 368px;
  position: relative;
  width: max-content;
  border-radius: 4px;
  flex-direction: column;
  padding: 8px 12px 8px 16px;
  background: rgba(0, 0, 0, 0.32);

  label {
    opacity: 0.5;
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
    margin-bottom: 4px;
    color: ${({ theme }) => theme.colors.white};
  }

  input {
    border: none;
    outline: none;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    background: transparent;
    width: calc(100% - 90px);
    color: ${({ theme }) => theme.colors.white};
    caret-color: ${({ theme }) => theme.colors.white};

    &:-webkit-autofill {
      transition: background-color 50000s ease-in-out 0s;
      -webkit-text-fill-color: ${({ theme }) => theme.colors.white};
    }
  }

  @media screen and (max-width: 420px) {
    & {
      width: 100%;
      min-width: auto;
    }
  }
`;
