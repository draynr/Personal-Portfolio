import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, ProjectImage, Meta } from "../../components/project.js";
import P from "../../components/paragraph.js";
import Layout from "../../components/layouts/article";

const gitlet = () => {
  return (
    <Layout title="Gitlet">
      <Container>
        <Title>
          Gitlet
          <Badge> 2022 </Badge>
        </Title>
        <P> copied repository system like git</P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Source </Meta>
            <Link href="https://www.youtube.com/watch?v=A3Zo54GyLJ8&list=RDA3Zo54GyLJ8&start_radio=1">
              sorry can't post course material, but click this{" "}
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Tools</Meta>
            <span>java, git, oop</span>
          </ListItem>
        </List>
      </Container>
    </Layout>
  );
};
export default gitlet;
