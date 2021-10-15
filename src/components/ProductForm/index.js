import { useState } from 'react';

import Modal from '../Modal';

import { Container, Input } from './styles';

import { useRouter } from 'next/router';

import { firebase } from '../../services/firebase';

import useAuth from '../../hooks/useAuth';

import { toast } from 'react-toastify';

export default function ProductForm({ setModalIsOpen, data }) {

  const [productName, setProductName] = useState(data ? data.productName : '');
  const [trackerNumber, setTrackerNumber] = useState(data ? data.trackerNumber : '');
  const [status, setStatus] = useState(data ? data.status : false);

  const { user } = useAuth();

  const { query } = useRouter();

  async function createProduct(event) {
    event.preventDefault();

    if (!data) {
      await firebase.database().ref(`/emails/${user.id}/${query.idEmail}/products`).push({
        productName, trackerNumber, status
      });

      toast.success('Produto adicionado');
    } else {
      await firebase.database().ref(`/emails/${user.id}/${query.idEmail}/products/${data.id}`).update({
        productName, trackerNumber, status
      });

      toast.success('Produto atualizado');
    }

    setModalIsOpen(false);
  }

  return (
    <Modal>
      <button onClick={() => setModalIsOpen(false)}>&times;</button>

      <Container as="form" onSubmit={createProduct}>
        <h1>{!data ? 'Adicionar produto' : 'Atualizar produto'}</h1>

        <Input>
          <span>Nome do produto</span>
          <input
            type="text"
            value={productName}
            onChange={({ target }) => setProductName(target.value)}
            required={true}
          />
        </Input>

        <Input>
          <span>Código de rastreio</span>
          <input
            type="text"
            value={trackerNumber}
            onChange={({ target }) => setTrackerNumber(target.value)}
          />
        </Input>

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

        <button type="submit">Salvar</button>
      </Container>
    </Modal>
  );
}