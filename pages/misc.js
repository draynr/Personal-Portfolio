import {
  Box,
  Image,
  Container,
  SimpleGrid,
  Divider,
  Heading,
} from "@chakra-ui/react";
import Section from "../components/section.js";

import {
  GridItem,
  ProjectsGridItem,
  GridItemStyle,
} from "../components/grid_item";
import theoryOfEverything from "../public/images/theoryOfEverything.jpeg";
import noPlaceToHide from "../public/images/noPlaceToHide.jpeg";
import Layout from "../components/layouts/article.js";
import Folly from "../public/images/Folly.jpeg";
import ParticlesComponent from "../components/animated-background.js";
const Misc = () => {
  return (
    <Layout title="Projects">
      <Box align="center">
        <Image src="images/books.gif"></Image>
      </Box>
      <Heading as="h3" fontSize={40} mb={6}>
        To Read
      </Heading>
      <SimpleGrid columns={[1, 1, 4]} gap={8}>
        <Section delay={0.1}>
          <ProjectsGridItem
            title="Theory of Everything"
            thumbnail={theoryOfEverything}
          >
            Stephen Hawking
          </ProjectsGridItem>
        </Section>
      </SimpleGrid>
      <Heading as="h3" fontSize={40} mb={6}>
        Finished
      </Heading>
      <SimpleGrid columns={[1, 1, 4]} gap={8}>
        <Section delay={0.2}>
          <ProjectsGridItem title="No Place to Hide" thumbnail={noPlaceToHide}>
            Edward Snowden
          </ProjectsGridItem>
        </Section>
        <Section delay={0.3}>
          <ProjectsGridItem title="Folly of Fools" thumbnail={Folly}>
            Robert Trivers
          </ProjectsGridItem>
        </Section>
      </SimpleGrid>
    </Layout>
  );
};
export default Misc;
