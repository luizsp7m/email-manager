import { Container, Nav, SignOut } from "./styles";

import Link from 'next/link';

import useApp from '../../hooks/useApp';

import useAuth from '../../hooks/useAuth';

export default function Sidebar() {
  const { navItem } = useApp();

  const { logout } = useAuth();

  return (
    <Container>
      <Nav>
        <div className={`logo`}>
          
        </div>

        <Link href={`/`} passHref>
          <div className={`nav-item ${navItem === `` && `selected`}`}>
            <img src={`/assets/home.png`} alt={`Home`} />
            <span>Início</span>
          </div>
        </Link>

        <Link href={`/emails`} passHref>
        <div className={`nav-item ${navItem === `email` && `selected`} ${navItem === `emails` && `selected`}`}>
            <img src={`/assets/email.png`} alt={`Email`} />
            <span>E-mails</span>
          </div>
        </Link>
      </Nav>

      <SignOut>
        <img src={`/assets/logout.png`} alt={`Logout`} onClick={logout} />
        <span>Sair</span>
      </SignOut>
    </Container>
  );
}