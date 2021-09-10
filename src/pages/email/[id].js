import { Container, Main, Table, Title, ItemContainer } from "../../styles/Home";

import Header from '../../components/Header';
import AddProduct from '../../components/AddProduct';

import { FaEdit, FaTrashAlt } from 'react-icons/fa';

import { useState } from "react";

export default function Email() {
  const [showModal, setShowModal] = useState(false);

  return (
    <Container>
      { showModal && <AddProduct setShowModal={setShowModal} /> }
      <Header />

      <Main>
        <Title>
          <h1>Lista de produtos</h1>
          <button onClick={() => setShowModal(true)}>Adicionar produto</button>
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