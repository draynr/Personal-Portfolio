import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, ProjectImage, Meta } from "../../components/project.js";
import P from "../../components/paragraph.js";
import Layout from "../../components/layouts/article.js";

const lights_camera_dungeon = () => {
  return (
    <Layout title="Lights Camera Dungeon">
      <Container>
        <Title>
          Lights Camera Dungeon
          <Badge> 2024 </Badge>
        </Title>
        <P>
          2.5D bullet-hell topdown game that focuses on many graphic techniques learned in CS 184. Wanted to create a  unique experience by combining lements from 2D pixel-art into 3D rendering. 
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Src </Meta>
            <Link href="https://github.com/draynr/Lights-Camera-Dungeon" color="pink.500">
              github
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Tools</Meta>
            <span>GoDot 4.21, Aseprite, Crocotile3D</span>
          </ListItem>
          <ProjectImage src={"/images/game_preview_07.gif"} />
          <ProjectImage src={"/images/game_preview_06.gif"} />
          <ProjectImage src={"/images/game_preview_04.gif"} />
          <ProjectImage src={"/images/game_preview_01.gif"} />
          <ProjectImage src={"/images/game_preview_02.gif"} />
          <ProjectImage src={"/images/game_preview_03.gif"} />
          <video src="/images/game_preview_05.mp4" height={1080} width={720} controls></video>


        </List>
      </Container>
    </Layout>
  );
};
export default lights_camera_dungeon;
