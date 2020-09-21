import React from 'react'
import { GlobalStyle, color, theme } from '@styled'
import styled, { ThemeProvider } from 'styled-components'

interface Props {
  name?: string;
}

const Wrapper = styled.div`
  color: ${color.primary};
`

export default ({ name = 'World' }: Props): JSX.Element => {
	return <>
		<GlobalStyle />
		<ThemeProvider theme={theme}>
			<Wrapper>Hello, {name}!</Wrapper>
		</ThemeProvider>
	</>
}
