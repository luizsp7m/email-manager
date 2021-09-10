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
        <h1>Adicionar novo produto</h1>

        <div className="input-group">
          <label>Nome</label>
          <input type="text" required="true" />
        </div>

        <div className="input-group">
          <label>Código de rastreio</label>
          <input type="text" required="true" />
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