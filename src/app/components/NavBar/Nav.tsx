import * as React from 'react';
import styled from 'styled-components/macro';
import { ReactComponent as GithubIcon } from './assets/github-icon.svg';
import { ReactComponent as LinkedInIcon } from './assets/linkedin-icon.svg';
import { ReactComponent as ResumeIcon } from './assets/resume-icon.svg';

export function Nav() {
  return (
    <Wrapper>
      <Item
        href="https://github.com/jose-vs"
        target="_blank"
        title="Github Page"
        rel="noopener noreferrer"
      >
        <GithubIcon style={{ marginRight: 5 }} />
        Github
      </Item>
      <Item
        href="https://www.linkedin.com/in/jose-santos-6b8a63200/"
        target="_blank"
        title="LinkedIn Page"
        rel="noopener noreferrer"
      >
        <LinkedInIcon style={{ marginRight: 5 }} />
        LinkedIn
      </Item>
      <Item
        href="resume-file.pdf"
        target="_blank"
        title="My Resume"
        rel="noopener noreferrer"
      >
        <ResumeIcon style={{ marginRight: 5 }} />
        Resume
      </Item>
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  display: flex;
  margin-right: -1rem;
`;

const Item = styled.a`
  color: ${p => p.theme.primary};
  cursor: pointer;
  text-decoration: none;
  display: flex;
  padding: 0.25rem 1rem;
  font-size: 0.875rem;
  font-weight: 500;
  align-items: center;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.4;
  }

  .icon {
    margin-right: 0.25rem;
  }
`;
