import { Container, Heading, SimpleGrid } from "@chakra-ui/react";
import Layout from "../components/layouts/article";
import Section from "../components/section";
import { GridItem } from "../components/grid_item";

const courses = () => (
  <Layout title="Courses">
    <Container>
      <Heading as="h4" fontSize={20} mb={4}>
        Courses Taken @ Berkeley
      </Heading>
      <Section delay={0.1}>
        <SimpleGrid columns={[2, 2, 2]} gap={7}>
          <GridItem title="CS61A"></GridItem>
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
);
export default courses;
