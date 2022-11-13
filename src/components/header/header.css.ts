import { style } from '@vanilla-extract/css';
import { styled, css } from 'qwik-styled-ve';

export const Header = styled.header(css`
  background: var(--qwik-purple, yellow);
  display: flex;
  border-bottom: 10px solid var(--qwik-dark-purple);
`);

export const logoLink = style({
  display: 'inline-block',
  padding: '10px 10px 7px 20px',
});

export const NavList = styled.ul({
  margin: 0,
  padding: '3px 10px 0 0',
  listStyle: 'none',
  flex: 1,
  textAlign: 'right',
});

export const NavItem = styled.li({
  display: 'inline-block',
  margin: 0,
  padding: 0,
});

export const NavLink = styled.a(css`
  display: inline-block;
  padding: 15px 10px;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`);
