import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, ProjectImage, Meta } from "../../components/project.js";
import P from "../../components/paragraph.js";
import Layout from "../../components/layouts/article";

const website = () => {
  return (
    <Layout title="Personal Portfolio">
      <Container>
        <Title>
          Personal Site
          <Badge> 2022 </Badge>
        </Title>
        <P>
          Personal Portfolio built with next.js and adapted into Flutter Webview
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Source </Meta>
            <Link href="https://github.com/draynr/website" color="pink.500">
              github
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Tools</Meta>
            <span>Next.js, Chakra UI, Three.js </span>
          </ListItem>
        </List>
      </Container>
    </Layout>
  );
};
export default website;
