import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import { SimpleGrid, Heading } from "@chakra-ui/react";

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

  return (
    <div>
      <Heading as="h1" size="4xl" noOfLines={1}>
        List of Pokemons
      </Heading>

      <SimpleGrid columns={3} spacing={10}>
        {renderList()}
      </SimpleGrid>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { pokemons: state.pokemons };
};

const mapDispatchToProps = { fetchPokemons };

export default connect(mapStateToProps, mapDispatchToProps)(PokemonsList);
