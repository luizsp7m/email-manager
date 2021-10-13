import { Container, Nav, SignOut } from "./styles";

import Link from 'next/link';

export default function Sidebar() {
  return (
    <Container>
      <Nav>
        <div className={`logo`}>
          Logo
        </div>

        <Link href={`/`} passHref>
          <div className={`nav-item`}>
            <img src={`/assets/home.png`} alt={`Logout`} />
            <span>Início</span>
          </div>
        </Link>

        <Link href={`/email`} passHref>
          <div className={`nav-item`}>
            <img src={`/assets/email.png`} alt={`Logout`} />
            <span>E-mails</span>
          </div>
        </Link>
      </Nav>

      <SignOut>
        <img src={`/assets/logout.png`} alt={`Logout`} />
        <span>Sair</span>
      </SignOut>
    </Container>
  );
}