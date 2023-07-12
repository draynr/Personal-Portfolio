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
import thumbGitlet from "../public/images/projects/gitlet.png";
import site from "../public/images/projects/webpage.png";
import Layout from "../components/layouts/article.js";
import flutter from "../public/images/flutter.png";
import spot from "../public/images/spotify.png";
import ParticlesComponent from "../components/animated-background.js";
const Projects = () => {
  return (
    <Layout title="Projects">
      <Box align="center">
        <Image src="images/123.gif"></Image>
      </Box>
      <Heading as="h3" fontSize={40} mb={10}>
        Projects
      </Heading>
      <SimpleGrid columns={[1, 2, 5]} gap={3}>
        <Section delay={0.1}>
          <ProjectsGridItem id="/website" title="Website" thumbnail={site}>
            Personal Site
          </ProjectsGridItem>
        </Section>
      </SimpleGrid>
      <Section delay={0.5}>
        <ParticlesComponent />
      </Section>
    </Layout>
  );
};
export default Projects;
