import { Theme } from 'styled-components'

type Props = {
	theme: Theme
}

export const color = {
	dark: (props: Props): string => props.theme.color.dark,
	light: (props: Props): string => props.theme.color.light,
	primary: (props: Props): string => props.theme.color.primary,
	secondary: (props: Props): string => props.theme.color.secondary,
	terciary: (props: Props): string => props.theme.color.terciary,
}
