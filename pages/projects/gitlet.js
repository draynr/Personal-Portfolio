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
        <P>
          {" "}
          I was fortunate enough to take this course with Professor Hilfinger
          where we had to implement, effectively, a Git clone from scratch. 61B,
          at least early on, can be an extremely rewarding course and I feel
          that this project is a primary reason as to why.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Source </Meta>
            course project, can't release source code
          </ListItem>
          <ListItem>
            <Meta>Languages/Frameworks</Meta>
            <span> Java </span>
          </ListItem>
        </List>
      </Container>
    </Layout>
  );
};
export default gitlet;
