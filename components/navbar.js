import Logo from "./logo";
import NextLink from "next/link";
import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  TriangleDownIcon,
  TriangleUpIcon,
} from "@chakra-ui/icons";
import Toggle from "./theme-toggle.js";
const LinkItem = ({ href, path, children }) => {
  const active = path === href;
  const inactiveColor = useColorModeValue("black", "whiteAlpha.900");
  return (
    <NextLink href={href}>
      <Link
        p={2}
        bg={active ? "blue.300" : undefined}
        color={active ? "#202023" : inactiveColor}
      >
        {children}
      </Link>
    </NextLink>
  );
};

const Navbar = (props) => {
  const { path } = props;
  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue("#ffffff40", "#ffffff10")}
      style={{ backdropFilter: "blur(50px)" }}
      zIndex={2}
      rounded={true}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxWidth="container.lg"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <Flex align="center" mr={5}>
          <LinkItem href="/" path={path}>
            Jason Dang
          </LinkItem>
          <Heading ml={3} as="h1" size="lg" letterSpacing={"tighter"}>
            <Logo />
          </Heading>
        </Flex>
        <Stack
          direction={{ base: "column", md: "row" }}
          display={{ base: "none", md: "flex" }}
          width={{ base: "full", md: "auto" }}
          alignItems="Center"
          flexGrow={1}
          mt={{ base: 4, nmd: 0 }}
          rounded={true}
        >
          <LinkItem href="/courses" path={path}>
            courses
          </LinkItem>
          <LinkItem href="/projects" path={path}>
            projects
          </LinkItem>
          <LinkItem href="/read" path={path}>
            read
          </LinkItem>
        </Stack>
        <Box flex={1} align="right">
          <Toggle />
          <Box ml={1} display={{ base: "inline-block" }}>
            <Menu>
              <MenuButton
                as={IconButton}
                icon={<TriangleDownIcon />}
                variant="outline"
                aria-label="Options"
                borderRadius="full"
                _expanded={{
                  bg: useColorModeValue("white", "#black"),
                }}
              />
              <MenuList
                color={useColorModeValue("black", "white")}
                bg={useColorModeValue("white", "black")}
              >
                <NextLink href="/" passHref>
                  <MenuItem as={Link}>about</MenuItem>
                </NextLink>
                <NextLink href="/courses" passHref>
                  <MenuItem as={Link}>courses</MenuItem>
                </NextLink>
                <NextLink href="/projects" passHref>
                  <MenuItem as={Link}>projects</MenuItem>
                </NextLink>
                <NextLink href="/read" passHref>
                  <MenuItem as={Link}>read</MenuItem>
                </NextLink>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
export default Navbar;
