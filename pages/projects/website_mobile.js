import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, ProjectImage, Meta } from "../../components/project.js";
import P from "../../components/paragraph.js";
import Layout from "../../components/layouts/article";

const website_mobile = () => {
  return (
    <Layout title="website_webview">
      <Container>
        <Title>
          Flutter Webview
          <Badge> 2022 </Badge>
        </Title>
        <P>personal portfolio but viewed through flutter webview</P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Source </Meta>
            <Link href="https://github.com/draynr/website_webview1">
              github
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Tools</Meta>
            <span>Flutter, Dart </span>
          </ListItem>
        </List>
      </Container>
    </Layout>
  );
};
export default website_mobile;
