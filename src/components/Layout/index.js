import Head from 'next/head';

import { Container, Content } from "./styles";

import Sidebar from "../Sidebar";

import Header from '../Header';

import useAuth from '../../hooks/useAuth';

import { Fragment, useEffect } from 'react';

import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import router from 'next/router';

export default function Layout({ title = 'Página sem título', children }) {

  const { user, loadingUser } = useAuth();

  useEffect(() => {
    !loadingUser && !user && router.push('/login')
  }, [loadingUser]);

  return (
    <Container>
      <Head>
        <title>E-mail Manager | {title}</title>
      </Head>

      {!loadingUser && user && (
        <Fragment>
          <ToastContainer style={{
            fontSize: '1.35rem'
          }} />
          
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