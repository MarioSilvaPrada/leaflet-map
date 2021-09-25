import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  background: ${({ theme }) => theme.colors.main};
  display: flex;
  align-items: center;
`;

export const Title = styled.h2`
  color: white;
  text-align: center;
  margin-bottom: 1.5rem;
`;

export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3rem;
  padding-right: 1.5rem;
`;

export const CardsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 0.5rem;
`;

export const LeftContainer = styled.div`
  padding: 3rem;
  padding-left: 1.5rem;
  width: 100%;
  height: 100%;
`;
