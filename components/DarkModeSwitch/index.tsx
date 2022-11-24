import {useColorMode, Box} from '@chakra-ui/react'
import {BsMoonFill, BsFillSunFill} from 'react-icons/bs'

const DarkModeSwitch = () => {
  const {colorMode, toggleColorMode} = useColorMode()
  return (
    <Box
      as="div"
      position="absolute"
      top={4}
      right={4}
      zIndex={9999}
      onClick={toggleColorMode}
    >
      {colorMode === 'light' ? (
        <BsMoonFill size={18} />
      ) : (
        <BsFillSunFill size={18} />
      )}
    </Box>
  )
}

export default DarkModeSwitch
