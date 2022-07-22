import React from "react";
import { Box, Image, Flex, Tag, Button, Text, Center } from "@chakra-ui/react";

function PokemonBox() {
  return (
    <Box
      bg="white"
      w="100%"
      p={4}
      color="black"
      // borderWidth="1px"
      // borderRadius="lg"
      // overflow="hidden"
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
      <Flex p={1} flex={1} align={"center"} justify={"center"}>
        <Tag size="lg" variant="outline" colorScheme="red" mr={1}>
          ATK: 1m
        </Tag>
        <Tag size="lg" variant="outline" colorScheme="blue">
          DEF: 10m
        </Tag>
      </Flex>
      <Button w={"full"} maxW={"md"} colorScheme="blue">
        <Center>
          <Text>ADD TO FAVORITES</Text>
        </Center>
      </Button>
    </Box>
  );
}

export default PokemonBox;
