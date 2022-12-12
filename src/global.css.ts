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
	'body',
	css`
		background-color: #fafafa;
		font-family: 'Poppins', ui-sans-serif, system-ui, -apple-system,
			BlinkMacSystemFont, sans-serif;
		padding: 20px 20px 40px 20px;
	`
)

globalStyle(
	'h1,h2',
	css`
		margin: 0 0 5px 0;
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
	'a:hover',
	css`
		text-decoration: none;
	`
)

globalStyle(
	'code',
	css`
		font-family: Menlo, Monaco, Courier New, monospace;
		font-size: 0.9em;
		background-color: rgb(224, 224, 224);
		padding: 2px 4px;
		border-radius: 3px;
		border-bottom: 2px solid #bfbfbf;
	`
)
