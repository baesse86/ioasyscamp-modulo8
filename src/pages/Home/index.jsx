import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import Card from '../../components/Card'
import Header from '../../components/Header'
import Pagination from '../../components/Pagination'
import Modal from '../../components/Modal'
import * as S from './Home.styles'
import { useNavigate } from 'react-router-dom'

import { GET_BOOKS } from '../../store/slices/booksSlices';


const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user } = useSelector(({auth}) => auth);
  const { books, totalPages } = useSelector(({books}) => books);

  const [openModal, setOpenModal] = useState({ visible: false, book: null })
  const [page, setPage] = useState(1)



  const handleOpenModal = book => {
    setOpenModal({ visible: true, book })
  }

  const handleCloseModal = () => {
    setOpenModal({ visible: false, book: null })
  }

  const handlePagination = page => {
    setPage(page)
  }

  useEffect(() => {
    if(user){
      dispatch(GET_BOOKS({page}))
    } else {
      navigate('/')
    }
  }, [dispatch, page, user, navigate])

  return (
    <>
      <S.Container>
        <S.Content>
          <Header
            mode="dark"
            user={{
              name: user.name,
              email: user.email,
              birthdate: user.birthdate,
              gender: user.gender,
              id: user.id
            }}
          />
          <S.CardsContainer>
            {books.map(book => (
              <Card
                key={book.id}
                book={book}
                onClick={() => handleOpenModal(book)}
              />
            ))}
          </S.CardsContainer>
          <Pagination
            currentPage={page}
            totalPages={totalPages}
            handlePagination={handlePagination}
          />
        </S.Content>
      </S.Container>
      <Modal
        book={openModal.book}
        isOpen={openModal.visible}
        onRequestClose={handleCloseModal}
      />
    </>
  )
}

export default Home
