import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
const styles = {
  global: (props) => ({
    body: {
      bg: mode("#C6D4E2", "#122832")(props),
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
      color: mode("#FAFAFA", "#040622")(props),
      textUnderlineOffset: 3,
    }),
  },
};
const fonts = {
  heading: "Space Mono",
  body: "Lexend Deca",
};
const colors = {
  grassTeal: "#D2B48C",
};
const config = {
  initialColorMode: "dark",
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
