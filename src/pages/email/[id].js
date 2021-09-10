import { Container, Main, Table, Title, ItemContainer } from "../../styles/Home";

import Header from '../../components/Header';

import { FaEdit, FaTrashAlt } from 'react-icons/fa';

export default function Email() {
  return (
    <Container>
      <Header />

      <Main>
        <Title>
          <h1>Lista de produtos</h1>
          <button>Adicionar produto</button>
        </Title>

        <Table>
          <Product />
        </Table>
      </Main>
    </Container>
  );
}

function Product() {
  return (
    <ItemContainer type={'product'}>
      <span>Mouse M800</span>
      <span>LE362865067SE </span>
      <span>Recebido</span>

      <div className="actions">
        <FaEdit size={20} color={'#B7791F'} className="icon" />
        <FaTrashAlt size={20} color={'#C53030'} className="icon" />
      </div>
    </ItemContainer>
  )
}