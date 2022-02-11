import styled from 'styled-components'
import background from '../../assets/backgrounds/sign-in.jpg'

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background: url(${background}) no-repeat center center fixed;
  background-size: cover;
  -webkit-background-size: cover;
  -o-background-size: cover;
  -moz-background-size: cover;
`

export const Content = styled.div`
  height: 100%;
  margin: 0 auto;
  padding: 0 16px;
  max-width: 1151px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const Form = styled.div`
  gap: 16px;
  display: flex;
  margin-top: 48px;
  width: max-content;
  position: relative;
  flex-direction: column;

  button {
    right: 12px;
    bottom: 12px;
    position: absolute;
    min-width: 85.14px;
  }

  @media screen and (max-width: 420px) {
    width: 100%;
  }
`
