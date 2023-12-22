import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, ProjectImage, Meta } from "../../components/project.js";
import P from "../../components/paragraph.js";
import Layout from "../../components/layouts/article.js";

const pintos = () => {
  return (
    <Layout title="Pintos">
      <Container>
        <Title>
          PintOS
          <Badge> 2023 </Badge>
        </Title>
        <P>
          {" "}
          Definitely one of the most challenging, time-consuming projects I've
          worked on. The codebase was, relative to any other course project,
          large; the functional design required immense brainstorming and
          implementation was intensive. With that being said, I don't think
          there was another course that was as rewarding as 162. I felt like I
          grew as a programmer, and, after those 150+ hours of being in my room,
          this project is the most accomplished I've worked on.{" "}
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Source </Meta> course project, can't release source code.
          </ListItem>
          <ListItem>
            <Meta>Languages/Frameworks</Meta>
            <span> C, x86 assembly </span>
          </ListItem>
        </List>
      </Container>
    </Layout>
  );
};
export default pintos;
