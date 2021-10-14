import Head from 'next/head';

import { Container, Content } from "./styles";

import Sidebar from "../Sidebar";

import Header from '../Header';

import useAuth from '../../hooks/useAuth';

import { Fragment } from 'react';

export default function Layout({ title = 'Página sem título', children }) {

  const { user, loadingUser } = useAuth();

  return (
    <Container>
      <Head>
        <title>E-mail Manager | {title}</title>
      </Head>

      {loadingUser && <h1>Carregando</h1>}

      {!loadingUser && !user && <h1>Redirecionar</h1>}

      {!loadingUser && user && (
        <Fragment>
          <Header title={title} />

          <Sidebar />
          
          <Content>
            {children}
          </Content>
        </Fragment>
      )}
    </Container>
  );
}