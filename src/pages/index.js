import Header from '../components/Header';
import AddEmail from '../components/AddEmail';

import { Container, Main, Title, Table, ItemContainer } from '../styles/Home';

import { FaEdit, FaTrashAlt } from 'react-icons/fa';

import { useState } from 'react';

export default function Home() {
  const [showModal, setShowModal] = useState(false);

  return (
    <Container>
      { showModal && <AddEmail setShowModal={setShowModal} /> }
      <Header />
      <Main>
        <Title>
          <h1>Lista de e-mails</h1>
          <button onClick={() => setShowModal(true)}>Adicionar e-mail</button>
        </Title>

        <Table>
          <Email />
          <Email />
          <Email />
          <Email />
        </Table>
      </Main>
    </Container>
  )
}

function Email() {
  return (
    <ItemContainer>
      <span>Luizoliveira2808@gmail.com</span>

      <div className="actions">
        <FaEdit size={20} color={'#B7791F'} className="icon" />
        <FaTrashAlt size={20} color={'#C53030'} className="icon" />
      </div>
    </ItemContainer>
  )
}