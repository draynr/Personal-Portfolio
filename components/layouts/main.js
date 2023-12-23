import Head from "next/head";
import Navbar from "../navbar";

import { Box, Container } from "@chakra-ui/react";
const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={10}>
      <Head>
        <meta
          name="viewport"
          content="width = device-width, 
                    initial-scale =1"
        />
        <meta
          name="keywords"
          content="uc berkeley, cal,jason dang, dangjason, jasondang, senior, personal site, personal, website, web, jason, dang, computer science"
        />
        <title> Jason Dang </title>
        <meta name="description" content="Jason Dang's Personal Website" />
      </Head>
      <Navbar path={router.asPath} />
      <Container maxW="container.lg" pt={55}>
        {children}
      </Container>
    </Box>
  );
};
export default Main;
