import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import axios from 'axios'
import Header from '../../components/Header/Header'
import Input from '../../components/Input/Input'
import Button from '../../components/Button/Button'
import * as S from './Login.styles'

const Login = () => {
  const [formDados, setFormDados] = useState({ email: '', password: '' })
  let navigate = useNavigate()
  const requestLogin = () => {
    axios
      .post('https://books.ioasys.com.br/api/v1/auth/sign-in', { ...formDados })
      .then(({ data, headers }) => {
        localStorage.setItem('authorization', headers.authorization)
        localStorage.setItem('name', data.name)
        localStorage.setItem('birthdate', data.birthdate)
        navigate('/home')
      })
  }
  return (
    <S.Container>
      <S.Content>
        <Header />
        <S.Form>
          <Input
            onChange={e =>
              setFormDados({ ...formDados, email: e.target.value })
            }
            type="email"
            label="Email"
            name="email"
          />
          <Input
            onChange={e =>
              setFormDados({ ...formDados, password: e.target.value })
            }
            type="password"
            label="Senha"
            name="password"
          />
          <Button onClick={() => requestLogin()} type="submit" label="Entrar" />
        </S.Form>
      </S.Content>
    </S.Container>
  )
}

export default Login
