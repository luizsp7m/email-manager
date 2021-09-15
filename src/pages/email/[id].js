import { Container, Main, Table, Title, ItemContainer } from "../../styles/Home";

import Header from '../../components/Header';
import AddProduct from '../../components/AddProduct';

import { FaEdit, FaTrashAlt } from 'react-icons/fa';

import { Fragment, useEffect, useState } from "react";

import { useRouter } from 'next/router';

import { database } from '../../services/firebase';

import { Tracker } from '../../utils/Tracker';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Email() {
  const [showModal, setShowModal] = useState(false);

  const { query } = useRouter();

  const [dataEmail, setDataEmail] = useState(null);

  const [products, setProducts] = useState([]);

  const notify = () => {
    toast.success('Produto adicionado');
  }

  useEffect(() => {
    const emailRef = database.ref(`emails/${query.id}`);

    emailRef.on('value', snapshot => {
      const data = snapshot.val();

      if (data) {
        const products = [];

        for (let id in data.products) {
          products.push({ id, ...data.products[id] });
        }

        setProducts(products);
      }

      setDataEmail(data);
    });
  }, [query.id]);

  return (
    <Container>
      {showModal && <AddProduct setShowModal={setShowModal} emailRef={query.id} notify={notify} />}
      <Header />

      <ToastContainer style={{
        fontSize: '1.25rem',
      }} />

      <Main>
        <Title>
          <h1>Lista de produtos - {dataEmail?.email}</h1>
          <button onClick={() => setShowModal(true)}>Adicionar produto</button>
        </Title>

        {products.length !== 0 && (
          <Table>
            {products && products.map(product => (
              <Product key={product.id} props={product} />
            ))}
          </Table>
        )}
      </Main>
    </Container>
  );
}

function Product({ props }) {
  const [showModal, setShowModal] = useState(false);

  const { query } = useRouter();

  async function deleteProduct() {
    const result = window.confirm('Apagar produto?');

    if (result) {
      await database.ref(`/emails/${query.id}/products/${props.id}`).remove();

      console.log('Removido');
    }
  }

  const notify = () => {
    toast.success('Produto atualizado');
  }


  return (
    <Fragment>
      {showModal && <AddProduct setShowModal={setShowModal} emailRef={query.id} data={props} notify={notify} />}

      <ItemContainer type={'product'}>
        <span>{props.productName}</span>
        <span>{props.trackingCode}</span>
        <span>Status</span>

        <div className="actions">
          <FaEdit size={20} color={'#B7791F'} className="icon" onClick={() => setShowModal(true)} />
          <FaTrashAlt size={20} color={'#C53030'} className="icon" onClick={deleteProduct} />
        </div>
      </ItemContainer>
    </Fragment>
  )
}