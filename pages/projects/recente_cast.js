import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, ProjectImage, Meta } from "../../components/project.js";
import P from "../../components/paragraph.js";
import Layout from "../../components/layouts/article";

const recente_cast = () => {
  return (
    <Layout title="recente_cast">
      <Container>
        <Title>
          recente casts
          <Badge> 2022 </Badge>
        </Title>
        <P>
          automatically updates and displays the most recent episodes from
          followed podcasts{" "}
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Source </Meta>
            <Link href="https://github.com/draynr/podcast_aggregator">
              github
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Tools</Meta>
            <span>Django, Python </span>
          </ListItem>
        </List>
      </Container>
    </Layout>
  );
};
export default recente_cast;
