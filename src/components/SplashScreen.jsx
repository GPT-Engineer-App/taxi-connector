import { Box, Text, Center } from "@chakra-ui/react";

const SplashScreen = () => {
  return (
    <Center height="100vh" bg="teal.500">
      <Box textAlign="center">
        <Text fontSize="4xl" color="white">Taxi Booking App</Text>
      </Box>
    </Center>
  );
};

export default SplashScreen;