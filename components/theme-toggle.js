import { IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

const Toggle = () => {
  const { toggleColorMode } = useColorMode();
  return (
    <IconButton
      aria-label="Toggles the theme"
      colorScheme={useColorModeValue("blue", "orange")}
      icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
      onClick={toggleColorMode}
    ></IconButton>
  );
};
export default Toggle;
