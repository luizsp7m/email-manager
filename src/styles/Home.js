import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
`;

export const Main = styled.div`
  width: 90%;
  max-width: 1440px;
  margin: 0 auto;
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 3rem 0;

  > h1 {
    font-size: 2rem;
    font-weight: bold;
    color: #4A5568;
  }

  > button {
    background: #2C7A7B;
    color: #fafafa;
    padding: 1.45rem 2rem;
    border-radius: .5rem;
    border: none;
    cursor: pointer;
    transition: background .25s;

    &:hover {
      background: #285E61;
    }
  }
`;

export const Table = styled.div`
  border-radius: .5rem;
  padding: 3rem;
  border: 1px solid rgba(0, 0, 0, .05);
  box-shadow: 1px 1px 3px rgba(0, 0, 0, .05);

  /* display: flex;
  flex-direction: column;
  gap: 4rem; */
`

export const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: default;

  &:not(:last-child) {
    padding-bottom: 2.5rem;
    border-bottom: 1px solid rgba(0, 0, 0, .05);
    margin-bottom: 2.5rem;
  }

  > span {
    font-size: 1.35rem;
    color: #718096;
    font-weight: 500;

    &:hover {
      ${({ type }) => type !== 'product' && `
        cursor: pointer;
        text-decoration: underline;
    ` }
    }
  }

  > div.actions {
    display: flex;
    gap: 3rem;

    .icon {
      cursor: pointer;
      transition: opacity .25s;

      &:hover {
        opacity: .85;
      }
    }
  }
`