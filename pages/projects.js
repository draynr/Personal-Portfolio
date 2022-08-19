import { Box, Container, SimpleGrid, Divider, Heading } from "@chakra-ui/react";
import Section from "../components/section.js";
import {
  GridItem,
  ProjectsGridItem,
  GridItemStyle,
} from "../components/grid_item";
import thumbGitlet from "../public/images/projects/gitlet.png";
const Projects = () => {
  return (
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Projects
      </Heading>
      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <ProjectsGridItem
            id="gitlet"
            thumbnail={thumbGitlet}
          ></ProjectsGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  );
};
export default Projects;
