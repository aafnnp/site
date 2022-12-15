import { Box, useColorMode } from "@chakra-ui/react";
import { BsFillSunFill, BsMoonFill } from "react-icons/bs";

const DarkModeSwitch = () => {
  const {colorMode, toggleColorMode} = useColorMode()
  return (
    <Box
      position="absolute"
      top={4}
      right={4}
      zIndex={9999}
      cursor="pointer"
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
