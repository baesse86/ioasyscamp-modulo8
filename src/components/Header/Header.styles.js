import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    display: none;
  }

  span {
    font-size: 28px;
    font-weight: 300;
    line-height: 40px;
    margin-left: 16px;
    color: ${({ theme }) => theme.colors.white};
  }

  .logo {
    display: flex;
    align-items: center;

    ${props =>
      props.mode === 'dark' &&
      css`
        span {
          color: ${({ theme }) => theme.colors.dark};
        }

        svg path {
          fill: ${({ theme }) => theme.colors.dark};
        }
      `}
  }
`

export const Profile = styled.div`
  display: flex;
  align-items: center;

  p {
    display: none;
    font-size: 12px;
    font-weight: 500;
    line-height: 16px;
    color: ${({ theme }) => theme.colors.dark};
  }

  button {
    margin-left: 16px;
  }

  @media (min-width: 602px) {
    p {
      display: block;
    }
  }
`

export const Icon = styled.img``
