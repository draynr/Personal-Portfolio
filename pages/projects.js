import { Box, Container, SimpleGrid, Divider, Heading } from "@chakra-ui/react";
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
const Projects = () => {
  return (
    <Layout title="Projects">
      <Container>
        <Heading as="h3" fontSize={40} mb={6}>
          things i've tried to make
        </Heading>
        <SimpleGrid columns={[1, 1, 3]} gap={6}>
          <Section delay={0.1}>
            <ProjectsGridItem id="/website" title="website" thumbnail={site}>
              i thought i would branch out and focus on more front-end software
            </ProjectsGridItem>
          </Section>
          <Section delay={0.3}>
            <ProjectsGridItem
              id="website_mobile"
              title="webview"
              thumbnail={flutter}
            >
              personal site rendered through simple Flutter Webview
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
            memorable course projects
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
      </Container>
    </Layout>
  );
};
export default Projects;
