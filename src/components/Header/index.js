import { Container } from "./styles";

export default function Header({ title = `Página sem título` }) {
  return (
    <Container>
      <div className={`title`}>{ title }</div>

      <div className={`profile`}>
        <img src={`https://i.makeagif.com/media/3-26-2018/pi2C_B.gif`} />
      </div>
    </Container>
  );
}