import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, ProjectImage, Meta } from "../../components/project.js";
import P from "../../components/paragraph.js";
import Layout from "../../components/layouts/article.js";

const chat = () => {
  return (
    <Layout title="Gitlet">
      <Container>
        <Title>
          IntegratedBanking
          <Badge> 2023 </Badge>
        </Title>
        <P>
          Designed a web application that offers a seamless, centralized hub for
          associated bank accounts. Enables registered users to track their
          financial transactions, eliminating the need for repetitive logins to
          individual banking platforms.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Source </Meta>
            <Link color="teal.500" href="">
              In Progress.
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Languages/Frameworks</Meta>
            <span> MongoDB, Express.js, Node.js, React, Plaid Api</span>
          </ListItem>
        </List>
      </Container>
    </Layout>
  );
};
export default chat;
