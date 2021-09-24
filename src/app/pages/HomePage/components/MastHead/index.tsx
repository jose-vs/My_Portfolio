import { PageWrapper } from 'app/components';
import * as React from 'react';
import styled from 'styled-components/macro';
import { StyleConstants } from 'styles/StyleConstants';

export function MastHead() {
  return (
    <Wrapper>
      <Background src="background.jpg" />
      <ContentRow>
        <ContentInfoColumn>
          <TextWrapper>
            <Heading>Hi, I am Jose. A Software Developer!</Heading>
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
            <Image src={'cutout.png'} />
          </ImageWrapper>
        </ContentInfoColumn>
      </ContentRow>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  height: 100%;
  overflow: hidden;
  @supports (backdrop-filter: blur(10px)) {
    backdrop-filter: blur(10px);
    background-color: ${p =>
      p.theme.background.replace(
        /rgba?(\(\s*\d+\s*,\s*\d+\s*,\s*\d+)(?:\s*,.+?)?\)/,
        'rgba$1,0.75)',
      )};
  }

  ${PageWrapper} {
    display: flex;
    align-items: center;
    justify-content: space-between;
  } ;
`;

const Background = styled.img`
  z-index: -1;
  position: absolute;
  flex-shrink: 0;
  min-width: 100%;
  min-height: 100%;
  object-fit: fill;
`;

const ContentRow = styled.div`
  padding-top: ${StyleConstants.NAV_BAR_HEIGHT};
  margin: 50px auto;
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

const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 58px;
  line-height: 1.1;
  font-weight: 600;
  color: ${p => p.theme.primary};

  @media screen and (max-width: 420px) {
    font-size: 42px;
  }
`;

const Subtitle = styled.p`
  max-width: 560px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${p => p.theme.mastSubtitle};

  @media screen and (max-width: 420px) {
    font-size: 18px;
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
