import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  height: 70px;
  width: calc(100% - 70px);
  right: 0;
  padding: 0 3rem;
  background: ${({ theme }) => theme.background};
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(0, 0, 0, .15);

  > div.title {
    color: ${({ theme }) => theme.text};
    font-size: 1.35rem;
    font-weight: 500;
    letter-spacing: .025rem;
  }

  > div.profile {
    > img {
      width: 4rem;
      height: 4rem;
      border-radius: 50%;
      object-fit: cover;
    }
  }
`;
