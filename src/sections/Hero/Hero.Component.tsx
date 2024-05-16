import { Box, Text } from "@chakra-ui/react";
import { Style } from "./Hero.Style";

const Hero = (): JSX.Element => {
  return (
    <Box id="hero" sx={Style.Hero}>
      <Text sx={Style.Text}>Leader de l’export en Algérie</Text>
    </Box>
  );
};

export default Hero;
