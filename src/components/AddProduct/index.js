import { Container, Form } from './styles';

import { MdClose } from 'react-icons/md';
import { useState } from 'react';

import { database, firebase } from '../../services/firebase';

export default function AddEmail({ setShowModal, emailRef, data, notify }) {

  const [productName, setProductName] = useState(data ? data.productName : '');
  const [trackingCode, setTrackingCode] = useState(data ? data.trackingCode : '');
  const [status, setStatus] = useState(data ? data.status : false);

  async function createProduct(event) {
    event.preventDefault();

    if (!data) {
      await database.ref(`emails/${emailRef}/products`).push({
        productName,
        trackingCode,
        status,
      });
    } else {
      await database.ref(`emails/${emailRef}/products/${data.id}`).set({
        productName,
        trackingCode,
        status,
      });
    }

    notify();

    setShowModal(false);
  }

  return (
    <Container>
      <Form as="form" onSubmit={createProduct}>
        <h1>{data ? 'Atualizar produto' : 'Adicionar novo produto'}</h1>

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

        {data && (
          <div className="checkbox">
            <input
              type="checkbox"
              onChange={() => setStatus(!status)}
              checked={status}
              value={status}
            />
            <span>Já recebi o produto</span>
          </div>
        )}

        <button type="submit">{data ? 'Atualizar' : 'Adicionar'}</button>

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