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
const Projects = () => {
  return (
    <Layout title="Projects">
      <Box align="center">
        <Voxel2 />
      </Box>
      <Heading as="h3" align="center" fontSize={40} mb={5}>
        Projects
      </Heading>
      <Section delay={0.4}>
        <SimpleGrid columns={[1, 2, 4]} gap={10}>
          <ProjectsGridItem id="/website" title="Website" thumbnail={site}>
            Personal Site
          </ProjectsGridItem>
          {/* <ProjectsGridItem
            id="/chat"
            title="SwiphtChat"
            thumbnail={swiphtLogo}
          >
            Real-time web chat application
          </ProjectsGridItem>
          <ProjectsGridItem
            id="/banking"
            title="IntegratedBanking"
            thumbnail={bankLogo}
          >
            Web Application for Centralized Hub Access of Banking Transactions
          </ProjectsGridItem> */}
        </SimpleGrid>
      </Section>
      <Section delay={0.65}>
        <SimpleGrid columns={[1, 2, 4]} gap={5}>
          <ProjectsGridItem id="/gitlet" title="Gitlet" thumbnail={thumbGitlet}>
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
