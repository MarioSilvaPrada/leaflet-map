import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  background: ${({ theme }) => theme.colors.main};
  display: flex;
  align-items: center;
`;

export const Title = styled.div`
  color: red;
`;

export const CardsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin-right: 5rem;
`;
