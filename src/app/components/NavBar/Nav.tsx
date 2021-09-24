import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components/macro';
import { themeActions } from 'styles/theme/slice';
import { selectThemeKey } from 'styles/theme/slice/selectors';
import { ThemeKeyType } from 'styles/theme/slice/types';
import { isSystemDark, saveTheme } from 'styles/theme/utils';
import { ReactComponent as GithubIcon } from './assets/github-icon.svg';
import { ReactComponent as LinkedInIcon } from './assets/linkedin-icon.svg';
import { ReactComponent as ResumeIcon } from './assets/resume-icon.svg';

export function Nav() {
  const theme = useSelector(selectThemeKey);
  const dispatch = useDispatch();

  const getTheme = () => {
    if (theme === 'system') {
      return isSystemDark ? 'dark' : 'light';
    }

    return theme;
  };

  const handleThemeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value as ThemeKeyType;

    var changeValue;

    if (value === 'system') {
      changeValue = isSystemDark
        ? ('light' as ThemeKeyType)
        : ('dark' as ThemeKeyType);
    } else {
      changeValue =
        value === ('dark' as ThemeKeyType)
          ? ('light' as ThemeKeyType)
          : ('dark' as ThemeKeyType);
    }

    saveTheme(changeValue);
    dispatch(themeActions.changeTheme(changeValue));
  };

  return (
    <Wrapper>
      <Item
        href="https://github.com/jose-vs"
        target="_blank"
        title="Github Page"
        rel="noopener noreferrer"
      >
        <GithubIcon style={{ marginRight: 5, padding: 2 }} />
        Github
      </Item>
      <Item
        href="https://www.linkedin.com/in/jose-santos-6b8a63200/"
        target="_blank"
        title="LinkedIn Page"
        rel="noopener noreferrer"
      >
        <LinkedInIcon style={{ marginRight: 5, padding: 2 }} />
        LinkedIn
      </Item>
      <Item
        href="resume-file.pdf"
        target="_blank"
        title="My Resume"
        rel="noopener noreferrer"
      >
        <ResumeIcon style={{ marginRight: 5, padding: 2 }} />
        Resume
      </Item>
      {/* <CheckBoxWrapper>
        <CheckBox
          id="checkbox"
          type="checkbox"
          value={theme}
          onChange={handleThemeChange}
          checked={getTheme() === 'dark'}
        />
        <CheckBoxLabel htmlFor="checkbox" />
      </CheckBoxWrapper> */}
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  display: flex;
  margin-right: -1rem;
`;

const Item = styled.a`
  color: ${p => p.theme.navPrimary};
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

const CheckBoxWrapper = styled.div`
  position: relative;
`;
const CheckBoxLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 42px;
  height: 26px;
  border-radius: 15px;
  background: #bebebe;
  cursor: pointer;
  &::after {
    content: '';
    display: block;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    margin: 3px;
    background: #fffffa;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`;
const CheckBox = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 42px;
  height: 26px;
  &:checked + ${CheckBoxLabel} {
    background: ${p => p.theme.navPrimary};
    &::after {
      content: '';
      display: block;
      border-radius: 50%;
      width: 18px;
      height: 18px;
      margin-left: 21px;
      transition: 0.2s;
    }
  }
`;
