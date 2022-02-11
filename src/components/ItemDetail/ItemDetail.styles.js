import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    font-size: 12px;
    line-height: 21px;

    &:first-child {
      font-weight: 500;
      color: ${({ theme }) => theme.colors.dark};
    }

    &:last-child {
      font-weight: normal;
      color: ${({ theme }) => theme.colors.gray};
    }
  }
`;
