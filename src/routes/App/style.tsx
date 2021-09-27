import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  background: ${({ theme }) => theme.colors.main};
  display: flex;
  align-items: center;
`;

export const Title = styled.h2`
  color: white;
  text-align: center;
  margin-bottom: 1.5rem;
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3rem;
  padding-right: 1.5rem;
  width: 40%;
`;

export const CardsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(12rem, 1fr));
  grid-gap: 0.5rem;
  max-height: 40rem;
  overflow-y: scroll;
`;

export const RightContainer = styled.div`
  padding: 1rem;
  padding-left: 1.5rem;
  width: 60%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const MapWrapper = styled.div`
  height: 40%;
`;

export const InfoWrapper = styled.div`
  height: 60%;
`;
