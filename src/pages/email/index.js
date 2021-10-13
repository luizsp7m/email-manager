import Layout from '../../components/Layout';

import { Container, Table, EmailContainer } from "../../styles/Email";

import Link from 'next/link';

export default function Email() {
  const emailList = new Array({
    email: 'luiz@gmail.com'
  }, {
    email: 'luiz@gmail.com'
  }, {
    email: 'luiz@gmail.com'
  }, {
    email: 'luiz@gmail.com'
  });

  return (
    <Layout title={`E-mails`}>
      <Container>
        <Link href={`/email/create-email`} passHref>
          <button>Adicionar e-mail</button>
        </Link>

        <Table>
          {emailList.map((email, index) => (
            <EmailContainer key={index} style={{
              background: `${index % 2 === 0 ? 'rgba(0, 0, 0, .2)' : 'rgba(0, 0, 0, .1'}`
            }}>
              <Link href={`/email/12345/`} passHref>
                <span>{email.email}</span>
              </Link>

              <div className={`actions`}>
                <div className={`edit`}>
                  <img src={`/assets/edit.png`} />
                </div>

                <div>
                  <img src={`/assets/delete.png`} />
                </div>
              </div>
            </EmailContainer>
          ))}
        </Table>
      </Container>
    </Layout>
  );
}