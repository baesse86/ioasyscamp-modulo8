import background from '../../assets/backgrounds/book.jpg'
import {
  Container,
  Title,
  Authors,
  Description,
  ImageContainer,
  Image
} from './Card.styles'

const Card = ({
  book: { authors, published, title, pageCount, imageUrl, publisher },
  ...rest
}) => {
  return (
    <Container {...rest}>
      <ImageContainer>
        {imageUrl ? (
          <Image src={imageUrl} width={82} height={122} alt={title} />
        ) : (
          <Image src={background} width={82} height={122} alt={title} />
        )}
      </ImageContainer>

      <div className="content">
        <Title>{title ?? 'Livro desconhecido'}</Title>
        <Authors>
          {authors.length > 2 ? (
            <>
              <span>{authors[0]}</span>
              <span>e outros {authors.length - 1} autores</span>
            </>
          ) : authors.length >= 1 ? (
            <>
              {authors.map(author => (
                <span key={author}>{author}</span>
              ))}
            </>
          ) : (
            <span>Autor desconhecido</span>
          )}
        </Authors>
        <Description>
          <span>{pageCount} páginas</span>
          <span>Editora {publisher}</span>
          <span>Publicado em {published}</span>
        </Description>
      </div>
    </Container>
  )
}

export default Card
