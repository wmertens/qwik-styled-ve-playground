import {style, styled} from 'styled-vanilla-extract/qwik'

export default 'FORBID'

export const Header = styled.header`
	background: var(--qwik-purple, tan);
	display: flex;
	border-bottom: 10px solid var(--qwik-dark-purple);
`

// the re-exported style has CSS template support
export const logoLink = style`
	display: inline-block;
	padding: 10px 10px 7px 20px;
`

// object syntax works too
export const NavList = styled.ul({
	margin: 0,
	padding: '3px 10px 0 0',
	listStyle: 'none',
	flex: 1,
	textAlign: 'right',
})

export const NavItem = styled.li({
	display: 'inline-block',
	margin: 0,
	padding: 0,
})

export const NavLink = styled.a`
	display: inline-block;
	padding: 15px 10px;
	text-decoration: none;
	&:hover {
		text-decoration: underline;
	}
`
