import { Container, Navbar } from './styles';

import { useAuth } from '../../hooks/useAuth';

import Link from 'next/link';

export default function Header() {
  const { signInWithGoogle } = useAuth();

  return (
    <Container>
      <Navbar>
        <Link href="/">Email Manager</Link>

        <div className="navbar-nav">
          {/* <button className="button-signIn" onClick={signInWithGoogle}>
            <img src="./assets/google.png" alt="Google Icon" />
            <span>Sign In</span>
          </button> */}
        </div>
      </Navbar>
    </Container>
  );
}