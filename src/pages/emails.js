import Layout from '../components/Layout';

import { Container, Table, TableHead, TableRow, Row } from "../styles/Email";

import Link from 'next/link';

import { database } from '../services/firebase';

import EmailForm from '../components/EmailForm';

import { Fragment, useEffect, useState } from 'react';

import { useEmail } from '../hooks/useEmail';

import useAuth from '../hooks/useAuth';

export default function Email() {

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const emails = useEmail();

  return (
    <Layout title={`E-mails`}>
      <Container>
        {modalIsOpen && <EmailForm setModalIsOpen={setModalIsOpen} />}

        <Row>
          <h5>Lista de e-mails</h5>

          <button onClick={() => setModalIsOpen(true)}>Adicionar e-mail</button>
        </Row>

        <Table>
          <TableHead columns="3">
            <span>E-mail</span>
            <span>Produtos</span>
          </TableHead>

          {emails.length !== 0 && emails.map((email, index) => (
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

  const [productsLength, setProductLength] = useState(0);

  const { user } = useAuth();

  async function deleteEmail() {
    const result = window.confirm('Apagar e-mail?');

    if (result) {
      await database.ref(`/emails/${user.id}/${email.id}`).remove();
    }
  }

  useEffect(() => {
    if(email.products) {
      let length = 0;

      for(let id in email.products) {
        length = length + 1;
      }

      setProductLength(length);
    }
  }, []);

  return (
    <Fragment>
      {modalIsOpen && <EmailForm setModalIsOpen={setModalIsOpen} data={email} />}

      <TableRow background={background} columns="3">
        <Link href={`/email/${email.id}?email=${email.email}`}>
          <span className="redirect">{email.email}</span>
        </Link>

        <span>{productsLength}</span>

        <div>
          <div className="edit" onClick={() => setModalIsOpen(true)}>
            <img src={`/assets/edit.png`} />
          </div>

          <div className="delete" onClick={deleteEmail}>
            <img src={`/assets/delete.png`} />
          </div>
        </div>
      </TableRow>
    </Fragment>
  );
}