import styled from 'styled-components';

export const Container = styled.div`
  background: white;
  padding: 3rem;
  border-radius: 8px;
  margin-bottom: 1.5rem;
  height: 60%;

  @media (max-width: 750px) {
    padding: 1rem;
    overflow-y: scroll;
  }
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  margin-bottom: 1.4rem;
`;

export const InfoText = styled.p`
  margin-left: 1.2rem;
`;

export const CenterContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  margin-top: 2rem;
`;
