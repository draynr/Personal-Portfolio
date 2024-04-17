import ParticlesComponent from "../components/animated-background.js";
import {
  Container,
  Box,
  Button,
  Icon,
  Link,
  SimpleGrid,
  Heading,
  Image,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import NextLink from "next/link";
import Layout from "../components/layouts/article.js";
import { LinkIcon, ChevronRightIcon } from "@chakra-ui/icons";
import Section from "../components/section.js";
import Paragraph from "../components/paragraph.js";
import { GridItem } from "../components/grid_item";
import { TimelineYear, TimelineSection } from "../components/timeline.js";
import {
  IoLogoInstagram,
  IoMusicalNote,
  IoLogoDiscord,
  IoLogoLinkedin,
  IoLogoGithub,
} from "react-icons/io5";
import NoSsr from "/components/no-ssr.js";
import Voxel1 from "/components/voxel-1.js";
import { LinkPreviewer } from "../components/linkpreviewer";
var ReactRotatingText = require("react-rotating-text");
const array = [
  "C'est la vie",
  "Such is life",
  "L’habit ne fait pas le moine",
  "Xin Chào",
  "안녕하세요",
  "Guten Tag",
  "Aloha",
  "روز خوب",
  "Qui vivra verra",
  "Time will tell",
  "你好",
];
const shuffledItems = array.sort((a, b) => 0.5 - Math.random());

const Page = () => {
  return (
    <Layout>
      <ParticlesComponent />
      <Box align="center">
        <Image src="images/111.gif" alt="gif"></Image>
      </Box>

      <Box
        borderRadius="lg"
        bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.100")}
        p={3}
        mb={6}
      >
        <h1>
          <ReactRotatingText items={shuffledItems} />
        </h1>
      </Box>
      <Section delay={0.2}>
        <Box display={{ md: "flex" }}>
          <Box flexGrow={10} flexShrink={0}>
            <Heading as="h3" fontSize="55" variant="page-title">
              Jason Dang
            </Heading>
          </Box>
          <Image
            borderColor={useColorModeValue("white", "#1b3c4b")}
            borderWidth={4}
            borderStyle="solid"
            borderRadius="full"
            display="inline-block"
            src="/images/pfp.jpeg"
            alt="Profile picture"
          />
        </Box>
      </Section>
      <Section delay={1.0}>
        <Heading as="h3" variant="section-title">
          About Me
        </Heading>

        <p>

Aspiring software engineer with strong fundamentals in computer science and experience developing full-stack web applications and games. Passionate about algorithmic solutions, and building innovative software. Seeking to leverage skills to contribute to cutting-edge projects at a top tech company.
Intending to pursue Master's degree in Computer Science.

   
        </p>
      </Section>
      <Section delay={1.1}>
        <NoSsr>
          <Voxel1 url="../public/pc22.glb" />
        </NoSsr>
      </Section>
      <Section delay={1.3}>
        <Heading as="h3" variant="section-title">
          Timeline
        </Heading>
        <TimelineSection>
          <TimelineYear>Jul '19 - Apr '20</TimelineYear>
          Apple Internship 
        </TimelineSection>
        <TimelineSection>
          <TimelineYear>Aug '16 - May '20</TimelineYear>
          Franklin High School
        </TimelineSection>
        <TimelineSection>
          <TimelineYear>Aug '21 - May '24</TimelineYear>
          University of California, Berkeley
        </TimelineSection>
        <TimelineSection>
          <TimelineYear>Current</TimelineYear>
          Work/Graduate Program
        </TimelineSection>
      </Section>
      <Section delay={1.5}>
        <Heading as="h3" variant="section-title">
          Activities
        </Heading>

        <li>
          {" "}
          <b>Reading</b> 
        </li>

        <li>
          {" "}
          <b>Music</b> 
        </li>
        <li>
          <b>Soccer</b> 
        </li>
        <li>
          <b>Competitive Programming Contests</b> 
        </li>
      </Section>
      <Section delay={2.5}>
        <Heading as="h3" variant="section-title">
          Links
        </Heading>
        <Link href="https://github.com/draynr" target="_blank">
          <Button
            variant="ghost"
            colorScheme="yellow"
            leftIcon={<Icon as={IoLogoGithub}></Icon>}
          ></Button>
        </Link>
        <Link
          href="https://www.linkedin.com/in/jason-dang-14a34b177/"
          target="_blank"
        >
          <Button
            variant="ghost"
            colorScheme="blue"
            leftIcon={<Icon as={IoLogoLinkedin}></Icon>}
          ></Button>
        </Link>
        <Link href="https://www.instagram.com/jaesiiiiiiin/" target="_blank">
          <Button
            variant="ghost"
            colorScheme="orange"
            leftIcon={<Icon as={IoLogoInstagram}></Icon>}
          ></Button>
        </Link>
        <Link
          href="https://open.spotify.com/playlist/4Gfwt6AmTtTnOVflC3mY3b"
          target="_blank"
        >
          <Button
            variant="ghost"
            colorScheme="green"
            leftIcon={<Icon as={IoMusicalNote}></Icon>}
          ></Button>
        </Link>
      </Section>
    </Layout>
  );
};
export default Page;
