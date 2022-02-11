import ReactModal from 'react-modal'
import styled from 'styled-components'

export const Container = styled(ReactModal)`
  width: 100%;
  padding: 48px;
  padding-right: 0;
  outline: none;
  max-width: 769px;
  overflow: auto;
  margin: 0 16px;
  border-radius: 4px;
  box-shadow: 0px 16px 80px rgba(0, 0, 0, 0.32);
  background: ${({ theme }) => theme.colors.white};

  button {
    top: 16px;
    right: 16px;
    position: absolute;
    background: ${({ theme }) => theme.colors.white};
  }

  &::-webkit-scrollbar {
    width: 12px;
    height: 8px;
  }

  &::-webkit-scrollbar-track {
    border-radius: 30px;
    background: ${({ theme }) => theme.colors.white};
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 30px;
    background: ${({ theme }) => theme.colors.pink45};
    border: 4px solid ${({ theme }) => theme.colors.white};
  }

  @media screen and (max-width: 768px) {
    & {
      padding: 24px;
      margin-top: 64px;
      padding-bottom: 32px;
      height: calc(100% - 80px);
    }
  }
`

export const LoaderContainer = styled.div`
  height: 100%;
  min-height: 513px;
  padding-right: 48px;

  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
    & {
      padding-right: 0;
    }
  }
`

export const ImageContainer = styled.div`
  display: flex;
  min-width: 349px;
  min-height: 513px;
  margin-right: 48px;
  box-shadow: 0 12px 18px rgba(0, 0, 0, 0.3);

  span {
  }

  @media screen and (max-width: 468px) {
    & {
      min-width: 240px;
      min-height: 351px;
    }
  }

  @media screen and (max-width: 768px) {
    & {
      margin-right: 0;
      margin-bottom: 24px;
    }
  }
`

export const Content = styled.div`
  display: flex;
  align-items: center;

  h3 {
    font-size: 12px;
    font-weight: 500;
    line-height: 20px;
    color: ${({ theme }) => theme.colors.dark};
    text-transform: uppercase;
  }

  .info {
    margin: 32px 0;

    h3 {
      margin-bottom: 7px;
    }
  }

  @media screen and (max-width: 768px) {
    & {
      flex-direction: column;
    }
  }
`

export const DetailsContainer = styled.div`
  overflow: auto;
  max-height: 510px;
  padding-right: 48px;

  h2,
  span {
    overflow: hidden;
    display: -webkit-box;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  > h2 {
    font-size: 28px;
    font-weight: 500;
    line-height: 40px;
    color: ${({ theme }) => theme.colors.dark};
  }

  > span {
    font-size: 12px;
    line-height: 20px;
    margin-bottom: 32px;
    font-weight: normal;
    color: ${({ theme }) => theme.colors.pink45};
  }

  &::-webkit-scrollbar {
    width: 12px;
    height: 8px;
  }

  &::-webkit-scrollbar-track {
    border-radius: 30px;
    background: ${({ theme }) => theme.colors.white};
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 30px;
    background: ${({ theme }) => theme.colors.pink45};
    border: 4px solid ${({ theme }) => theme.colors.white};
  }

  @media screen and (max-width: 768px) {
    & {
      padding-right: 0;
      max-height: initial;
    }
  }
`

export const Summary = styled.div`
  p {
    font-size: 12px;
    overflow: hidden;
    line-height: 20px;
    color: ${({ theme }) => theme.colors.gray};
  }

  q {
    &::before {
      top: 20px;
      font-size: 45px;
      quotes: '“' '”';
      margin-right: 6px;
      position: relative;
      font-family: -webkit-body;
      color: ${({ theme }) => theme.colors.gray};
    }

    &::after {
      display: none;
    }
  }

  @media screen and (max-width: 768px) {
    & p {
      -webkit-line-clamp: initial;
    }
  }
`

export const Image = styled.img``
