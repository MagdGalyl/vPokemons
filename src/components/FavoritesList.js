import React from "react";
import { connect } from "react-redux";
import {
  // SimpleGrid,
  Heading,
  Text,
  useBreakpointValue,
  // Stack,
  Flex,
  Button,
  Center,
  // GridItem,
  VStack,
  StackDivider,
  // Box,
  Container,
} from "@chakra-ui/react";

import { removeFavorite, rmvAllFavorites } from "../actions";
import FavoriteBox from "./FavoriteBox";

function FavoritesList(props) {
  const handleRemoveFavorite = (id) => {
    props.removeFavorite(id);
  };

  const renderFavList = () => {
    return Object.values(props.favorites).map((pokemon) => {
      const { id, name, img } = pokemon;
      const pokemonName = name.english;
      return (
        <div key={id}>
          <FavoriteBox
            id={id}
            pokemonName={pokemonName}
            imgSrc={img}
            pokemon={pokemon}
            handleRemoveFavorite={handleRemoveFavorite}
          />
        </div>
      );
    });
  };

  return (
    <div>
      <Container maxW="4xl">
        <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
          <Text
            as={"span"}
            position={"relative"}
            _after={{
              content: "''",
              width: "full",
              height: useBreakpointValue({ base: "20%", md: "30%" }),
              position: "absolute",
              bottom: 1,
              left: 0,
              bg: "red.400",
              zIndex: -1,
            }}
          >
            Favorites
          </Text>
        </Heading>

        <VStack
          divider={<StackDivider borderColor="gray.400" />}
          spacing={0}
          align="center"
          direction={{ base: "row", md: "row" }}
          maxW="full"
          bg="white"
        >
          {renderFavList()}
        </VStack>

        <Flex p={8} flex={1} align={"center"} justify={"center"}>
          <Button
            w={"full"}
            maxW={"md"}
            colorScheme="red"
            variant="outline"
            bg="whiteAlpha.900"
            _hover={{ bg: "red", color: "white" }}
            onClick={() => {
              props.rmvAllFavorites();
            }}
          >
            <Center>
              <Text>Remove All</Text>
            </Center>
          </Button>
        </Flex>
      </Container>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { favorites: state.favorites };
};

const mapDispatchToProps = { removeFavorite, rmvAllFavorites };

export default connect(mapStateToProps, mapDispatchToProps)(FavoritesList);
