import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, ProjectImage, Meta } from "../../components/project.js";
import P from "../../components/paragraph.js";
import Layout from "../../components/layouts/article";

const chat = () => {
  return (
    <Layout title="SwiphtChat">
      <Container>
        <Title>
          SwiphtChat
          <Badge> 2023 </Badge>
        </Title>
        <P>
          A chat web application with features like adding friends, real-time
          messaging. Developed a back-end web service to handle user
          authentication with JWT and store sessions data in a Redis cache.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Source </Meta>
            <Link color="teal.500" href="https://github.com/draynr/SwiphtChat">
              github
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Languages/Frameworks</Meta>
            <span> TypeScript, Next.js, TailWindCSS, Redis</span>
          </ListItem>
        </List>
        <ProjectImage src={"/images/chat05.png"} alt="SwiphtChat" />
        <ProjectImage src={"/images/chat-02.png"} alt="SwiphtChat" />
        <ProjectImage src={"/images/chat-03.png"} alt="SwiphtChat" />
        <ProjectImage src={"/images/chat-04.png"} alt="SwiphtChat" />
      </Container>
    </Layout>
  );
};
export default chat;
