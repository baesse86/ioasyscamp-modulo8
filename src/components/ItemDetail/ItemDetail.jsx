import { Container } from './ItemDetail.styles'

const ItemDetail = ({ title, label }) => {
  return (
    <Container>
      <span>{title}</span>
      <span>{label}</span>
    </Container>
  )
}

export default ItemDetail
