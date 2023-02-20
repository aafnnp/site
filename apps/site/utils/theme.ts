import {extendTheme, type ThemeConfig} from '@chakra-ui/react'
import {withProse} from '@nikolovlazar/chakra-ui-prose'

const theme = extendTheme(
  {
    config: {
      initialColorMode: 'light',
      useSystemColorMode: true
    } as ThemeConfig,
    fonts: {
      heading: `'Dosis', sans-serif`
    }
  },
  withProse()
)

export default theme
