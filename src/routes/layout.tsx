import {component$, Slot, useStyles$} from '@builder.io/qwik'
import Header from '../components/header/header'
import style, {Footer, Main, Section} from './layout.css'

export default component$(() => {
	useStyles$(style)
	return (
		<>
			<Main>
				<Header />
				<Section>
					<Slot />
				</Section>
			</Main>
			<Footer>
				<a href="https://www.builder.io/" target="_blank">
					Made with ♡ by Builder.io
				</a>
			</Footer>
		</>
	)
})
