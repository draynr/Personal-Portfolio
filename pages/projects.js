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
import bankLogo from "../public/images/bank.png";
import swiphtLogo from "../public/images/swiphtchatlogo.png";
import ParticlesComponent from "../components/animated-background.js";
import Voxel2 from "../components/voxel-2.js";
import pintos from "../public/images/pintos.png";
import game_thumb from "../public/images/game.png";
import physics from "../public/images/physics.png";
const Projects = () => {
  return (
    <Layout title="Projects">
      <Box align="center" mb={[30, 25, 20]}>
        <Box transform={["scale(0.5)", "scale(0.9)", "scale(1)"]}>
          <Voxel2
            width={["200px", "250px", "200px"]}
            height={["200px", "250px", "200px"]}
          />
        </Box>
      </Box>
      <Heading as="h3" align="center" fontSize={40} mb={5}>
        technical
      </Heading>
      <Section delay={0.4}>
        <SimpleGrid
          columns={[1, 2, 4]}
          gap={10}
          templateAreas={[`"a"`, `"a b"`, `"a b c d"`]}
        >
          <ProjectsGridItem
            id="/lights_camera_dungeon"
            title="Lights Camera Dungeon"
            thumbnail={game_thumb}
            gridArea="a"
          >
            Lights Camera Dungeon
          </ProjectsGridItem>

          <ProjectsGridItem
            id="/pathtracer"
            title="Physics Based Rendering"
            thumbnail={physics}
            gridArea="b"
          >
            Physics based rendering
          </ProjectsGridItem>
          <ProjectsGridItem
            id="/gitlet"
            title="Gitlet"
            thumbnail={thumbGitlet}
            gridArea
          >
            Git clone
          </ProjectsGridItem>
          <ProjectsGridItem id="/pintos" title="PintOS" thumbnail={pintos}>
            Implemented multithreading, fast file system, system call handling
            on Stanford's PintOS project
          </ProjectsGridItem>
        </SimpleGrid>
      </Section>
    </Layout>
  );
};
export default Projects;
