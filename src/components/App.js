import React from "react";
import { Container, useColorModeValue } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import PokemonsList from "./PokemonsList";
import FavoritesList from "./FavoritesList";
import Header from "./Header";

function App() {
  return (
    <BrowserRouter>
      <Container
        maxW="full"
        m={0}
        p={0}
        bg={useColorModeValue("gray.500", "gray.900")}
      >
        <Header />
      </Container>
      <Container maxW="full" bg="gray.300">
        <Routes>
          <Route path="/" element={<PokemonsList />} />
          <Route path="/favorites" element={<FavoritesList />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
