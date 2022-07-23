import React from "react";
import {
  Box,
  Image,
  // useBreakpointValue,
  Spacer,
  Flex,
  Button,
  Heading,
} from "@chakra-ui/react";

function FavoriteBox(props) {
  const { pokemonName, imgSrc, handleRemoveFavorite } = props;

  const onFavoriteRemoveClick = () => {
    handleRemoveFavorite(props.id);
  };
  return (
    <div>
      <Flex
        p={2}
        flex={1}
        align={"center"}
        justify={"center"}
        // spacing="18px"
        direction={{ base: "column", md: "row" }}
      >
        <Box maxW="18%">
          <Image
            // boxSize="100%"
            objectFit="cover"
            // src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/143.png"
            src={imgSrc}
            alt={pokemonName}
          />
        </Box>
        <Box>
          <Heading as="h3" size="lg">
            {pokemonName}
          </Heading>
        </Box>
        <Spacer />
        <Box>
          <Button
            colorScheme="red"
            variant="ghost"
            onClick={onFavoriteRemoveClick}
          >
            Remove
          </Button>
        </Box>
      </Flex>
    </div>
  );
}

export default FavoriteBox;
