import Layout from '../components/Layout';

import { Container } from '../styles/Home';

export default function Dashboard() {
  return (
    <Layout title={`Início`}>
      <Container>
        <h1 style={{
          color: '#fafafa',
        }}>Início</h1>
      </Container>
    </Layout>
  );
}