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
      <Container>
        <Box align="center">
          <Image src="images/123.gif"></Image>
        </Box>
        <Heading as="h3" fontSize={40} mb={6}>
          Side Projects
        </Heading>
        <SimpleGrid columns={[1, 1, 3]} gap={6}>
          <Section delay={0.1}>
            <ProjectsGridItem id="/website" title="website" thumbnail={site}>
              personal website
            </ProjectsGridItem>
          </Section>
          <Section delay={0.3}>
            <ProjectsGridItem
              id="website_mobile"
              title="webview"
              thumbnail={flutter}
            >
              personal website simply rendered through flutter webview
            </ProjectsGridItem>
          </Section>
          <Section delay={0.4}>
            <ProjectsGridItem
              id="music_recommendation"
              title="simple music recommendation"
              thumbnail={spot}
            >
              recommends songs based on spotify playlist preferences
            </ProjectsGridItem>
          </Section>
        </SimpleGrid>
        <Section delay={0.8}>
          <Heading as="h3" fontSize={40} mb={6}>
            Course Projects
          </Heading>
        </Section>
        <SimpleGrid columns={[1, 1, 3]} gap={6}>
          <Section delay={0.95}>
            <ProjectsGridItem
              id="gitlet"
              title="gitlet"
              thumbnail={thumbGitlet}
            >
              implemented a version-control system that replicates some of the
              important features of Git– adding files, commits, restoring
              states, maintaining and merging branches.
            </ProjectsGridItem>
          </Section>
        </SimpleGrid>
        <Section delay={0.5}>
          <ParticlesComponent />
        </Section>
      </Container>
    </Layout>
  );
};
export default Projects;
