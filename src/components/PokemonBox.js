import React from "react";
import { connect } from "react-redux";
import { Box, Image, Flex, Tag, Button, Text, Center } from "@chakra-ui/react";

function PokemonBox(props) {
  const { id, pokemonName, attack, defense, imgSrc, handleAddFavorite } = props;

  const onFavoriteClick = (pokemon, id) => {
    handleAddFavorite(props.id, props.pokemon);
  };

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
        // src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/143.png"
        src={imgSrc}
        alt={pokemonName}
      />
      <Box
        mt="1"
        fontWeight="semibold"
        as="h3"
        lineHeight="tight"
        noOfLines={1}
      >
        {pokemonName}
      </Box>
      <Flex p={1} flex={1} align={"center"} justify={"center"}>
        <Tag
          size="lg"
          variant="outline"
          colorScheme="red"
          mr={1}
          borderRadius="full"
        >
          Attack: {attack}
        </Tag>
        <Tag size="lg" variant="outline" colorScheme="blue" borderRadius="full">
          Defense: {defense}
        </Tag>
      </Flex>
      <Button
        w={"full"}
        maxW={"md"}
        colorScheme="blue"
        onClick={onFavoriteClick}
        isDisabled={props.favorites.hasOwnProperty(id) ? `disabled` : null}
      >
        <Center>
          <Text>ADD TO FAVORITES</Text>
        </Center>
      </Button>
    </Box>
  );
}
const mapStateToProps = (state) => {
  return { favorites: state.favorites };
};

// const mapDispatchToProps = {  };

export default connect(mapStateToProps)(PokemonBox);
