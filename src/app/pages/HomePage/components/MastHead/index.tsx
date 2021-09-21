/**
 *
 * MastHead
 *
 */
import * as React from 'react';
import styled from 'styled-components/macro';
import { PageWrapper } from 'app/components';

interface Props {}

export function MastHead(props: Props) {
  return (
    <Wrapper>
      <Image src="me_b&w.png" />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: 0 auto;
  padding: 0 1.5rem;
  box-sizing: content-box;
`;

const Title = styled.h1``;

const Subtitle = styled.h2``;
const ImageWrapper = styled.div``;
const Image = styled.img``;
