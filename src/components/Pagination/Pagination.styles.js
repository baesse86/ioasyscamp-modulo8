import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  padding: 16px 0;
  align-items: center;
  justify-content: center;

  p {
    order: 2;
    margin: 0 16px;
    font-size: 12px;
    line-height: 20px;
    color: ${({ theme }) => theme.colors.dark};
  }

  > button {
    &:not(:last-child) {
      order: 1;
    }

    &:last-child {
      order: 3;
    }
  }

  @media (min-width: 602px) {
    justify-content: flex-end;

    p {
      order: 1;
      margin-left: 0;
      margin-right: 16px;
    }

    button {
      &:not(:last-child) {
        order: 1;
      }

      &:last-child {
        margin-right: 8px;
      }

      & + button {
        margin-left: 8px;
      }
    }
  }
`

export const Icon = styled.img``
