import React from "react";
import { connect } from "react-redux";
import {
  SimpleGrid,
  Heading,
  Text,
  useBreakpointValue,
  Stack,
  Flex,
  Button,
  Center,
  // GridItem,
  VStack,
  StackDivider,
  Box,
} from "@chakra-ui/react";

import { removeFavorite } from "../actions";
import FavoriteBox from "./FavoriteBox";

function FavoritesList(props) {
  // console.log(props, "props");
  // console.log(props.favorites, "favoritesList OOP");

  // const handleRemoveFavorite = (id) => {
  //   // let favoritePokemon = { [id]: pokemon };
  //   props.addFavorite(props.id);
  // };

  const renderFavList = () => {
    return Object.values(props.favorites).map((pokemon) => {
      const { id, name, img } = pokemon;
      const pokemonName = name.english;
      return (
        <div key={id}>
          <box>
            <FavoriteBox
              id={id}
              pokemonName={pokemonName}
              imgSrc={img}
              pokemon={pokemon}
              // handleRemoveFavorite={handleRemoveFavorite}
            />
          </box>
        </div>
      );
    });
  };

  // const colSpan = useBreakpointValue({ base: 1, md: 1, lg: 1 });
  return (
    <div>
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

      {/* <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
        <Flex p={8} flex={1} align={"center"} justify={"center"}>
          <SimpleGrid columns={colSpan} spacing={5}>
          {renderFavList()}
          </SimpleGrid>
        </Flex>
      </Stack>

      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Button
          w={"full"}
          maxW={"lg"}
          colorScheme="red"
          variant="outline"
          bg="whiteAlpha.900"
          _hover={{ bg: "red.200" }}
          // onClick={onFavoriteClick}
        >
          <Center>
            <Text>Remove All</Text>
          </Center>
        </Button>
      </Flex> */}

      <VStack
        divider={<StackDivider borderColor="gray.200" />}
        spacing={4}
        align="stretch"
        direction={{ base: "row", md: "row" }}
      >
        {renderFavList()}

        <Flex p={8} flex={1} align={"center"} justify={"center"}>
          <Button
            w={"full"}
            maxW={"lg"}
            colorScheme="red"
            variant="outline"
            bg="whiteAlpha.900"
            _hover={{ bg: "red.200" }}
            // onClick={onFavoriteClick}
          >
            <Center>
              <Text>Remove All</Text>
            </Center>
          </Button>
        </Flex>
      </VStack>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { favorites: state.favorites };
};

const mapDispatchToProps = { removeFavorite };

export default connect(mapStateToProps, mapDispatchToProps)(FavoritesList);
