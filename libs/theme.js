import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
const styles = {
  global: (props) => ({
    body: {
      bg: mode("#FAF9F6", "#060606")(props),
    },
  }),
};

const components = {
  Heading: {
    variants: {
      "section-title": {
        textDecoration: "underline",
        fontSize: 30,
        textUnderlineOffset: 6,
        textDecorationColor: "#525252",
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4,
      },
    },
  },
  Link: {
    baseStyle: (props) => ({
      color: mode("#FAFAFA", "black")(props),
      textUnderlineOffset: 3,
    }),
  },
};
const fonts = {
  heading: "Inter",
  body: "Lexend Deca",
};
const colors = {
  grassTeal: "black",
};
const config = {
  initialColorMode: "light",
  useSystemColorMode: true,
};
const theme = extendTheme({
  config,
  styles,
  components,
  colors,
  fonts,
});
export default theme;
