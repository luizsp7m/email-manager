import Head from 'next/head';

import { Container, Content } from "./styles";

import Sidebar from "../Sidebar";
import Header from '../Header';

export default function Layout({ title = 'Página sem título', children }) {
  return (
    <Container>
      <Head>
        <title>E-mail Manager | {title}</title>
      </Head>

      <Header title={title} />

      <Sidebar />


      <Content>
        { children }
      </Content>
    </Container>
  );
}