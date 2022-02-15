import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';

import Header from '../../components/Header/Header'
import Input from '../../components/Input/Input'
import Button from '../../components/Button/Button'
import * as S from './Login.styles'

import { LOGIN } from '../../store/slices/authSlice';

const Login = () => {
  const dispatch = useDispatch();

  const [formDados, setFormDados] = useState({ email: '', password: '' })
  let navigate = useNavigate()
  const requestLogin = () => {
    dispatch(LOGIN({formDados, callbackSuccess: () => navigate('/home')}))
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
