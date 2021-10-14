import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  color: red;
  color: ${({ theme }) => theme.text};;

  > h1 {
    font-size: 1.85rem;
    margin-bottom: 1rem;
  }

  > button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    padding: 1.65rem;
    border: none;
    border-radius: .5rem;
    background: #fafafa;
    color: #fafafa;
    background: #1ABC9C;
    font-size: 1.25rem;
    font-weight: 600;
    cursor: pointer;
    transition: opacity .25s;

    &:hover {
      opacity: .85;
    }
  }

  > div.checkbox {
    display: flex;
    align-items: center;
    gap: 1rem;
    justify-content: flex-end;

    > span {
      font-size: 1.25rem;
      color: ${({ theme }) => theme.text };
    }
  }
`;

export const Input = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  > span {
    font-size: 1.35rem;
    font-weight: 500;
  }
  
  > input {
    border: 1px solid rgba(0, 0, 0, .15);
    border-radius: .5rem;
    padding: 1.45rem 1.5rem;
    font-size: 1.35rem;
    color: #4D6F80;
    outline: none;
  }
`;