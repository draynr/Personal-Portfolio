import { Box, Image, Container, Heading, SimpleGrid } from "@chakra-ui/react";
import Layout from "../components/layouts/article";
import Section from "../components/section";
import { GridItem } from "../components/grid_item";
import thumb61a from "../public/images/61a.png";
import thumb61b from "../public/images/github.png";
import thumb61c from "../public/images/61c.png";
import thumb70 from "../public/images/70.png";
import thumb170 from "../public/images/170.jpeg";
import thumb188 from "../public/images/188.jpeg";
import thumbd8 from "../public/images/d8.png";
import thumb161 from "../public/images/161.jpeg";
import thumb135 from "../public/images/135.png";
import thumb1 from "../public/images/1.png";
import thumb16b from "../public/images/16b.jpeg";
import thumb33a from "../public/images/33a.jpeg";
import thumb189 from "../public/images/189.png";
import thumb100 from "../public/images/data100.png";
import thumb126 from "../public/images/126.png";
import thumb110 from "../public/images/shewchuk.png";

import ParticlesComponent from "../components/animated-background";

import thumb104 from "../public/images/ethics.png";
import thumb182 from "../public/images/neural-network.png";
import thumb162 from "../public/images/162.png";
import thumb144 from "../public/images/144.png";
const courses = () => (
  <Layout title="Courses">
    <Box align="center">
      <Image src="images/rabbit.gif" alt="gif"></Image>
    </Box>
    <Heading as="h2" fontSize={45} align="center" mb={5} mt={4}>
      Course Work
    </Heading>
    <Section delay={0.2}>
      <Heading as="h3" fontSize={30} mb={4}>
        fall 2023
      </Heading>
    </Section>
    <Section delay={0.4}>
      <SimpleGrid columns={[2, 2, 5]} gap={6}>
        <GridItem
          thumbnail={thumb126}
          title="EECS 126 - Probability and Random Processes"
          href="https://inst.eecs.berkeley.edu/~ee126/sp23/"
        ></GridItem>
        <GridItem
          thumbnail={thumb162}
          title="CS 162 - Operating Systems and Systems Programming"
          href="https://cs162.org/"
        ></GridItem>
        <GridItem
          thumbnail={thumb144}
          title="DATA 144 - Data Mining and Analytics"
          href="https://classes.berkeley.edu/content/2023-fall-data-144-001-lec-001"
        ></GridItem>
        <GridItem
          thumbnail={thumb110}
          title="MATH 110 - Linear Algebra"
          href="https://math.berkeley.edu/courses/fall-2023-math-110-001-lec"
        ></GridItem>
      </SimpleGrid>
    </Section>
    <Section delay={0.6}>
      <Heading as="h3" fontSize={30} mb={4}>
        spring 2023
      </Heading>
    </Section>
    <Section delay={0.8}>
      <SimpleGrid columns={[2, 2, 5]} gap={6}>
        <GridItem
          thumbnail={thumb189}
          title="CS 189 - Machine Learning"
          href="https://people.eecs.berkeley.edu/~jrs/189/"
        ></GridItem>
        <GridItem
          thumbnail={thumb100}
          title="DATA 100 - Principles and Techniques of Data Science"
          href="https://ds100.org/"
        ></GridItem>
        <GridItem
          thumbnail={thumb104}
          title="DATA 104 - Ethics of Data"
          href="https://data.berkeley.edu/data-104-human-contexts-and-ethics-data"
        ></GridItem>
      </SimpleGrid>
    </Section>
    <Section delay={0.8}>
      <Heading as="h3" fontSize={30} mb={4}>
        fall 2022
      </Heading>
    </Section>
    <Section delay={1}>
      <SimpleGrid columns={[2, 2, 5]} gap={6}>
        <GridItem
          thumbnail={thumb61c}
          title="CS 61C - Great Ideas in Machine Architecture"
          href="https://cs61c.org/"
        ></GridItem>
        <GridItem
          thumbnail={thumb188}
          title="CS 188 - Artifical Intelligence"
          href="https://inst.eecs.berkeley.edu/~cs188/fa22/"
        ></GridItem>
        <GridItem
          thumbnail={thumb161}
          title="CS 161 - Computer Security"
          href="https://fa22.cs161.org/"
        ></GridItem>
        <GridItem
          thumbnail={thumb135}
          title="UGBA 135 - Personal Finance"
        ></GridItem>
      </SimpleGrid>
    </Section>
    <Section delay={1.2}>
      <Heading as="h3" fontSize={30} mt={4} mb={4}>
        summer 2022
      </Heading>
    </Section>
    <Section delay={1.4}>
      <SimpleGrid columns={[2, 2, 5]} gap={6}>
        <GridItem
          thumbnail={thumbd8}
          title="DATA 8 - Foundations of Data Science"
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
      <SimpleGrid columns={[2, 2, 5]} gap={6}>
        <GridItem
          thumbnail={thumb61b}
          title="CS 61B - Data Structures"
          href="https://inst.eecs.berkeley.edu/~cs61b/sp22/"
        ></GridItem>
        <GridItem
          thumbnail={thumb170}
          title="CS 170 - Efficient Algorithms and Intractable Problems"
          href="https://cs170.org/"
        ></GridItem>
        <GridItem
          thumbnail={thumb16b}
          title="EECS 16B - Designing Information Devices and System II"
          href="https://eecs16b.org/"
        ></GridItem>
        <GridItem
          thumbnail={thumb1}
          title="FRENCH 1 - Elementary French"
        ></GridItem>
      </SimpleGrid>
    </Section>
    <Section delay={2.2}>
      <Heading as="h3" fontSize={30} mt={4} mb={4}>
        fall 2021
      </Heading>
    </Section>
    <Section delay={2.5}>
      <SimpleGrid columns={[2, 2, 5]} gap={6}>
        <GridItem
          thumbnail={thumb61a}
          title="CS 61A - Structure and Interpretation of Computer Programs"
          href="https://cs61a.org/"
        ></GridItem>
        <GridItem
          thumbnail={thumb70}
          title="CS 70 - Discrete Mathematics and Probability Theory"
          href="https://www.eecs70.org/"
        ></GridItem>
        <GridItem thumbnail={thumb33a} title="STAT 33A - Intro to R"></GridItem>
      </SimpleGrid>
    </Section>
    <Section delay={1.2}>
      <ParticlesComponent />
    </Section>
  </Layout>
);
export default courses;
