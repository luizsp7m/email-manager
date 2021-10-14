import { Container, Image, Form, Input } from '../styles/Login';

import Head from 'next/head';

import { useState } from 'react';

import useAuth from '../hooks/useAuth';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [mode, setMode] = useState('signIn');

  const { signInWithGoogle } = useAuth();

  return (
    <Container>
      <Head>
        <title>Log In</title>
      </Head>

      <Image src={`https://source.unsplash.com/random`} />

      <Form>
        <button className={`signInWithGoogle`} onClick={signInWithGoogle}>
          <img src={`/assets/google.png`} />
          <span>Continuar com Google</span>
        </button>

        <h5>Ou</h5>

        <Input>
          <span>E-mail</span>
          <input
            type={`email`}
            value={email}
            onChange={({ target }) => setEmail(target.value)}
          />
        </Input>

        <Input>
          <span>Senha</span>
          <input
            type={`password`}
            value={password}
            onChange={({ target }) => setPassword(target.value)}
          />
        </Input>

        <span onClick={() => mode === 'signIn' ? setMode('signUp') : setMode('signIn')}>
          {mode === 'signIn' ? 'Crie uma conta' : 'Já possui uma conta?'}
        </span>
      </Form>
    </Container>
  );
}