import styled from 'styled-components'

export const Container = styled.button`
  padding: 7px;
  outline: none;
  line-height: 0px;
  border-radius: 100%;
  background-color: transparent;
  border: 1px solid rgba(51, 51, 51, 0.2);
  transition: background-color 0.2s ease-in-out 0s;

  svg {
    font-size: 16px;
    color: ${({ theme }) => theme.colors.dark};
  }

  &:not(:disabled) {
    &:hover {
      background-color: rgba(51, 51, 51, 0.2);
    }
  }

  &:disabled {
    cursor: not-allowed;

    svg {
      color: rgba(51, 51, 51, 0.4);
    }
  }
`
