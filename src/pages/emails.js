import Layout from '../components/Layout';

import { Container, Table, TableHead, TableRow, Wrapper } from "../styles/Email";

import Link from 'next/link';

import { database } from '../services/firebase';

import EmailForm from '../components/EmailForm';

import { Fragment, useState } from 'react';

import { useEmail } from '../hooks/useEmail';

import useAuth from '../hooks/useAuth';

export default function Email() {

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const emails = useEmail();

  return (
    <Layout title={`E-mails`}>
      <Container>
        {modalIsOpen && <EmailForm setModalIsOpen={setModalIsOpen} />}

        <button onClick={() => setModalIsOpen(true)}>Adicionar e-mail</button>

        <Table>
          <TableHead columns="2">
            <span>E-mail</span>
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

  const { user } = useAuth();

  async function deleteEmail() {
    const result = window.confirm('Apagar e-mail?');

    if (result) {
      await database.ref(`/emails/${user.id}/${email.id}`).remove();
    }
  }

  return (
    <Fragment>
      {modalIsOpen && <EmailForm setModalIsOpen={setModalIsOpen} data={email} />}

      <TableRow background={background} columns="2">
        <Link href={`/email/${email.id}`}>
          <span className="redirect">{email.email}</span>
        </Link>

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