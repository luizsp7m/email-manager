import Header from '../components/Header';
import AddEmail from '../components/AddEmail';

import { Container, Main, Title, Table, ItemContainer } from '../styles/Home';

import { FaEdit, FaTrashAlt } from 'react-icons/fa';

import { useState } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useAuth } from '../hooks/useAuth';

export default function Home() {
  const [showModal, setShowModal] = useState(false);

  const { user, loadingUser } = useAuth();

  const notify = () => {
    toast.success('E-mail adicionado');
  }

  return (
    <Container>
      {showModal && <AddEmail setShowModal={setShowModal} notify={notify} />}

      <Header />

      <ToastContainer style={{
          fontSize: '1.25rem',
        }} />

      {!loadingUser && user ? (
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
      ) : (
        <h1>Não está logado</h1>
      )}
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