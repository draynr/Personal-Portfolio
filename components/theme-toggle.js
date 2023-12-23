import { IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { ViewIcon, MoonIcon, ViewOffIcon } from "@chakra-ui/icons";

const Toggle = () => {
  const { toggleColorMode } = useColorMode();
  return (
    <IconButton
      aria-label="Toggles the theme"
      colorScheme={useColorModeValue("blue", "gray")}
      icon={useColorModeValue(<ViewOffIcon />, <ViewIcon />)}
      borderRadius="full"
      onClick={toggleColorMode}
    ></IconButton>
  );
};
export default Toggle;
