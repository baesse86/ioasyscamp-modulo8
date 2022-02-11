import { Container } from './Button.styles'

const Button = ({ label, isDisabled, ...rest }) => {
  return (
    <Container disabled={isDisabled} {...rest}>
      <span>{label}</span>
    </Container>
  )
}

export default Button
