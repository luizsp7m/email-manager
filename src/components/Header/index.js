import { Container, Navbar } from './styles';

import { useAuth } from '../../hooks/useAuth';

export default function Header() {
  const { signInWithGoogle } = useAuth();

  return (
    <Container>
      <Navbar>
        <h1>Email Manager</h1>

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