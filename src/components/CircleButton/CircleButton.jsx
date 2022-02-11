import { Container } from './CircleButton.styles'

const CircleButton = ({
  children,
  hover = true,
  disabled = false,
  ...rest
}) => {
  return (
    <Container
      {...rest}
      disabled={disabled}
      style={!hover ? { background: 'white' } : {}}
    >
      {children}
    </Container>
  )
}

export default CircleButton
