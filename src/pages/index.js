import Header from '../components/Header';
import AddEmail from '../components/AddEmail';

import { Container, Main, Title, Table, ItemContainer } from '../styles/Home';

import { FaEdit, FaTrashAlt } from 'react-icons/fa';

import { Fragment, useState } from 'react';

import { database } from '../services/firebase';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useAuth } from '../hooks/useAuth';
import { useEmail } from '../hooks/useEmail';

import { useRouter } from 'next/router';

export default function Home() {
  const [showModal, setShowModal] = useState(false);

  const { user, loadingUser } = useAuth();

  const { emails } = useEmail();

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

      <Main>
        {!loadingUser && user ? <>
          <Title>
            <h1>Lista de e-mails</h1>
            <button onClick={() => setShowModal(true)}>Adicionar e-mail</button>
          </Title>

          {emails.length !== 0 && (
            <Table>
              {emails.map(email => (
                <Email key={email.id} props={email} />
              ))}
            </Table>
          )}
        </> : <Title><h1>Entre com uma conta Google para continuar</h1></Title>}
      </Main>
    </Container>
  )
}

function Email({ props }) {
  const router = useRouter();

  const notify = () => {
    toast.success('E-mail atualizado');
  }

  const [showModal, setShowModal] = useState(false);

  async function deleteEmail() {
    const result = window.confirm('Apagar e-mail?');

    if (result) {
      await database.ref(`/emails/${props.id}`).remove();

      console.log('Removido');
    }
  }

  return (
    <Fragment>
      {showModal && <AddEmail notify={notify} setShowModal={setShowModal} data={props} />}
      <ItemContainer>
        <span onClick={() => router.push(`/email/${props.id}`)}>{props.email}</span>

        <div className="actions">
          <FaEdit size={20} color={'#B7791F'} className="icon" onClick={() => setShowModal(true)} />
          <FaTrashAlt size={20} color={'#C53030'} className="icon" onClick={deleteEmail} />
        </div>
      </ItemContainer>
    </Fragment>
  )
}