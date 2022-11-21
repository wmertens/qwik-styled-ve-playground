import {createVar, globalStyle} from '@vanilla-extract/css'
import {css} from 'styled-vanilla-extract/qwik'

/**
 * WHAT IS THIS FILE?
 *
 * Globally applied styles. No matter which components are in the page or matching route,
 * the styles in here will be applied to the Document, without any sort of CSS scoping.
 *
 */

export const darkBlue = createVar('dark-blue')

globalStyle(
	':root',
	css`
		${darkBlue}: #006ce9;
		--qwik-light-blue: #18b6f6;
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
	'main',
	css`
		max-width: 760px;
		margin: 0 auto;
		background-color: white;
		border-radius: 5px;
		box-shadow: 0px 0px 130px -50px var(--qwik-light-purple);
		overflow: hidden;
	`
)

globalStyle(
	'h1,h2',
	css`
		margin: 0 0 5px 0;
	`
)

globalStyle(
	'.lightning',
	css`
		filter: hue-rotate(180deg);
	`
)

globalStyle(
	'section',
	css`
		padding: 20px;
		border-bottom: 10px solid ${darkBlue};
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
		color: var(--qwik-light-blue);
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
	'table.commands',
	css`
		margin: 0 0 30px 0;
	`
)

globalStyle(
	'.commands td',
	css`
		padding: 5px;
	`
)

globalStyle(
	'.commands td:first-child',
	css`
		white-space: nowrap;
		padding-right: 20px;
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

globalStyle(
	'footer',
	css`
		padding: 15px;
		text-align: center;
		font-size: 0.8em;
	`
)

globalStyle(
	'footer a',
	css`
		text-decoration: none;
	`
)

globalStyle(
	'footer a:hover',
	css`
		text-decoration: underline;
	`
)

globalStyle(
	'a.mindblow',
	css`
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
		cursor: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'  width='40' height='48' viewport='0 0 100 100' style='fill:black;font-size:24px;'><text y='50%'>🤯</text></svg>")
				16 0,
			auto; /*!emojicursor.app*/
	`
)

globalStyle(
	'a.mindblow:hover',
	css`
		border-bottom-width: 0px;
		margin-bottom: 4px;
		transform: translateY(4px);
	`
)
