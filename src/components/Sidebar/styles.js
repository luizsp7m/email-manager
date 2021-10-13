import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  width: 70px;
  position: fixed;
  background: ${({ theme }) => theme.sidebar};
`;

export const Nav = styled.div`
  > div {
    width: 70px;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;

    color: #fafafa;
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