import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import {
  SimpleGrid,
  Heading,
  Text,
  useBreakpointValue,
  Stack,
  Flex,
  GridItem,
} from "@chakra-ui/react";

import { fetchPokemons } from "../actions";
import PokemonBox from "./PokemonBox";

function PokemonsList(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPokemons());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(props.pokemons.pokemonsList);

  const renderList = () => {
    return props.pokemons.pokemonsList.map((poke) => {
      const { id, base, name, img } = poke;
      const { Attack: atk, Defense: def } = base;
      const pName = name.english;
      return (
        <div key={id}>
          <PokemonBox
            id={id}
            name={pName}
            atk={atk}
            def={def}
            imgSrc={img}
            poke={poke}
          />
        </div>
      );
    });
  };

  const colSpan = useBreakpointValue({ base: 1, md: 2, lg: 3 });
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
          List of Pokemons
        </Text>
      </Heading>

      <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
        <Flex p={8} flex={1} align={"center"} justify={"center"}>
          <SimpleGrid columns={colSpan} spacing={10}>
            {renderList()}
          </SimpleGrid>
        </Flex>
      </Stack>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { pokemons: state.pokemons };
};

const mapDispatchToProps = { fetchPokemons };

export default connect(mapStateToProps, mapDispatchToProps)(PokemonsList);
