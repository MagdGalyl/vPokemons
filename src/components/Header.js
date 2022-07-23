import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  Box,
  Flex,
  IconButton,
  useColorModeValue,
  Container,
  Badge,
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

            <Flex className="item-head">
              <Link to="/favorites">
                <span className="notify-badge-head">
                  {Object.values(props.favorites).length}
                </span>

                <IconButton
                  colorScheme="blue"
                  aria-label="Favorites Icon"
                  size="md"
                  icon={<StarIcon />}
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
