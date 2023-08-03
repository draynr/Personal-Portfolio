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
const Projects = () => {
  return (
    <Layout title="Projects">
      <ParticlesComponent />
      <Box align="center">
        <Image src="images/123.gif"></Image>
      </Box>
      <Heading as="h3" fontSize={40} mb={5}>
        Projects
      </Heading>
      <SimpleGrid columns={[1, 2, 3]} gap={5}>
        <ProjectsGridItem id="/website" title="Website" thumbnail={site}>
          Personal Site
        </ProjectsGridItem>
        <ProjectsGridItem id="/chat" title="SwiphtChat" thumbnail={swiphtLogo}>
          Real-time web chat application
        </ProjectsGridItem>
        <ProjectsGridItem
          id="/banking"
          title="IntegratedBanking"
          thumbnail={bankLogo}
        >
          Web Application for Centralized Hub Access of Banking Transactions
        </ProjectsGridItem>
        <ProjectsGridItem id="/gitlet" title="Gitlet" thumbnail={thumbGitlet}>
          Git Repository Clone
        </ProjectsGridItem>
      </SimpleGrid>
    </Layout>
  );
};
export default Projects;
