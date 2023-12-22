import {
  Box,
  Image,
  Container,
  SimpleGrid,
  Divider,
  Heading,
} from "@chakra-ui/react";
import Section from "../components/section.js";

import { GridItem } from "../components/grid_item.js";
import twelverules from "../public/images/twelverules.jpeg";
import theoryOfEverything from "../public/images/theoryOfEverything.jpeg";
import noPlaceToHide from "../public/images/noPlaceToHide.jpeg";
import Layout from "../components/layouts/article.js";
import david from "../public/images/david.jpeg";
import Kundera from "../public/images/kundera.jpeg";
import Folly from "../public/images/Folly.jpeg";
import breath from "../public/images/breath.jpeg";
import search from "../public/images/search.jpeg";
import fish from "../public/images/fish.jpg";
import ParticlesComponent from "../components/animated-background.js";
const Misc = () => {
  return (
    <Layout title="Projects">
      <Box align="center">
        <Image src="images/books.gif"></Image>
      </Box>
      <Heading as="h3" align="center" fontSize={40} mb={6}>
        Books
      </Heading>
      <Section delay={0.1}>
        <SimpleGrid columns={[1, 1, 4]} gap={8}>
          <GridItem
            title="Why Fish Don't Exist"
            thumbnail={fish}
            href="https://www.amazon.com/Why-Fish-Dont-Exist-Hidden/dp/1501160273"
          >
            Lulu Miller
          </GridItem>
          <GridItem
            title="Theory of Everything"
            thumbnail={theoryOfEverything}
            href="https://www.amazon.com/Theory-Everything-Stephen-W-Hawking/dp/0910304904"
          >
            Stephen Hawking
          </GridItem>
        </SimpleGrid>
      </Section>
      <Heading as="h3" fontSize={40} mb={6}>
        finished
      </Heading>
      <SimpleGrid columns={[1, 1, 4]} gap={8}>
        <GridItem
          title="David and Goliath: Underdogs, Misfits, and the Art of Battling Giants"
          thumbnail={david}
          href="https://www.amazon.com/David-and-Goliath-audiobook/dp/B00EKQKMG2/ref=sr_1_1?crid=3MO0A7906X4EJ&keywords=david+and+the+goliath&qid=1689638742&s=audible&sprefix=david+and+the+goliat%2Caudible%2C148&sr=1-1"
        >
          Malcolm Gladwell
        </GridItem>
        <GridItem
          title="No Place to Hide"
          thumbnail={noPlaceToHide}
          href="https://www.amazon.com/No-Place-to-Hide-Glenn-Greenwald-audiobook/dp/B00MEIPBHI/ref=sr_1_1?crid=27YEXM7RFLQLB&keywords=no+place+to+hide&qid=1689638677&s=books&sprefix=no+place+to+hid%2Cstripbooks%2C160&sr=1-1"
        >
          Edward Snowden
        </GridItem>
        <GridItem
          title="The Unbearable Lightness of Being"
          thumbnail={Kundera}
          href="https://www.amazon.com/Unbearable-Lightness-of-Being-audiobook/dp/B0083EFWA8/ref=sr_1_1?keywords=the+unbearable+lightness+of+being+by+milan+kundera&qid=1689638916&s=audible&sprefix=the+unbearable+lightn%2Caudible%2C152&sr=1-1"
        >
          Milan Kundera
        </GridItem>
        <GridItem
          title="When Breath Becomes Air"
          thumbnail={breath}
          href="https://www.amazon.com/When-Breath-Becomes-Paul-Kalanithi/dp/081298840X"
        >
          Paul Kalanithi
        </GridItem>
        <GridItem
          title="Folly of Fools"
          thumbnail={Folly}
          href="https://www.amazon.com/Folly-Fools-Logic-Deceit-Self-Deception/dp/B09R51JGMB/ref=sr_1_1?crid=1GYK48WOJ9K0S&keywords=folly+of+fools&qid=1689638703&s=audible&sprefix=folly+of+fool%2Caudible%2C150&sr=1-1"
        >
          Robert Trivers
        </GridItem>
        <GridItem
          title="Man's Search for Meaning"
          thumbnail={search}
          href="https://www.amazon.com/Mans-Search-Meaning-Viktor-Frankl-ebook/dp/B009U9S6FI"
        >
          Viktor Frankl
        </GridItem>
        <GridItem
          title="12 Rules for Life: An Antidote to Chaos"
          thumbnail={twelverules}
          href="https://www.amazon.com/12-Rules-Life-Antidote-Chaos/dp/0345816021"
        >
          Jordan Peterson
        </GridItem>
      </SimpleGrid>
    </Layout>
  );
};
export default Misc;
