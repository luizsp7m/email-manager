import { Container, Navbar } from './styles';

import { useAuth } from '../../hooks/useAuth';

import Link from 'next/link';

import { FiLogOut } from 'react-icons/fi'

export default function Header() {
  const { signInWithGoogle, user, loadingUser, signOut } = useAuth();

  return (
    <Container>
      <Navbar>
        <Link href="/">Email Manager</Link>

        <div className="navbar-nav">
          {!loadingUser && user && (
            <>
              <div className="profile">
                <img src={user?.avatar} />
                <span>{user?.name}</span>
              </div>

              <button className="logout" onClick={signOut}>
                <FiLogOut size={20} color={'#fafafa'} className="icon" />
                <span>Sair</span>
              </button>
            </>
          )}

          {!loadingUser && !user && (
            <button className="button-signIn" onClick={signInWithGoogle}>
              <img src="./assets/google.png" alt="Google Icon" className="icon" />
              <span>Sign In</span>
            </button>
          )}
        </div>
      </Navbar>
    </Container>
  );
}