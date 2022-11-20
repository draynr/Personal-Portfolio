import { Box, Container, SimpleGrid, Divider, Heading } from "@chakra-ui/react";
import Section from "../components/section.js";
import {
  GridItem,
  ProjectsGridItem,
  GridItemStyle,
} from "../components/grid_item";
import thumbGitlet from "../public/images/projects/gitlet.png";
import wip from "../public/images/projects/work-in-progress.png";
import site from "../public/images/projects/webpage.png";
import Layout from "../components/layouts/article.js";
import flutter from "../public/images/flutter.png";
import spot from "../public/images/spotify.png";
import podcast from "../public/images/podcast.png";
const Projects = () => {
  return (
    <Layout title="Projects">
      <Container>
        <Heading as="h3" fontSize={40} mb={6}>
          projects
        </Heading>
        <SimpleGrid columns={[1, 1, 3]} gap={6}>
          <Section delay={0.1}>
            <ProjectsGridItem id="website" title="website" thumbnail={site}>
              built a personal portfolio because everyone has one.
            </ProjectsGridItem>
          </Section>
          <Section delay={0.2}>
            <ProjectsGridItem
              id="website_mobile"
              title="webview"
              thumbnail={flutter}
            >
              personal site rendered through Flutter Webview
            </ProjectsGridItem>
          </Section>
          <Section delay={0.3}>
            <ProjectsGridItem
              id="music_recommendation"
              title="music recommendation"
              thumbnail={spot}
            >
              recommends songs based on spotify playlist preferences
            </ProjectsGridItem>
          </Section>
          <Section delay={0.4}>
            <ProjectsGridItem
              id="recente_cast"
              title="recente cast"
              thumbnail={podcast}
            >
              displays most recent episodes from favorite podcasts
            </ProjectsGridItem>
          </Section>
        </SimpleGrid>
        <Heading as="h3" fontSize={40} mb={6}>
          memorable course projects
        </Heading>
        <SimpleGrid columns={[1, 1, 3]} gap={6}>
          <Section delay={0.3}>
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
