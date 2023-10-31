import {component$, Slot, useStyles$} from '@builder.io/qwik'
import Header from '../components/header/header'
import style, {Footer, Main, Section} from './layout.css'
import {routeLoader$} from '@builder.io/qwik-city'
import type {RequestHandler} from '@builder.io/qwik-city'

export const onGet: RequestHandler = async ({cacheControl}) => {
	// Control caching for this request for best performance and to reduce hosting costs:
	// https://qwik.builder.io/docs/caching/
	cacheControl({
		// Always serve a cached response by default, up to a week stale
		staleWhileRevalidate: 60 * 60 * 24 * 7,
		// Max once every 5 seconds, revalidate on the server to get a fresh version of this page
		maxAge: 5,
	})
}

export const useServerTimeLoader = routeLoader$(() => {
	return {
		date: new Date().toISOString(),
	}
})

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
