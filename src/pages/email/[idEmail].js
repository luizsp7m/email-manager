import { Container, Table, TableHead, TableRow } from '../../styles/Email';

import Layout from '../../components/Layout';

export default function Email() {
  const products = [{
    name: 'Nome do produto',
    tracker: '234455454',
    status: 'Recebido',
  }, {
    name: 'Nome do produto',
    tracker: '234455454',
    status: 'Recebido',
  }, {
    name: 'Nome do produto',
    tracker: '234455454',
    status: 'Recebido',
  }, {
    name: 'Nome do produto',
    tracker: '234455454',
    status: 'Recebido',
  }];

  return (
    <Layout title={'Sei lá'}>
      <Container>
        <button>Adicionar produto</button>

        <Table>
          <TableHead columns="4">
            <span>Produto</span>
            <span>Código de rastreio</span>
            <span>Status</span>
          </TableHead>

          {products.map((product, index) => <Product 
            product={product}
            background={index % 2 === 0 ? '.1' : '.2'}
          />)}
        </Table>
      </Container>
    </Layout>
  );
}

function Product({ background, product }) {
  return (
    <TableRow background={background} columns="4">
      <span>{product.name}</span>
      <span>{product.tracker}</span>
      <span>{product.status}</span>

      <div>
        <div className="edit">
          <img src={`/assets/edit.png`} />
        </div>

        <div className="delete">
          <img src={`/assets/delete.png`} />
        </div>
      </div>
    </TableRow>
  );
}