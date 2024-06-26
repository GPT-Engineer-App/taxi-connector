import { Container, Text, VStack, Input, Button } from "@chakra-ui/react";

const CustomerSignup = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl">Customer Sign Up</Text>
        <Input placeholder="Name" size="lg" />
        <Input placeholder="Email" size="lg" />
        <Input placeholder="Phone Number" size="lg" />
        <Input placeholder="Password" type="password" size="lg" />
        <Button colorScheme="blue" size="lg">Sign Up</Button>
      </VStack>
    </Container>
  );
};

export default CustomerSignup;