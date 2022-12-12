import {globalStyle} from '@vanilla-extract/css'
import {css, style, styled} from 'styled-vanilla-extract/qwik'

export default ''

export const Lightning = styled.span`
	&::before {
		content: '⚡️';
	}
	filter: hue-rotate(180deg);
`

export const Table = styled.table`
	margin: 0 0 30px 0;
`

globalStyle(
	`${Table} td`,
	css`
		padding: 5px;
	`
)
globalStyle(
	`${Table} td:first-child`,
	css`
		white-space: nowrap;
		padding-right: 20px;
	`
)

export const mindBlow = style`
	margin: 0 auto;
	display: block;
	background: var(--qwik-light-purple);
	padding: 10px 20px;
	border-radius: 10px;
	border: 0;
	color: white;
	text-decoration: none;
	font-size: 20px;
	width: fit-content;
	border-bottom: 4px solid black;

  cursor: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='48' viewport='0 0 100 100' style='fill:black;font-size:24px;'><text y='50%'>🤯</text></svg>")
			16 0,
		auto; /*!emojicursor.app*/

	&:hover {
		border-bottom-width: 0px;
		margin-bottom: 4px;
		transform: translateY(4px);
	}
`
