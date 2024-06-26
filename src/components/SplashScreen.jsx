import { Box, Center, Image } from "@chakra-ui/react";
import splashImage from "../../public/splash-image.png";

const SplashScreen = () => {
  return (
    <Center height="100vh" bg="teal.500">
      <Box textAlign="center">
        <Image src={splashImage} alt="Splash Screen" />
      </Box>
    </Center>
  );
};

export default SplashScreen;