import Layout from '../components/Layout';

import { Container, Table, TableHead, TableRow, Wrapper } from "../styles/Email";

import Link from 'next/link';

import EmailForm from '../components/EmailForm';

import { Fragment, useState } from 'react';

export default function Email() {
  const emailList = new Array({
    email: 'luiz@gmail.com'
  }, {
    email: 'antonio@gmail.com'
  }, {
    email: 'souza@gmail.com'
  });

  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <Layout title={`E-mails`}>
      <Container>
        {modalIsOpen && <EmailForm setModalIsOpen={setModalIsOpen} />}

        <button onClick={() => setModalIsOpen(true)}>Adicionar e-mail</button>

        <Table>
          <TableHead columns="2">
            <span>E-mail</span>
          </TableHead>

          {emailList.map((email, index) => (
            <EmailContainer
              email={email}
              background={index % 2 === 0 ? '.1' : '.2'}
              key={index}
              modalIsOpen={modalIsOpen}
              setModalIsOpen={setModalIsOpen}
            />
          ))}
        </Table>
      </Container>
    </Layout>
  );
}

function EmailContainer({ background, email }) {

  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <Fragment>
      {modalIsOpen && <EmailForm setModalIsOpen={setModalIsOpen} data={email} />}

      <TableRow background={background} columns="2">
        <Link href={`/email/${email.email}`}>
          <span className="redirect">{email.email}</span>
        </Link>

        <div>
          <div className="edit" onClick={() => setModalIsOpen(true)}>
            <img src={`/assets/edit.png`} />
          </div>

          <div className="delete">
            <img src={`/assets/delete.png`} />
          </div>
        </div>
      </TableRow>
    </Fragment>
  );
}