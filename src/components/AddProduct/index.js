import { Container, Form } from './styles';

import { MdClose } from 'react-icons/md';
import { useState } from 'react';

import { database, firebase } from '../../services/firebase';

export default function AddEmail({ setShowModal, emailRef }) {

  const [productName, setProductName] = useState('');
  const [trackingCode, setTrackingCode] = useState('');

  async function createProduct(event) {
    event.preventDefault();

    await database.ref(`emails/${emailRef}/products`).push({
      productName,
      trackingCode,
    });

    setShowModal(false);
  }

  return (
    <Container>
      <Form as="form" onSubmit={createProduct}>
        <h1>Adicionar novo produto</h1>

        <div className="input-group">
          <label>Nome</label>
          <input
            type="text"
            required={true}
            onChange={({ target }) => setProductName(target.value)}
            value={productName}
          />
        </div>

        <div className="input-group">
          <label>Código de rastreio</label>
          <input
            type="text"
            required={true}
            onChange={({ target }) => setTrackingCode(target.value)}
            value={trackingCode}
          />
        </div>

        <button type="submit">Adicionar</button>

        <MdClose
          size={20}
          color="#C53030"
          className="icon"
          onClick={() => setShowModal(false)}
        />
      </Form>
    </Container>
  );
}