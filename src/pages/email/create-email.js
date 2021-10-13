import Layout from '../../components/Layout';

import { Container } from "../../styles/CreateEmail";

export default function CreateEmail() {
  return (
    <Layout title={`Adicionar e-mail`}>
      <Container>
        <h1 style={{
          color: '#fafafa',
        }}>Formulário para adicionar um e-mail</h1>
      </Container>
    </Layout>
  );
}