import { Container, Text, VStack, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const MainActivity = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl">Welcome to the Main Activity Page</Text>
        <Text>This is the main activity page after signing up.</Text>
        <Button as={Link} to="/" colorScheme="teal" size="lg">Go to Home</Button>
      </VStack>
    </Container>
  );
};

export default MainActivity;