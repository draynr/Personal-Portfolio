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
import { ChevronRightIcon } from "@chakra-ui/icons";
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
        <Section delay={0.1}>
          <Box display={{ md: "flex" }}>
            <Box flexGrow={1} flexShrink={0}>
              <Heading as="h3" fontSize="45" variant="page-title">
                jason dang
              </Heading>
              <p>
                it's never about how high we can go, but rather, how high we
                want to go
              </p>
            </Box>
            <Image
              borderColor={useColorModeValue(
                "whiteAlpha.500",
                "whiteAlpha.800"
              )}
              borderWidth={2}
              borderStyle="solid"
              display="inline-block"
              src="/images/profile.jpeg"
              alt="Profile picture"
            />
          </Box>
        </Section>
        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            what i am currently doing
          </Heading>
          <Paragraph>
            {" "}
            finishing up college. wanting to travel. learning how to live.{" "}
          </Paragraph>
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
        <Section delay={0.4}>
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
        <Section delay={0.9}>
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
