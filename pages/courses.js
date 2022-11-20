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
import thumb161 from "../public/images/161.jpeg";
import thumb134 from "../public/images/psych134.jpeg";
import thumb135 from "../public/images/135.jpeg";
import thumb1 from "../public/images/1.jpeg";
import thumb16b from "../public/images/16b.jpeg";
import thumb33a from "../public/images/33a.jpeg";
const courses = () => (
  <Layout title="Courses">
    <Container>
      <Heading as="h2" fontSize={45} align="center" mb={5}>
        course work
      </Heading>
      <Section delay={0.2}>
        <Heading as="h3" fontSize={30} mb={4}>
          fall 2022
        </Heading>
        <Section delay={0.4}>
          <SimpleGrid columns={[2, 2, 3]} gap={6}>
            <GridItem
              thumbnail={thumb61c}
              title="CS 61C"
              href="https://cs61c.org/"
            ></GridItem>
            <GridItem
              thumbnail={thumb188}
              title="CS 188"
              href="https://inst.eecs.berkeley.edu/~cs188/fa22/"
            ></GridItem>
            <GridItem
              thumbnail={thumb161}
              title="CS 161"
              href="https://fa22.cs161.org/"
            ></GridItem>
            <GridItem thumbnail={thumb135} title="UGBA 135"></GridItem>
          </SimpleGrid>
        </Section>
        <Section delay={0.7}>
          <Heading as="h3" fontSize={30} mt={4} mb={4}>
            summer 2022
          </Heading>

          <SimpleGrid columns={[2, 2, 3]} gap={6}>
            <GridItem
              thumbnail={thumbd8}
              title="DATA 8"
              href="http://data8.org/fa22/"
            ></GridItem>
          </SimpleGrid>
        </Section>
        <Section delay={0.9}>
          <Heading as="h3" fontSize={30} mt={4} mb={4}>
            spring 2022
          </Heading>
          <SimpleGrid columns={[2, 2, 3]} gap={6}>
            <GridItem
              thumbnail={thumb61b}
              title="CS 61B"
              href="https://inst.eecs.berkeley.edu/~cs61b/sp22/"
            ></GridItem>
            <GridItem
              thumbnail={thumb170}
              title="CS 170"
              href="https://cs170.org/"
            ></GridItem>
            <GridItem
              thumbnail={thumb16b}
              title="EE 16B"
              href="https://eecs16b.org/"
            ></GridItem>
            <GridItem thumbnail={thumb1} title="FRENCH 1"></GridItem>
          </SimpleGrid>
        </Section>
        <Section delay={1.2}>
          <Heading as="h3" fontSize={30} mt={4} mb={4}>
            fall 2021
          </Heading>
          <SimpleGrid columns={[2, 2, 3]} gap={6}>
            <GridItem
              thumbnail={thumb61a}
              title="CS 61A"
              href="https://cs61a.org/"
            ></GridItem>
            <GridItem
              thumbnail={thumb70}
              title="CS 70"
              href="https://www.eecs70.org/"
            ></GridItem>
            <GridItem thumbnail={thumb33a} title="STAT 33A"></GridItem>
          </SimpleGrid>
        </Section>
      </Section>
    </Container>
  </Layout>
);
export default courses;
