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
  console.log(Object.values(props.favorites).length);
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

            {/* <Box position="relative">
              <Link to="/favorites">
                <Badge
                  colorScheme="red"
                  position="absolute"
                  top="0%"
                  right="0%"
                  left="80%"
                  bottom="70%"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  zIndex="99"
                >
                  888
                </Badge>
                <IconButton
                  colorScheme="blue"
                  aria-label="Favorites Icon"
                  size="md"
                  icon={<StarIcon />}
                ></IconButton>
              </Link>
            </Box> */}

            <div className="badge-block">
              <div className="skype svg_icons"></div>
              <span className="e-badge e-badge-success e-badge-overlap e-badge-notification">
                99+
              </span>
            </div>
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
