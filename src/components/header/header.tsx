import style, {Header, logoLink, NavList, NavItem, NavLink} from './header.css'
import {component$, useStyles$} from '@builder.io/qwik'
import {QwikLogo} from '../icons/qwik'

const menu = [
	{
		url: 'https://qwik.builder.io/docs/components/overview/',
		title: 'Docs',
	},
	{
		url: 'https://qwik.builder.io/examples/introduction/hello-world/',
		title: 'Examples',
	},
	{
		url: 'https://qwik.builder.io/tutorial/welcome/overview/',
		title: 'Tutorials',
	},
]

export const Menu = () => (
	<NavList>
		{menu.map(({url, title}, i) => (
			<NavItem key={i}>
				<NavLink href={url} target="_blank">
					{title}
				</NavLink>
			</NavItem>
		))}
	</NavList>
)

export default component$(() => {
	useStyles$(style)
	return (
		<Header>
			<a class={logoLink} href="https://qwik.builder.io/" target="_blank">
				<QwikLogo />
			</a>
			<Menu />
		</Header>
	)
})
