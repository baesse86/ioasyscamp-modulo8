import styled from 'styled-components'
import background from '../../assets/backgrounds/home.jpg'

export const Container = styled.div`
  background: url(${background}) no-repeat center center fixed;
  background-size: cover;
  width: 100%;
  min-height: 100vh;
`

export const Content = styled.main`
  display: flex;
  margin: 0 auto;
  padding: 0 16px;
  padding-top: 40px;
  max-width: 1135px;
  flex-direction: column;

  @media (min-width: 1135px) {
    padding: 0;
    padding-top: 40px;
  }
`

export const CardsContainer = styled.div`
  gap: 16px;
  display: grid;
  margin-top: 40px;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  grid-template-columns: 1fr;

  @media (min-width: 602px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 902px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (min-width: 1135px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`

export const LoadingContainer = styled.div`
  display: flex;
  min-height: 500px;
  align-items: center;
  justify-content: center;
`
