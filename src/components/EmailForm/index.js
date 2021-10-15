import { Container, Input } from "./styles";

import Modal from '../Modal';

import { useState } from "react";

import { firebase } from '../../services/firebase';

import useAuth from '../../hooks/useAuth';

import { toast } from 'react-toastify';

export default function EmailForm({ setModalIsOpen, data }) {

  const [email, setEmail] = useState(data ? data.email : '');

  const { user } = useAuth();

  async function createEmail(event) {
    event.preventDefault();

    if (!data) {
      await firebase.database().ref(`/emails/${user.id}`).push({
        email,
      });

      toast.success('E-mail adicionado');
    } else {
      await firebase.database().ref(`/emails/${user.id}/${data.id}`).update({
        email,
      });

      toast.success('E-mail atualizado');
    }

    setModalIsOpen(false);
  }

  return (
    <Modal>
      <button onClick={() => setModalIsOpen(false)}>&times;</button>

      <Container as="form" onSubmit={createEmail}>
        <h1>{data ? 'Atualizar e-mail' : 'Adicionar e-mail'}</h1>

        <Input>
          <span>E-mail</span>
          <input
            type="email"
            value={email}
            onChange={({ target }) => setEmail(target.value)}
            required={true}
          />
        </Input>

        <button type="submit">Salvar</button>
      </Container>
    </Modal>
  );
}