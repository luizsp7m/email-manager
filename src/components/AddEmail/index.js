import { Container, Form } from './styles';

import { MdClose } from 'react-icons/md';

import { useState } from 'react';

import { useAuth } from '../../hooks/useAuth';
import { database, firebase } from '../../services/firebase';

export default function AddEmail({ setShowModal, notify }) {
  const [email, setEmail] = useState('');

  const { user } = useAuth();

  async function createEmail(event) {
    event.preventDefault();

    const emailRef = database.ref('emails');

    const firebaseEmail = await emailRef.push({
      email: email, 
      userId: user.id
    });

    notify();


    setShowModal(false);
  }

  return (
    <Container>
      <Form as="form" onSubmit={createEmail}>
        <h1>Adicionar novo e-mail</h1>

        <div className="input-group">
          <label>E-mail</label>
          <input
            type="email"
            required={true}
            value={email}
            onChange={({ target }) => setEmail(target.value)}
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