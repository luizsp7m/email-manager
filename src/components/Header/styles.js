import styled from 'styled-components';

export const Container = styled.div`
  background: #0D1117;
`;

export const Navbar = styled.div`
  width: 90%;
  max-width: 1440px;
  margin: 0 auto;
  height: 7rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  > a {
    color: #f0f0f5;
    cursor: pointer;
    font-size: 2rem;
    text-decoration: none;
    font-weight: bold;
  }

  > div.navbar-nav {
    

    > button.button-signIn {
      display: flex;
      align-items: center;
      gap: 1rem;
      padding: 1rem 2rem;
      background: #f0f0f5;
      border-radius: .5rem;
      border: none;
      transition: background .25s;
      cursor: pointer;

      &:hover {
        background: #fff;
      }

      > img {
        width: 100%;
        max-width: 2rem;
        height: auto;
      }

      > span {
        font-size: 1.35rem;
        font-weight: 600;
        opacity: .9;
      }
    }
  }
`;