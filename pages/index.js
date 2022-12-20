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
      <Container>
        <Box
          borderRadius="lg"
          bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.100")}
          p={3}
          mb={6}
        >
          hello, i&apos;m currently a student.
        </Box>
        <Section delay={0.2}>
          <Box display={{ md: "flex" }}>
            <Box flexGrow={1} flexShrink={0}>
              <Heading as="h3" fontSize="45" variant="page-title">
                Jason Dang
              </Heading>

              <h2>
                <ReactRotatingText items={shuffledItems} />
              </h2>
            </Box>
            <Image
              borderColor={useColorModeValue("blue.500", "whiteAlpha.800")}
              borderWidth={10}
              borderStyle="solid"
              borderRadius="full"
              display="inline-block"
              src="/images/profile.png"
              alt="Profile picture"
            />
          </Box>
        </Section>
        <Section delay={0.5}>
          <NoSsr>
            <Voxel1 />
          </NoSsr>
        </Section>
        <Section delay={0.8}>
          <Heading as="h3" variant="section-title">
            about me?
          </Heading>

          <p>
            i'm twenty years old. finishing up college. longing to travel.
            learning how to live. discovering what i want to do.
          </p>
          <Box align="center" my={3}>
            <NextLink href="/courses">
              <Button
                rightIcon={<ChevronRightIcon />}
                colorScheme={useColorModeValue("blue", "orange")}
              >
                courses
              </Button>
            </NextLink>
          </Box>
          <Box align="center" my={2}>
            <NextLink href="/projects">
              <Button
                rightIcon={<ChevronRightIcon />}
                colorScheme={useColorModeValue("blue", "orange")}
              >
                projects
              </Button>
            </NextLink>
          </Box>
        </Section>
        <Section delay={1.1}>
          <Heading as="h3" variant="section-title">
            timeline
          </Heading>
          <TimelineSection>
            <TimelineYear> April'02</TimelineYear>
            born in sacramento, california
          </TimelineSection>
          <TimelineSection>
            <TimelineYear>Jul'19-Apr'20</TimelineYear>
            volt | apple internship
          </TimelineSection>
          <TimelineSection>
            <TimelineYear>May'20</TimelineYear>
            graduated franklin high school
          </TimelineSection>
          <TimelineSection>
            <TimelineYear>Aug'20-May'21</TimelineYear>
            attended LRCCD
          </TimelineSection>
          <TimelineSection>
            <TimelineYear>Aug'21-Present</TimelineYear>
            attending university of california, berkeley
          </TimelineSection>
        </Section>
        <Section delay={1.5}>
          <Heading as="h3" variant="section-title">
            hobbies?
          </Heading>
          <p>
            occasionally, i might be in the mood to read or go on a short
            run/jog. other times, i'm interested in music and games.{" "}
          </p>
        </Section>
        <Section delay={2.5}>
          <Heading as="h3" variant="section-title">
            links
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
          <Link href="https://www.instagram.com/jaesin9812/" target="_blank">
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
          <Link
            href="https://discordapp.com/users/260118781035151362"
            target="_blank"
          >
            <Button
              variant="ghost"
              colorScheme="blue"
              leftIcon={<Icon as={IoLogoDiscord}></Icon>}
            ></Button>
          </Link>
        </Section>
      </Container>
    </Layout>
  );
};
export default Page;
