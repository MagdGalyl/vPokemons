import React from "react";
import { Box, Image, Badge, Tag, TagLabel } from "@chakra-ui/react";

function PokemonBox() {
  return (
    <div>
      <Box
        bg="tomato"
        w="100%"
        // p={4}
        color="white"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
      >
        <Image
          boxSize="100%"
          objectFit="cover"
          src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/143.png"
          alt="alt"
        />
        <Box
          mt="1"
          fontWeight="semibold"
          as="h3"
          lineHeight="tight"
          noOfLines={1}
        >
          {"Pokemon Name"}
        </Box>
      </Box>
      <Tag size="lg" variant="outline" colorScheme="red">
        ATK: 1m
      </Tag>
      <Tag size="lg" variant="outline" colorScheme="blue">
        DEF: 10m
      </Tag>
      <Tag size="md" key="md" variant="outline" colorScheme="blue">
        <TagLabel>Blue</TagLabel>
      </Tag>
      <Badge variant="outline" colorScheme="green">
        Default
      </Badge>
    </div>
  );
}

export default PokemonBox;
