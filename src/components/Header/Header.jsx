// import { FiLogOut } from 'react-icons/fi'
import CircleButton from '../CircleButton'
import LogoWhite from '../../assets/logo/white.svg'
import LogoBlack from '../../assets/logo/black.svg'
import iSignOut from '../../assets/icons/sign-out.svg'
import * as S from './Header.styles'

const Header = ({ mode = 'light', user = null }) => {
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
          <CircleButton onClick={null} arial-label="Deslogar">
            <S.Icon src={iSignOut} width={16} alt="Ícone de sair" />
          </CircleButton>
        </S.Profile>
      )}
    </S.Container>
  )
}

export default Header
