import { Container, Form } from './styles';

import { MdClose } from 'react-icons/md';

import { useState } from 'react';

import { useAuth } from '../../hooks/useAuth';
import { database, firebase } from '../../services/firebase';

export default function AddEmail({ setShowModal, notify, data }) {
  const [email, setEmail] = useState(data ? data.email : '');

  const { user } = useAuth();

  console.log(data);

  async function createEmail(event) {
    event.preventDefault();

    if (!data) {
      await database.ref(`emails`).push({
        email: email,
        userId: user.id
      });
    } else {
      await database.ref(`emails/${data.id}`).set({
        email: email,
        userId: data.userId
      });
    }

    notify();

    setShowModal(false);
  }

  return (
    <Container>
      <Form as="form" onSubmit={createEmail}>
        <h1>{data ? 'Atualizar e-mail' : 'Adicionar novo e-mail'}</h1>

        <div className="input-group">
          <label>E-mail</label>
          <input
            type="email"
            required={true}
            value={email}
            onChange={({ target }) => setEmail(target.value)}
          />
        </div>

        <button type="submit">{ data ? 'Atualizar' : 'Adicionar' }</button>

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