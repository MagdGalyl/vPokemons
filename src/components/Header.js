import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  Box,
  Flex,
  IconButton,
  useColorModeValue,
  Container,
  // Badge,
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

function Header(props) {
  return (
    <>
      <Container maxW="full">
        <Box bg={useColorModeValue("gray.500", "gray.900")} px={4}>
          <Flex h={14} alignItems={"center"} justifyContent={"space-between"}>
            <Link to="/">
              <Box>Pokemons</Box>
            </Link>
            {/* <Flex alignItems={"center"}>
              <Link to="/favorites">
                <IconButton
                  colorScheme="blue"
                  aria-label="Favorites Icon"
                  size="md"
                  icon={<StarIcon />}
                ></IconButton>
              </Link>
            </Flex> */}

            <Flex
              // className="item-head"
              position="relative"
              display="inline-block"
            >
              <Link to="/favorites">
                <Box
                  position="absolute"
                  right="-2"
                  top="0"
                  bg="red"
                  textAlign="center"
                  borderRadius="18"
                  color="white"
                  padding="2px 5px"
                  fontSize="12px"
                  fontWeight="bold"
                  zIndex="10"
                >
                  {Object.values(props.favorites).length}
                </Box>

                <IconButton
                  colorScheme="blue"
                  aria-label="Favorites Icon"
                  size="md"
                  icon={<StarIcon />}
                  overflow="visible"
                ></IconButton>
              </Link>
            </Flex>
          </Flex>
        </Box>
      </Container>
    </>
  );
}
const mapStateToProps = (state) => {
  return { favorites: state.favorites };
};

export default connect(mapStateToProps)(Header);
