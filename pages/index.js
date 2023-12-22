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
          Hi, I'm in my last year of my undergrad for computer science and data
          science (leaning more towards software engineering and algorithm
          design). I was never naturally interested or gifted at programming,
          even upon entering university—it was the only thing in which I felt I
          had slight interest in. It wasn't really until my second year where I
          became more comfortable programming and working with codebases where I
          familiarized myself with more algorithm and design concepts. I tend to
          believe that some people are naturally more interested in certain
          hobbies, but I'd also like to believe that you can build passion,
          despite not enjoying something at first. Now, I have a passion for
          full-stack development and building things that, I believe, matter
          because it's riveting to have the ability and tools to do so.
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

        <p>
          {" "}
          <b>Reading</b> - I was never really a reader and I still probably am
          not, but I need to work on my English comprehension and am convinced
          that reading more will help with that.
        </p>

        <p>
          {" "}
          <b>Music</b> - Music helps my day go by faster, but if I'm trying to
          focus, I turn off music.{" "}
        </p>
        <p>
          <b>Soccer</b> - I recently got interested in soccer and joined an
          intramural soccer team at Cal. I still suck, but I enjoy kicking the
          ball around, occasionally.
        </p>
        <p>
          <b>Competitive Programming</b> - I started to get into competitive
          programming contests on sites like{" "}
          <Link href="https://atcoder.jp/" color={"blue.300"}>
            <b>atcoder</b>
          </Link>
          . I'm particularly new, but problem-solving is something that
          intrigues me—because it can be extremely challenging, the ability to
          solve problems is proportionately rewarding.
        </p>
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
      </Section>
    </Layout>
  );
};
export default Page;
