import { Theme } from 'styled-components'

declare module 'styled-components' {
  export interface Theme {
    color: {
      dark: string
      light: string
      primary: string
      secondary: string
      terciary: string
    }
  }
}

export const theme: Theme = {
	color: {
		dark: '#005754',
		light: '#EDEDED',
		primary: '#39ABA7',
		secondary: '#96D0CE',
		terciary: '#078884',
	}
}
