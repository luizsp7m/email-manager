import Header from '../components/Header';

import { Container, Main, Title, Table, EmailContainer } from '../styles/Home';

import { FaEdit, FaTrashAlt } from 'react-icons/fa';

export default function Home() {
  return (
    <Container>
      <Header />
      <Main>
        <Title>
          <h1>Lista de e-mails</h1>
          <button>Adicionar e-mail</button>
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
    <EmailContainer>
      <span>Luizoliveira2808@gmail.com</span>

      <div className="actions">
        <FaEdit size={20} color={'#B7791F'} className="icon" />
        <FaTrashAlt size={20} color={'#C53030'} className="icon" />
      </div>
    </EmailContainer>
  )
}