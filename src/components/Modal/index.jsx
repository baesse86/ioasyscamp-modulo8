// import { RiCloseFill } from 'react-icons/ri';
import CircleButton from '../CircleButton'
import ItemDetail from '../ItemDetail'
import * as S from './Modal.styles'
import iClose from '../../assets/icons/close.svg'

const Modal = ({ book, isOpen, onRequestClose }) => {
  return (
    <S.Container
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      {book && (
        <>
          <CircleButton
            type="button"
            hover={false}
            onClick={onRequestClose}
            aria-label="Fechar modal"
          >
            <S.Image src={iClose} width={16} alt="Fechar modal" />
          </CircleButton>

          <S.Content>
            <S.ImageContainer>
              {book.imageUrl ? (
                <S.Image src={book.imageUrl} layout="fixed" alt={book.title} />
              ) : (
                <S.Image
                  src="/images/default.png"
                  layout="fixed"
                  alt={book.title}
                />
              )}
            </S.ImageContainer>
            <S.DetailsContainer>
              <h2>{book.title}</h2>
              <span>
                {book.authors ? (
                  <span>{book.authors.join(', ')}</span>
                ) : (
                  <span>Autor(es) desconhecido(s)</span>
                )}
              </span>

              <div className="info">
                <h3>Informações</h3>

                <ItemDetail title="Páginas" label={book.pageCount} />
                <ItemDetail title="Editora" label={book.publisher} />
                <ItemDetail title="Publicação" label={book.published} />
                <ItemDetail title="Idioma" label={book.language} />
                <ItemDetail title="Título Original" label={book.title} />
                <ItemDetail title="ISBN-10" label={book.isbn10} />
                <ItemDetail title="ISBN-13" label={book.isbn13} />
              </div>

              <S.Summary>
                <h3>Resenha da Editora</h3>
                <p>
                  <q>{book.description}</q>
                </p>
              </S.Summary>
            </S.DetailsContainer>
          </S.Content>
        </>
      )}
    </S.Container>
  )
}

export default Modal
