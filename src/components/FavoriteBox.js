import React from "react";
import {
  Box,
  Image,
  // useBreakpointValue,
  Spacer,
  Flex,
  Button,
} from "@chakra-ui/react";

function FavoriteBox(props) {
  const { id, pokemonName, imgSrc, handleRemoveFavorite } = props;
  return (
    <div>
      <Flex minWidth="max-content" alignItems="center" gap="2">
        <Box p="2">
          <Image
            boxSize="40%"
            objectFit="cover"
            src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/143.png"
            // {imgSrc}
            alt={pokemonName}
          />
        </Box>
        <Spacer />
        <Button colorScheme="red">Remove</Button>
      </Flex>
      
    </div>
  );
}

export default FavoriteBox;
