import { Container, Text, VStack, Button, HStack } from "@chakra-ui/react";
import { FaTaxi, FaUserPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl">Welcome to Taxi Booking App</Text>
        <Text>Choose your role to continue:</Text>
        <Button as={Link} to="/driver-login" colorScheme="teal" size="lg">Driver Login</Button>
        <Button as={Link} to="/customer-login" colorScheme="blue" size="lg">Customer Login</Button>
      </VStack>
    </Container>
  );
};

export default Index;