import { Container, Heading, SimpleGrid } from "@chakra-ui/react";
import Layout from "../components/layouts/article";
import Section from "../components/section";
import { GridItem } from "../components/grid_item";
import thumb61a from "../public/images/61a.jpeg";
import thumb61b from "../public/images/61b.jpeg";
import thumb61c from "../public/images/61c.jpeg";
import thumb70 from "../public/images/70.jpeg";
import thumb170 from "../public/images/170.jpeg";
import thumb188 from "../public/images/188.jpeg";
import thumbd8 from "../public/images/d8.jpeg";
const courses = () => (
  <Layout title="Courses">
    <Container>
      <Heading as="h2" fontSize={25} align="center" mb={4}>
        Courses Taken @ Berkeley
      </Heading>
      <Section delay={0.1}>
        <SimpleGrid columns={[2, 2, 4]} gap={6}>
          <GridItem
            thumbnail={thumb61a}
            title="CS 61A"
            href="https://cs61a.org/"
          ></GridItem>
          <GridItem
            thumbnail={thumb61b}
            title="CS 61B"
            href="https://inst.eecs.berkeley.edu/~cs61b/sp22/"
          ></GridItem>
          <GridItem
            thumbnail={thumb61c}
            title="CS 61C"
            href="https://cs61c.org/"
          ></GridItem>
          <GridItem
            thumbnail={thumb70}
            title="CS 70"
            href="https://www.eecs70.org/"
          ></GridItem>
          <GridItem
            thumbnail={thumb170}
            title="CS 170"
            href="https://cs170.org/"
          ></GridItem>
          <GridItem
            thumbnail={thumb188}
            title="CS 188"
            href="https://inst.eecs.berkeley.edu/~cs188/fa22/"
          ></GridItem>
          <GridItem
            thumbnail={thumbd8}
            title="Data 8"
            href="http://data8.org/fa22/"
          ></GridItem>
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
);
export default courses;
