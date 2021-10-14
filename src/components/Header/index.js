import { Container } from "./styles";

import useAuth from '../../hooks/useAuth';

export default function Header({ title = `Página sem título` }) {

  const { user } = useAuth();

  return (
    <Container>
      <div className={`title`}>{ title }</div>

      <div className={`profile`}>
        <img src={`
          ${user.avatar ? user.avatar : `https://i.makeagif.com/media/3-26-2018/pi2C_B.gif`}
        `} alt="Avatar" />
      </div>
    </Container>
  );
}