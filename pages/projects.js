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
const Projects = () => {
  return (
    <Layout title="Projects">
      <Container>
        <Heading as="h3" fontSize={40} mb={6}>
          Projects
        </Heading>
        <SimpleGrid columns={[1, 1, 3]} gap={6}>
          <Section delay={0.1}>
            <ProjectsGridItem
              id="unity-game"
              title="Unity Game"
              thumbnail={wip}
            >
              Currently working on 2d top-down rpg.
            </ProjectsGridItem>
          </Section>
          <Section delay={0.3}>
            <ProjectsGridItem
              id="website"
              title="Personal Website"
              thumbnail={site}
            >
              Built a personal portfolio to display resume and upload posts.
            </ProjectsGridItem>
          </Section>
        </SimpleGrid>
        <Heading as="h3" fontSize={40} mb={6}>
          Course Projects
        </Heading>
        <SimpleGrid columns={[1, 1, 3]} gap={6}>
          <Section delay={0.8}>
            <ProjectsGridItem
              id="gitlet"
              title="Gitlet"
              thumbnail={thumbGitlet}
            >
              Implemented a version-control system that replicates some of the
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
