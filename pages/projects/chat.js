import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, ProjectImage, Meta } from "../../components/project.js";
import P from "../../components/paragraph.js";
import Layout from "../../components/layouts/article";

const chat = () => {
  return (
    <Layout title="Gitlet">
      <Container>
        <Title>
          SwiphtChat
          <Badge> 2023 </Badge>
        </Title>
        <P>
          Developed a real-time chat application with features like
          adding/removing friends, real-time messaging, and secure
          authentication. Ensured optimized performance through Redis database
          queries, protection of sensitive routes, and responsive UI with
          Tailwind.
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
          <ProjectImage src={"/images/chat-02.png"} alt="SwiphtChat" />
          <ProjectImage src={"/images/chat-03.png"} alt="SwiphtChat" />
          <ProjectImage src={"/images/chat-04.png"} alt="SwiphtChat" />
        </List>
      </Container>
    </Layout>
  );
};
export default chat;
