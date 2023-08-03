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
import Voxel1 from "/components/animatex.js";
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
            src="/images/profile.png"
            alt="Profile picture"
          />
        </Box>
      </Section>
      <Section delay={1.0}>
        <Heading as="h3" variant="section-title">
          About Me
        </Heading>

        <p>21 years old... looking for stuff to do</p>
        <Box align="center" my={3}>
          <NextLink href="/courses">
            <Button
              rightIcon={<ChevronRightIcon />}
              colorScheme={useColorModeValue("gray", "gray")}
            >
              Courses
            </Button>
          </NextLink>
        </Box>
        <Box align="center" my={2}>
          <NextLink href="/projects" passHref>
            <Button
              rightIcon={<ChevronRightIcon />}
              colorScheme={useColorModeValue("gray", "gray")}
            >
              Projects
            </Button>
          </NextLink>
        </Box>
      </Section>
      <Section delay={1.1}>
        <NoSsr>
          <Voxel1 />
        </NoSsr>
      </Section>
      <Section delay={1.3}>
        <Heading as="h3" variant="section-title">
          Timeline
        </Heading>
        <TimelineSection>
          <TimelineYear> Apr '02</TimelineYear>
          sacramento, california
        </TimelineSection>
        <TimelineSection>
          <TimelineYear>Jul '19 - Apr '20</TimelineYear>
          volt workforce solutions -> apple internship
        </TimelineSection>
        <TimelineSection>
          <TimelineYear>May '20</TimelineYear>
          franklin hs
        </TimelineSection>
        <TimelineSection>
          <TimelineYear>Aug '21 - May '24</TimelineYear>
          uc berkeley
        </TimelineSection>
      </Section>
      <Section delay={1.5}>
        <Heading as="h3" variant="section-title">
          Hobbies
        </Heading>
        <p>reading, music, soccer</p>
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
          href="https://open.spotify.com/playlist/0twil6VLsXKfjVTHnOI26t?si=80cad5be8ac34e7e"
          target="_blank"
        >
          <Button
            variant="ghost"
            colorScheme="green"
            leftIcon={<Icon as={IoMusicalNote}></Icon>}
          ></Button>
        </Link>
        <ParticlesComponent />
      </Section>
    </Layout>
  );
};
export default Page;
