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

export const EmailContainer = styled.div`
  background: red;
  padding: 2.25rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  > span {
    font-size: 1.25rem;
    color: ${({ theme }) => theme.text};
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }

  > div.actions {
    display: flex;
    gap: 1rem;
    align-items: center;
    gap: 3rem;

    > div {
      padding: 1rem;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;

      &:hover {
        background: ${({ theme }) => theme.signout};
      }

      > img {
        width: 1.5rem;
      }
    }

    > div.edit {
      &:hover {
        background: #e67e22;
      }
    }
  }
`