import {style} from '@vanilla-extract/css'
import {styled, css} from 'qwik-styled-ve'

export const pride = style({})
export const odd = style({})

export const Host = styled.div(css`
	display: grid;

	align-items: center;
	justify-content: center;
	justify-items: center;
	/* --rotation: 135deg; */
	--rotation: 225deg;
	--size-step: 10px;
	--odd-color-step: 5;
	--even-color-step: 5;
	--center: 12;

	width: 100%;
	height: 500px;

	contain: strict;
`)

export const Range = styled.input(css`
	width: 100%;
`)

export const Square = styled.div(css`
	--size: calc(40px + var(--index) * var(--size-step));

	display: block;
	width: var(--size);
	height: var(--size);
	transform: rotateZ(
		calc(var(--rotation) * var(--state) * (var(--center) - var(--index)))
	);
	transition-property: transform, border-color;
	transition-duration: 5s;
	transition-timing-function: ease-in-out;
	grid-area: 1 / 1;
	background: white;
	border-width: 2px;
	border-style: solid;
	border-color: black;
	box-sizing: border-box;
	will-change: transform, border-color;

	contain: strict;

	&${odd} {
		--luminance: calc(
			1 - calc(calc(var(--index) * var(--odd-color-step)) / 256)
		);
		background: rgb(
			calc(172 * var(--luminance)),
			calc(127 * var(--luminance)),
			calc(244 * var(--luminance))
		);
	}

	${pride} &:nth-child(12n + 1) {
		background: #e70000;
	}
	${pride} &:nth-child(12n + 3) {
		background: #ff8c00;
	}
	${pride} &:nth-child(12n + 5) {
		background: #ffef00;
	}
	${pride} &:nth-child(12n + 7) {
		background: #00811f;
	}
	${pride} &:nth-child(12n + 9) {
		background: #0044ff;
	}
	${pride} &:nth-child(12n + 11) {
		background: #760089;
	}
`)
