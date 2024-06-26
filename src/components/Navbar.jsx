import { Box, Flex, Button, useColorModeValue } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <Box>Taxi Booking App</Box>
        <Flex alignItems={"center"}>
          <Button as={Link} to="/" variant={"solid"} colorScheme={"teal"} size={"sm"} mr={4}>
            Home
          </Button>
          <Button as={Link} to="/driver-login" variant={"solid"} colorScheme={"teal"} size={"sm"} mr={4}>
            Driver Login
          </Button>
          <Button as={Link} to="/map-view" variant={"solid"} colorScheme={"green"} size={"sm"} mr={4}>
            View Map
          </Button>
          <Button as={Link} to="/customer-login" variant={"solid"} colorScheme={"blue"} size={"sm"}>
            Customer Login
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;