import { Container, Main, Table, Title, ItemContainer } from "../../styles/Home";

import Header from '../../components/Header';
import AddProduct from '../../components/AddProduct';

import { FaEdit, FaTrashAlt } from 'react-icons/fa';

import { useEffect, useState } from "react";

import { useRouter } from 'next/router';

import { database } from '../../services/firebase';

import { Tracker } from '../../utils/Tracker';

export default function Email() {
  const [showModal, setShowModal] = useState(false);

  const { query } = useRouter();

  const [dataEmail, setDataEmail] = useState(null);

  const [products, setProducts] = useState([]);

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
      {showModal && <AddProduct setShowModal={setShowModal} emailRef={query.id} />}
      <Header />

      <Main>
        <Title>
          <h1>Lista de produtos - {dataEmail?.email}</h1>
          <button onClick={() => setShowModal(true)}>Adicionar produto</button>
        </Title>

        <Table>
          { products && products.map(product => (
            <Product key={product.id} props={product} />
          )) }
        </Table>
      </Main>
    </Container>
  );
}

function Product({ props }) {
  const [status, setStatus] = useState('');

  async function getStatus() {
    const status = await Tracker({ code: props.trackingCode });

    setStatus(status);
  }

  useEffect(() => {
    getStatus();
  }, []);

  return (
    <ItemContainer type={'product'}>
      <span>{props.productName}</span>
      <span>{props.trackingCode}</span>
      <span>{ status }</span>

      <div className="actions">
        <FaEdit size={20} color={'#B7791F'} className="icon" />
        <FaTrashAlt size={20} color={'#C53030'} className="icon" />
      </div>
    </ItemContainer>
  )
}