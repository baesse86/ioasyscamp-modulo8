import styled from 'styled-components';

export const Container = styled.button`
  border: 0;
  padding: 8px 21px;
  line-height: 20px;
  width: max-content;
  border-radius: 44px;
  transition: filter 0.2s;
  background: ${({ theme }) => theme.colors.white};

  span {
    font-size: 16px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.pink45};
  }

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }

  &:hover {
    filter: opacity(0.85);
  }
`;
