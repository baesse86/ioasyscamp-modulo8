import { forwardRef } from 'react'
import { Container } from './Input.styles'

const InputBase = ({ name, label, ...rest }, ref) => {
  return (
    <Container aria-label={label}>
      {!!label && <label htmlFor={name}>{label}</label>}

      <input title={name} name={name} id={name} ref={ref} {...rest} />
    </Container>
  )
}

const Input = forwardRef(InputBase)

export default Input
