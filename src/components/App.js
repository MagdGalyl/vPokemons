import React from "react";
import { Container } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import PokemonsList from "./PokemonsList";

function App() {
  return (
    <Container maxW="full" color="black">
      <BrowserRouter>
        {/* <NavHeader /> */}
        <Container>
          <Routes>
            <Route path="/" element={<PokemonsList />} />
            {/* <Route path="/fav" element={<FavList />} /> */}
          </Routes>
        </Container>
      </BrowserRouter>
    </Container>
  );
}

export default App;
