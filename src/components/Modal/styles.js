import styled from 'styled-components';

export const Container = styled.div`
  background: ${({ theme }) => theme.backgroundModal };
  position: fixed;
  bottom: 0; left: 0;
  right: 0; top: 0;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  background-color: ${({ theme }) => theme.modal }; /* 222F3E */
  position: relative;
  margin: 0 auto;
  padding: 5rem;
  max-width: 55rem;
  width: 95%;
  height: auto;
  border-radius: 1rem;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, .25);

  > button {
    background-color: ${({ theme }) => theme.signout};
    width: 4rem;
    height: 4rem;
    color: white;
    position:absolute;
    right:0;
    text-align:center;
    top:0;
    z-index: 1;
    border: 0;
    outline: 0;
    font-size: 1.35rem;
    cursor: pointer;
  }
`