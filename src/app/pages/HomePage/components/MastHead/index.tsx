import * as React from 'react';
import styled from 'styled-components/macro';

export function MastHead() {
  return (
    <>
      <Wrapper>
        <ContentRow>
          <ContentInfoColumn>
            <TextWrapper>
              <Heading>Hi, My name is Jose. A Software Developer!</Heading>
              <Subtitle>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </Subtitle>
            </TextWrapper>
          </ContentInfoColumn>
          <ContentInfoColumn>
            <ImageWrapper>
              <Image src={'me.png'} />
            </ImageWrapper>
          </ContentInfoColumn>
        </ContentRow>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  align-items: center;
  padding: 4% 0px;
`;

const ContentRow = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: row-reverse;
`;

const ContentInfoColumn = styled.div`
  margin-bottom: 15px;
  padding-right: 15px;
  padding-left: 15px;
  flex: 1;
  max-width: 50%;
  flex-basis: 50%;

  @media screen and (max-width: 768px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
  }
`;

const TextWrapper = styled.div`
  max-width: 700px;
  padding-top: 0;
  padding-bottom: 60px;
  padding-left: 20px;
  padding-right: 20px;

  @media screen and (max-width: 768px) {
    padding-bottom: 25px;
  }
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 58px;
  line-height: 1.1;
  font-weight: 600;
  color: ${p => p.theme.text};

  @media screen and (max-width: 420px) {
    font-size: 32px;
  }
`;

export const Subtitle = styled.p`
  max-width: 560px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${p => p.theme.textSecondary};

  @media screen and (max-width: 420px) {
    font-size: 12px;
    margin-bottom: 0px;
  }
`;

const ImageWrapper = styled.div`
  max-width: 1000px;
  display: flex;
  justify-content: center;
`;

const Image = styled.img`
  padding-right: 7%;
  border: 0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  max-height: 700px;
`;
