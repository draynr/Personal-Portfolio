import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, ProjectImage, Meta } from "../../components/project.js";
import P from "../../components/paragraph.js";
import Layout from "../../components/layouts/article";

const music_rec = () => {
  return (
    <Layout title="music_recommendation">
      <Container>
        <Title>
          music_rec
          <Badge> 2022 </Badge>
        </Title>
        <P>in progress</P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Source </Meta>
            <Link href="">in progress</Link>
          </ListItem>
          <ListItem>
            <Meta>tools</Meta>
            <span>python, spotipy</span>
          </ListItem>
        </List>
      </Container>
    </Layout>
  );
};
export default music_rec;
