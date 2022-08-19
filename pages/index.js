import {
  Container,
  Box,
  Button,
  Heading,
  Image,
  useColorModeValue,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { ChevronRightIcon } from "@chakra-ui/icons";
import Section from "../components/section.js";
import Paragraph from "../components/paragraph.js";
import { TimelineYear, TimelineSection } from "../components/timeline.js";
const Page = () => {
  return (
    <Container>
      <Box
        borderRadius="lg"
        bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.100")}
        p={3}
        mb={6}
      >
        Hello, I&apos;m currently a computer science student @ UC Berkeley.
      </Box>
      <Box display={{ md: "flex" }}>
        <Box flexGrow={1}>
          <Heading as="h3" variant="page-title">
            Jason Dang
          </Heading>
          <p>"Everyday, I regret that I'm growing older." </p>
        </Box>
      </Box>
      <Box flexShrink={0} mt={{ base: 4, md: 0 }} ml={{ md: 6 }} align="center">
        <Image
          borderColor={useColorModeValue("whiteAlpha.500", "whiteAlpha.800")}
          borderWidth={2}
          borderStyle="solid"
          display="inline-block"
          borderRadius="full"
          src="/images/profile.png"
          alt="Profile picture"
        />
      </Box>
      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          What I am Currently Doing
        </Heading>
        <Paragraph>
          {" "}
          I would like to think I am still quite young, so I enjoy playing video
          games to waste time. Ocassionally, I will pick up a book, but, mostly,
          I am a homebody and extremely lazy. I will browse YouTube and, before
          I know it, the day will be over :(
        </Paragraph>
        <Box align="center" my={3}>
          <NextLink href="/courses">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="blue">
              Course Work
            </Button>
          </NextLink>
        </Box>
        <Box align="center" my={2}>
          <NextLink href="/projects">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="blue">
              Projects
            </Button>
          </NextLink>
        </Box>
      </Section>
      <Section delay={0.4}>
        <Heading as="h3" variant="section-title">
          Timeline
        </Heading>
        <TimelineSection>
          <TimelineYear>2002</TimelineYear>
          Born in Sacramento, California
        </TimelineSection>
        <TimelineSection>
          <TimelineYear>2019-20</TimelineYear>
          Contracted through Volt to intern at Apple
        </TimelineSection>
        <TimelineSection>
          <TimelineYear>2020</TimelineYear>
          Graduated Franklin High School
        </TimelineSection>
        <TimelineSection>
          <TimelineYear>2020-21</TimelineYear>
          Completed studies at Los Rios School District
        </TimelineSection>
        <TimelineSection>
          <TimelineYear>2022-Present</TimelineYear>
          Attending University of California, Berkeley
        </TimelineSection>
      </Section>
    </Container>
  );
};
export default Page;
