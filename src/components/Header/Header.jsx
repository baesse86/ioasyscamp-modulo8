// import { FiLogOut } from 'react-icons/fi'

import {useDispatch} from 'react-redux';

import CircleButton from '../CircleButton'
import LogoWhite from '../../assets/logo/white.svg'
import LogoBlack from '../../assets/logo/black.svg'
import iSignOut from '../../assets/icons/sign-out.svg'
import * as S from './Header.styles'

import { TOGGLE_THEME } from '../../store/slices/themeSlice';

const Header = ({ mode = 'light', user = null }) => {
  const dispatch = useDispatch();
  return (
    <S.Container mode={mode}>
      <div className="logo">
        <img src={mode === 'dark' ? LogoBlack : LogoWhite} alt="ioasys" />
        <span>Books</span>
      </div>

      <h1>ioasys Books</h1>

      {user && (
        <S.Profile>
          <p>
            Bem vindo(a), <strong>{user.name}!</strong>
          </p>
          <CircleButton onClick={() => dispatch(TOGGLE_THEME())} arial-label="change-theme">
            T
          </CircleButton>
          <CircleButton onClick={null} arial-label="Deslogar">
            <S.Icon src={iSignOut} width={16} alt="Ícone de sair" />
          </CircleButton>
        </S.Profile>
      )}
    </S.Container>
  )
}

export default Header
