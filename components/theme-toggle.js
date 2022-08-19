import { IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

const Toggle = () => {
  const toggleColors = useColorMode();
  return (
    <IconButton
      aria-label="Toggle theme"
      colorscheme={useColorModeValue("purple", "orange")}
      icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
      onClick={toggleColors}
    ></IconButton>
  );
};
export default Toggle;
