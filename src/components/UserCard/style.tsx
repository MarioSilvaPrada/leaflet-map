import styled, { css } from 'styled-components';

interface CardProps {
  isSelected?: boolean;
}

const selectedStyle = css`
  transform: scale(1.05);
  box-shadow: rgba(0, 0, 0, 0.5) 0px 5px 15px;
`;

export const CardsWrapper = styled.div<CardProps>`
  cursor: pointer;
  padding: 5px;
  margin: 5px;
  color: ${({ theme }) => theme.colors.main};
  background: ${({ theme }) => theme.colors.secondary};
  border-radius: 8px;
  padding: 2rem;
  text-align: center;
  transition: 0.5s;
  ${({ isSelected }) => isSelected && selectedStyle};
`;
