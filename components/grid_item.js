import NextLink from "next/link";
import Image from "next/image";
import { Box, Text, LinkBox, LinkOverlay } from "@chakra-ui/react";
import { Global } from "@emotion/react";

export const GridItem = ({ children, href, title, thumbnail }) => (
  <Box
    w="100%"
    align="center"
    _hover={{ background: "#ffffff30", color: "white" }}
  >
    <LinkBox cursor="pointer">
      <Image
        src={thumbnail}
        alt={title}
        className="grid-item-thumbnail"
        placeholder="blur"
        loading="lazy"
      />
      <LinkOverlay href={href} target="_blank">
        <Text mt={2}> {title} </Text>
      </LinkOverlay>
      <Text fontSize={14}>{children}</Text>
    </LinkBox>
  </Box>
);
export const ProjectsGridItem = ({ children, id, title, thumbnail }) => (
  <Box
    w="full"
    align="center"
    _hover={{ background: "#ffffff30", color: "white" }}
  >
    <NextLink href={`/projects/${id}`}>
      <LinkBox cursor="pointer">
        <Image
          src={thumbnail}
          alt={title}
          className="grid-item-thumbnail"
          placeholder="blur"
          loading="lazy"
        />
        <LinkOverlay href={`/projects/${id}`}>
          <Text mt={2} fontSize={20}>
            {" "}
            {title}{" "}
          </Text>
        </LinkOverlay>
        <Text fontSize={14}> {children}</Text>
      </LinkBox>
    </NextLink>
  </Box>
);
export const GridItemStyle = () => (
  <Global
    styles={`.grid-item-thumbnail {
	border-radius:12px ;
	}`}
  />
);
export const ProjectImage = ({ src, alt }) => (
  <Image borderRadius="lg" w="full" src={src} alt={alt} mb={4} />
);
