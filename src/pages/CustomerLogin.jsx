import { Container, Text, VStack, Input, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const CustomerLogin = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl">Customer Login</Text>
        <Input placeholder="Email" size="lg" />
        <Input placeholder="Password" type="password" size="lg" />
        <Button colorScheme="blue" size="lg">Login</Button>
        <Button as={Link} to="/customer-signup" colorScheme="gray" size="lg">Sign Up</Button>
      </VStack>
    </Container>
  );
};

export default CustomerLogin;