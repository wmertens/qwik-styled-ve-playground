import {globalStyle} from '@vanilla-extract/css'
import {css, styled} from 'styled-vanilla-extract/qwik'
import {darkBlue} from '~/global.css'

export default ''

export const Main = styled.main`
	max-width: 760px;
	margin: 0 auto;
	background-color: white;
	border-radius: 5px;
	box-shadow: 0px 0px 130px -50px var(--qwik-light-purple);
	overflow: hidden;
`

export const Section = styled.section`
	padding: 20px;
	border-bottom: 10px solid ${darkBlue};
`

export const Footer = styled.footer`
		padding: 15px;
		text-align: center;
		font-size: 0.8em;
	`

globalStyle(
	`${Footer} a`,
	css`
		text-decoration: none;
	`
)

globalStyle(
	'${Footer} a:hover',
	css`
		text-decoration: underline;
`
)
