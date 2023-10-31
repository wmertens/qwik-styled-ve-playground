import {createVar, globalStyle} from '@vanilla-extract/css'
import {css} from 'styled-vanilla-extract/qwik'

/**
 * WHAT IS THIS FILE?
 *
 * Globally applied styles. No matter which components are in the page or matching route,
 * the styles in here will be applied to the Document, without any sort of CSS scoping.
 *
 */

// Color variables, scoped
export const darkBlue = createVar('dark-blue')
export const lightBlue = createVar('light-blue')

globalStyle(
	':root',
	css`
		// You can set scoped variables
		${darkBlue}: #006ce9;
		${lightBlue}: #18b6f6;
		// You can also use regular CSS variables
		--qwik-light-purple: #ac7ff4;
		--qwik-dark-purple: #713fc2;
	`
)

globalStyle(
	'html',
	css`
		line-height: 1;
		-webkit-text-size-adjust: 100%;
		-moz-tab-size: 4;
		-o-tab-size: 4;
		tab-size: 4;
		font-family:
			ui-sans-serif,
			system-ui,
			-apple-system,
			BlinkMacSystemFont,
			'Segoe UI',
			Roboto,
			'Helvetica Neue',
			Arial,
			'Noto Sans',
			sans-serif,
			'Apple Color Emoji',
			'Segoe UI Emoji',
			'Segoe UI Symbol',
			'Noto Color Emoji';
	`
)

globalStyle(
	'h1,h2,h3',
	css`
		margin: 0;
	`
)

globalStyle(
	'h1',
	css`
		font-size: 3.2rem;
		text-align: center;
		@media screen and (min-width: 768px) {
			font-size: 5rem;
		}
	`
)

globalStyle(
	'h3',
	css`
		font-size: 2rem;
		@media screen and (min-width: 768px) {
			font-size: 3rem;
		}
	`
)

globalStyle(
	'h1 .highlight, h3 .highlight',
	css`
		color: ${lightBlue};
	`
)

globalStyle(
	'h2',
	css`
		font-weight: 400;
		font-size: 2.4rem;
		@media screen and (min-width: 768px) {
			font-size: 3.4rem;
		}
	`
)
globalStyle(
	'h2 .highlight',
	css`
		font-weight: 700;
	`
)

globalStyle(
	'ul',
	css`
		list-style-type: square;
		margin: 5px 0 30px 0;
		padding-left: 25px;
	`
)

globalStyle(
	'li',
	css`
		padding: 5px 0;
	`
)

globalStyle(
	'li::marker',
	css`
		color: ${lightBlue};
	`
)

globalStyle(
	'a,a:visited',
	css`
		color: ${darkBlue};
	`
)

globalStyle(
	'a',
	css`
		text-decoration: none;
		color: var(--qwik-light-blue);
	`
)

globalStyle(
	'code',
	css`
		font-family:
			Menlo,
			Monaco,
			Courier New,
			monospace;
		font-size: 0.9em;
		background: rgba(230, 230, 230, 0.3);
		border-radius: 4px;
		padding: 2px 6px;
	`
)
