import { useEffect, useState } from 'react'
import Card from '../../components/Card'
import Header from '../../components/Header'
import Pagination from '../../components/Pagination'
import Modal from '../../components/Modal'
import * as S from './Home.styles'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

import user from '../../mocks/user.json'

const Home = () => {
  const [openModal, setOpenModal] = useState({ visible: false, book: null })
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)

  const [books, setBooks] = useState([])
  let navigate = useNavigate()

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
    const meuToken = localStorage.getItem('authorization')
    if (meuToken) {
      axios
        .get(`https://books.ioasys.com.br/api/v1/books?page=${page}&amount=2`, {
          headers: {
            authorization: `Bearer ${localStorage.getItem('authorization')}`
          }
        })
        .then(({ data }) => {
          setBooks(data.data)
          setTotalPages(data.totalPages)
          setPage(data.page)
        })
        .catch(e => {
          if (e.response.status === 401) {
            navigate('/')
          }
        })
    } else {
      navigate('/')
    }
  }, [page])

  return (
    <>
      <S.Container>
        <S.Content>
          <Header
            mode="dark"
            user={{
              name: localStorage.getItem('name'),
              email: localStorage.getItem('email'),
              birthdate: localStorage.getItem('birthdate'),
              gender: localStorage.getItem('gender'),
              id: localStorage.getItem('id')
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
