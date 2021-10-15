import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  width: 70px;
  position: fixed;
  background: ${({ theme }) => theme.sidebar};

  @media(max-width: 425px) {
    width: 100%;
    height: 70px;
    bottom: 0;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const Nav = styled.div`
  @media(max-width: 425px) {
    display: flex;
    width: 100%;
  }

  > div {
    width: 70px;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fafafa;

    @media(max-width: 425px) {
      width: 50%;
    }
  }

  > div.logo {
    @media(max-width: 425px) {
      display: none
    }
  }

  .selected {
    background: #222f3e;
  }

  > div.nav-item {
    flex-direction: column;
    gap: 1rem;
    cursor: pointer;

    &:hover {
      background: #222f3e;
    }

    > img {
      max-width: 2rem;
      height: auto;
    }

    > span {
      color: #fafafa;
    }
  }
`;

export const SignOut = styled.div`
  width: 70px;
  height: 70px;
  background: ${({ theme }) => theme.signout};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  cursor: pointer;

  @media(max-width: 425px) {
    display: none
  }

  &:hover {
    background: #c0392b;
  }

  > img {
    max-width: 2rem;
    height: auto;
  }

  > span {
    color: #fafafa;
  }
`;