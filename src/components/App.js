import React from "react";
import { Container } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import PokemonsList from "./PokemonsList";
// import DelLaterzzZZzz from "./DelLaterzzZZzz";

function App() {
  return (
    <Container maxW="full" bg="gray.300">
      <BrowserRouter>
        {/* <NavHeader /> */}

        <Routes>
          <Route path="/" element={<PokemonsList />} />
          {/* <Route path="/fav" element={<FavList />} /> */}
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;
