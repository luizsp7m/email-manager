import styled from 'styled-components';

export const Container = styled.div`
  padding: 3rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 3rem;

  > button {
    align-self: flex-end;
    padding: 1.25rem 2rem;
    border-radius: .5rem;
    border: 0;
    outline: 0;
    background: #1abc9c;
    cursor: pointer;
    color: #fafafa;
  }
`;

export const Table = styled.div`
  width: 100%;
`;

export const TableHead = styled.div`
  display: grid;
  grid-template-columns: ${({ columns }) => `repeat(${columns}, 1fr)`};
  background: rgba(0, 0, 0, .2);
  border-top-left-radius: .5rem;
  border-top-right-radius: .5rem;
  padding: 2.25rem;
  align-items: center;

  > span {
    color: ${({ theme }) => theme.text };
    font-size: 1.35rem;
    font-weight: bold;
    cursor: default;
  }
`
export const TableRow = styled.div`
  display: grid;
  grid-template-columns: ${({ columns }) => `repeat(${columns}, 1fr)`};
  padding: 2.25rem;
  background: rgba(0, 0, 0, ${({ background }) => background});

  align-items: center;

  &:last-of-type {
    border-bottom-right-radius: .5rem;
    border-bottom-left-radius: .5rem;
  }

  > span {
    font-size: 1.25rem;
    color: ${({ theme }) => theme.text};
    cursor: default;
  }

  > span.redirect {
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }

  > div {
    display: flex;
    gap: 1rem;
    align-items: center;
    gap: 3rem;

    justify-self: center;

    > div.edit {
      &:hover {
        background: #e67e22;
      }
    }

    > div.delete {
      &:hover {
        background: #d63031;
      }
    }

    > div {
      padding: 1rem;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;

      > img {
        width: 1.5rem;
        height: auto;
      }
    }
  }
`