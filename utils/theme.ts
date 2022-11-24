import {extendTheme, type ThemeConfig} from '@chakra-ui/react'

const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: true
  } as ThemeConfig,
  fonts: {
    heading: `'Dosis', sans-serif`
  }
})

export default theme
