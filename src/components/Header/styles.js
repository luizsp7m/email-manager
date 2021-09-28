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
    display: flex;
    align-items: center;
    gap: 3rem;

    > div.profile {
      display: flex;
      align-items: center;
      gap: 1rem;
      cursor: default;

      > img {
        width: 4rem;
        border-radius: 50%;
      }

      > span {
        color: #f0f0f5;
        font-weight: 500;
        font-size: 1.25rem;
      }
    }

    > button {
      display: flex;
      align-items: center;
      gap: 1rem;
      padding: 1rem 2rem;
      background: #f0f0f5;
      border-radius: .5rem;
      border: none;
      transition: background .25s;
      cursor: pointer;

      > span {
        font-size: 1.35rem;
        font-weight: 600;
        opacity: .9;
      }

      > img {
        width: 100%;
        max-width: 2rem;
        height: auto;
      }

      @media(max-width: 425px) {
        padding: 1rem;

        > span {
          display: none;
        }
      }
    }

    > button.button-signIn {
      background: #f0f0f5;

      &:hover {
        background: #fff;
      }
    }

    > button.logout {
      background: #C53030;

      > span {
        color: #fafafa;
      }

      &:hover {
        background: #9B2C2C;
      }
    }
  }
`;