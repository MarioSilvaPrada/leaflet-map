import styled from 'styled-components';

export const CardsWrapper = styled.div`
  cursor: pointer;
  padding: 5px;
  margin: 5px;
  color: ${({ theme }) => theme.colors.main};
  background: ${({ theme }) => theme.colors.secondary};
  border-radius: 8px;
`;
