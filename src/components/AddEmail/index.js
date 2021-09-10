import { Container, Form } from './styles';

import { MdClose } from 'react-icons/md';

export default function AddEmail({ setShowModal }) {

  function submit(event) {
    event.preventDefault();
    alert('OK');
  }

  return (
    <Container>
      <Form as="form" onSubmit={submit}>
        <h1>Adicionar novo e-mail</h1>

        <div className="input-group">
          <label>E-mail</label>
          <input type="email" required="true" />
        </div>

        <button type="submit">Adicionar</button>

        <MdClose size={20} color="#C53030" className="icon" onClick={() => setShowModal(false)} />
      </Form>
    </Container>
  );
}