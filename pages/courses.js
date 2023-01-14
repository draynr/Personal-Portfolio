import { Container, Heading, SimpleGrid } from "@chakra-ui/react";
import Layout from "../components/layouts/article";
import Section from "../components/section";
import { GridItem } from "../components/grid_item";
import thumb61a from "../public/images/61a.png";
import thumb61b from "../public/images/61b.jpeg";
import thumb61c from "../public/images/61c.jpeg";
import thumb70 from "../public/images/70.jpeg";
import thumb170 from "../public/images/170.jpeg";
import thumb188 from "../public/images/188.jpeg";
import thumbd8 from "../public/images/d8.jpeg";
import thumb161 from "../public/images/161.jpeg";
import thumb135 from "../public/images/135.png";
import thumb1 from "../public/images/1.png";
import thumb16b from "../public/images/16b.jpeg";
import thumb33a from "../public/images/33a.jpeg";
import thumb189 from "../public/images/machine-learning.png";
import thumb100 from "../public/images/data100.png";
import ParticlesComponent from "../components/animated-background";

import thumb104 from "../public/images/ethics.png";
import thumb182 from "../public/images/neural-network.png";
const courses = () => (
  <Layout title="Courses">
    <Container>
      <Heading as="h2" fontSize={45} align="center" mb={5}>
        course work
      </Heading>
      <Section delay={0.2}>
        <Heading as="h3" fontSize={30} mb={4}>
          spring 2023
        </Heading>
      </Section>
      <Section delay={0.4}>
        <SimpleGrid columns={[2, 2, 3]} gap={6}>
          <GridItem
            thumbnail={thumb189}
            title="CS 189 - machine learning"
            href="https://www.eecs189.org/"
          ></GridItem>
          <GridItem
            thumbnail={thumb182}
            title="CS 182 - neural networks"
            href="https://inst.eecs.berkeley.edu/~cs182/fa22/"
          ></GridItem>
          <GridItem
            thumbnail={thumb100}
            title="DATA 100 - principles and techniques of data science"
            href="https://ds100.org/"
          ></GridItem>
          <GridItem
            thumbnail={thumb104}
            title="DATA 104 - ethics of data"
            href="https://data.berkeley.edu/data-104-human-contexts-and-ethics-data"
          ></GridItem>
        </SimpleGrid>
      </Section>
      <Section delay={0.6}>
        <Heading as="h3" fontSize={30} mb={4}>
          fall 2022
        </Heading>
      </Section>
      <Section delay={0.8}>
        <SimpleGrid columns={[2, 2, 3]} gap={6}>
          <GridItem
            thumbnail={thumb61c}
            title="CS 61C - great ideas in machine architecture"
            href="https://cs61c.org/"
          ></GridItem>
          <GridItem
            thumbnail={thumb188}
            title="CS 188 - artifical intelligence"
            href="https://inst.eecs.berkeley.edu/~cs188/fa22/"
          ></GridItem>
          <GridItem
            thumbnail={thumb161}
            title="CS 161 - computer security"
            href="https://fa22.cs161.org/"
          ></GridItem>
          <GridItem
            thumbnail={thumb135}
            title="UGBA 135 - personal finance"
          ></GridItem>
        </SimpleGrid>
      </Section>
      <Section delay={1.2}>
        <Heading as="h3" fontSize={30} mt={4} mb={4}>
          summer 2022
        </Heading>
      </Section>
      <Section delay={1.4}>
        <SimpleGrid columns={[2, 2, 3]} gap={6}>
          <GridItem
            thumbnail={thumbd8}
            title="DATA 8 - foundations of data science"
            href="http://data8.org/fa22/"
          ></GridItem>
        </SimpleGrid>
      </Section>
      <Section delay={1.6}>
        <Heading as="h3" fontSize={30} mt={4} mb={4}>
          spring 2022
        </Heading>
      </Section>
      <Section delay={1.8}>
        <SimpleGrid columns={[2, 2, 3]} gap={6}>
          <GridItem
            thumbnail={thumb61b}
            title="CS 61B - data structures"
            href="https://inst.eecs.berkeley.edu/~cs61b/sp22/"
          ></GridItem>
          <GridItem
            thumbnail={thumb170}
            title="CS 170 - efficient algorithms and intractable problems"
            href="https://cs170.org/"
          ></GridItem>
          <GridItem
            thumbnail={thumb16b}
            title="EE 16B - designing information devices and system II"
            href="https://eecs16b.org/"
          ></GridItem>
          <GridItem
            thumbnail={thumb1}
            title="FRENCH 1 - elementary french"
          ></GridItem>
        </SimpleGrid>
      </Section>
      <Section delay={2.2}>
        <Heading as="h3" fontSize={30} mt={4} mb={4}>
          fall 2021
        </Heading>
      </Section>
      <Section delay={2.5}>
        <SimpleGrid columns={[2, 2, 3]} gap={6}>
          <GridItem
            thumbnail={thumb61a}
            title="CS 61A - structure and interpretation of computer programs"
            href="https://cs61a.org/"
          ></GridItem>
          <GridItem
            thumbnail={thumb70}
            title="CS 70 - discrete mathematics and probability theory"
            href="https://www.eecs70.org/"
          ></GridItem>
          <GridItem
            thumbnail={thumb33a}
            title="STAT 33A - intro to r"
          ></GridItem>
        </SimpleGrid>
      </Section>
      <Section delay={1.2}>
        <ParticlesComponent />
      </Section>
    </Container>
  </Layout>
);
export default courses;
