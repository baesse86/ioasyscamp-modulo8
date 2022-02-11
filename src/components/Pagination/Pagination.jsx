import CircleButton from '../CircleButton'
// import { MdOutlineChevronLeft, MdOutlineChevronRight } from 'react-icons/md';
import iChevronLeft from '../../assets/icons/chevron-left.svg'
import iChevronRight from '../../assets/icons/chevron-right.svg'

import * as S from './Pagination.styles'

const Pagination = ({ totalPages, currentPage, handlePagination }) => {
  const handlePrevPage = () => {
    handlePagination(currentPage - 1)
  }

  const handleNextPage = () => {
    handlePagination(currentPage + 1)
  }

  return (
    <S.Container>
      <p>
        Página <b>{currentPage}</b> de <b>{Math.floor(totalPages)}</b>
      </p>
      <CircleButton
        type="button"
        onClick={handlePrevPage}
        aria-label="Página anterior"
        disabled={currentPage - 1 === 0}
      >
        <S.Icon
          src={iChevronLeft}
          width={16}
          height={16}
          alt="Seta para esquerda"
        />
      </CircleButton>
      <CircleButton
        type="button"
        onClick={handleNextPage}
        aria-label="Próxima página"
        disabled={currentPage + 1 > Math.floor(totalPages)}
      >
        <S.Icon
          src={iChevronRight}
          width={16}
          height={16}
          alt="Seta para direta"
        />
      </CircleButton>
    </S.Container>
  )
}

export default Pagination
