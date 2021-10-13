import Layout from '../../../components/Layout';

import { Container } from "../../..//styles/CreateEmail";

export default function CreateEmail() {
  return (
    <Layout title={`Produtos`}>
      <Container>
        <h1 style={{
          color: '#fafafa',
        }}>Aqui deve ter todos os produtos cadastrados no e-mail</h1>
      </Container>
    </Layout>
  );
}