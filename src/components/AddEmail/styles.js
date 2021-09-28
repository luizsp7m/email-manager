import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, .5);
  min-height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
`;

export const Form = styled.div`
  background: #fafafa;
  border-radius: .5rem;
  padding: 4rem;
  position: relative;
  /* border: 1px solid rgba(0, 0, 0, .05);
  box-shadow: 3px 3px 10px rgba(0, 0, 0, .05); */

  display: flex;
  flex-direction: column;
  gap: 3rem;

  @media(max-width: 600px) {
    min-width: 90%;
  }

  > h1 {
    font-size: 2rem;
    font-weight: bold;
    color: #4A5568;
  }

  > div.input-group {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    > label {
      font-size: 1.35rem;
      color: #718096;
    }

    > input {
      border-radius: .5rem;
      font-size: 1.35rem;
      border: 1px solid rgba(0, 0, 0, .05);
      padding: 1.45rem;
      background: #f0f0f5;
      min-width: 498px;
      color: #4A5568;

      @media(max-width: 600px) {
        min-width: 90%;
      }
    }

    @media(max-width: 600px) {
      > input {
        width: 90%;
      }
    }
  }

  button {
    border: 0;
    padding: 2rem;
    background: #2C7A7B;
    cursor: pointer;
    transition: background .25s;
    color: #fafafa;
    font-size: 1.35rem;
    font-weight: 500;
    border-radius: .5rem;

    &:hover {
      background: #285E61;
    }
  }

  > .icon {
    position: absolute;
    right: 4rem;
    cursor: pointer;
  }
`;