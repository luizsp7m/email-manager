import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  background-color: #f0f0f5;
  display: grid;
  grid-template-columns: 2fr 1fr;

  @media(max-width: 1075px) {
    grid-template-columns: 1fr 1fr;
  }

  @media(max-width: 710px) {
    grid-template-columns: 1fr;
  }
`;

export const Image = styled.div`
  background-image: url(${({ src }) => src});
  background-position: center;
  background-size: cover;

  @media(max-width: 710px) {
    display: none;
  }
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 3rem;
  gap: 2rem;

  > h5 {
    font-size: 1.15rem;
    text-align: center;
    color: #4D6F80;
    margin: .85rem 0;
  }

  > button.signInWithGoogle {
    > img {
      width: 2.25rem;
      height: auto;
    }

    > span {
      font-size: 1.25rem;
      font-weight: 600;
      color: #4D6F80;
    }

    background: #fff;
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
    background: #3498db;
    font-size: 1.25rem;
    font-weight: 600;
    cursor: pointer;
    transition: opacity .25s;

    &:hover {
      opacity: .85;
    }
  }

  > hr {
    background-color: rgba(0, 0, 0, .1); 
    height: 1px; 
    border: 0;
  }

  > span {
    align-self: center;
    font-size: 1.30rem;
    color: #3498db;
    cursor: pointer;
    font-weight: 600;
  }
`;

export const Input = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  > span {
    font-size: 1.35rem;
    color: #4D6F80;
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

export const Error = styled.div`
  padding: 1.55rem 1.5rem;
  background: #e74c3c;
  border-radius: .5rem;
  font-size: 1.15rem;
  color: #fafafa;
  text-align: center;
`