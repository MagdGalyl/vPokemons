import React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Flex,
  IconButton,
  useColorModeValue,
  Container,
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

function Header() {
  return (
    <>
      <Container maxW="full">
        <Box bg={useColorModeValue("gray.500", "gray.900")} px={4}>
          <Flex h={14} alignItems={"center"} justifyContent={"space-between"}>
            <Link to="/">
              <Box>Pokemons</Box>
            </Link>
            <Flex alignItems={"center"}>
              <Link to="/favorites">
                <IconButton
                  colorScheme="blue"
                  aria-label="Favorites Icon"
                  size="md"
                  icon={<StarIcon />}
                />
              </Link>
            </Flex>
          </Flex>
        </Box>
      </Container>
    </>
  );
}
export default Header;
