import { Container, Box, Heading } from "@chakra-ui/react";
const Page = () => {
  return (
    <Container>
      <Box borderRadius="lg" bg="#FAF9F6" p={3} align="center" mb={6}>
        Hello, I&apos;m currently a computer science student @ UC Berkeley.
      </Box>
      <Box display={{ md: "flex" }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Jason Dang
          </Heading>
          <p>Everyday, I regret that I'm growing older. </p>
        </Box>
      </Box>
    </Container>
  );
};
export default Page;
