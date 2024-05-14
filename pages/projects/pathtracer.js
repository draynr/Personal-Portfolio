import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, ProjectImage, Meta } from "../../components/project.js";
import P from "../../components/paragraph.js";
import Layout from "../../components/layouts/article.js";

const physics = () => {
  return (
    <Layout title="Physics Based Rendering">
      <Container>
        <Title>
          Physics Based Rendering
          <Badge> 2024 </Badge>
        </Title>
        <P>
          Implemented full rendering pipeline, including ray tracing, shading, and global illumination, to generate photorealistic images.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Src </Meta>
            <Link href="https://cal-cs184-student.github.io/hw-webpages-sp24-draynr/hw3/index.html" color ="pink.500">
              site
              </Link>
          </ListItem>
          <ListItem>
            <Meta>Languages/Frameworks</Meta>
            <span> C++ </span>
          </ListItem>
        </List>
      </Container>
    </Layout>
  );
};
export default physics;
