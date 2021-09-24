import * as React from 'react';
import styled from 'styled-components/macro';

export function Logo() {
  return (
    <Wrapper>
      <Title>Jose Santos</Title>
      <Description>
        <Item>about</Item>
        <Item>work</Item>
        <Item>contact</Item>
      </Description>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Title = styled.div`
  font-size: 1.25rem;
  color: ${p => p.theme.navPrimary};
  font-weight: bold;
  margin-right: 1rem;
`;

const Description = styled.div`
  flex-direction: row;
`;

const Item = styled.a`
  color: ${p => p.theme.navSecondary};
  cursor: pointer;
  text-decoration: none;
  padding: 0.25rem 2rem;
  font-size: 0.875rem;
  font-weight: 500;
  align-items: center;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.4;
  }
`;
