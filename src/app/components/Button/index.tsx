import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  padding: 1rem 1.5rem;
  font-size: 1.8rem;
  color: 'green';
  outline: none;
  border: none;
  background-color: #333;
`;

export const Button = ({ children }) => {
  return <StyledButton>{children}</StyledButton>;
};
