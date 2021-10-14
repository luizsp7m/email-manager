import { Container, Table, TableHead, TableRow } from '../../styles/Email';

import Layout from '../../components/Layout';

import { Fragment, useState } from 'react';

import ProductForm from '../../components/ProductForm';

import { useProduct } from '../../hooks/useProduct';

import { database } from '../../services/firebase';

import useAuth from '../../hooks/useAuth';

import { useRouter } from 'next/router';

export default function Email() {

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const products = useProduct();

  return (
    <Layout title={'Produtos'}>
      <Container>
        {modalIsOpen && <ProductForm setModalIsOpen={setModalIsOpen} />}

        <button onClick={() => setModalIsOpen(true)}>Adicionar produto</button>

        <Table>
          <TableHead columns="4">
            <span>Produto</span>
            <span>Código de rastreio</span>
            <span>Status</span>
          </TableHead>

          {products.length !== 0 && products.map((product, index) => <Product
            product={product}
            background={index % 2 === 0 ? '.1' : '.2'}
            key={index}
          />)}
        </Table>
      </Container>
    </Layout>
  );
}

function Product({ background, product }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const { user } = useAuth();

  const { query } = useRouter();

  async function deleteEmail() {
    const result = window.confirm('Apagar produto?');

    if (result) {
      await database.ref(`/emails/${user.id}/${query.idEmail}/products/${product.id}`).remove()
    }
  }

  return (
    <Fragment>
      { modalIsOpen && <ProductForm setModalIsOpen={setModalIsOpen} data={product} /> }

      <TableRow background={background} columns="4">
        <span>{product.productName}</span>
        <span>{product.trackerNumber}</span>
        <span>{product.status ? 'Recebido' : 'Pendente'}</span>

        <div>
          <div className="edit" onClick={() => setModalIsOpen(true)}>
            <img src={`/assets/edit.png`} />
          </div>

          <div className="delete" onClick={deleteEmail}>
            <img src={`/assets/delete.png`} />
          </div>
        </div>
      </TableRow>
    </Fragment>
  );
}