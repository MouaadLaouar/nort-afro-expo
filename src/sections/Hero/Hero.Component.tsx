import { Box, Text } from "@chakra-ui/react";
import { Style } from "./Hero.Style";
import heroImage from "../../assets/hero.png";

const Hero = (): JSX.Element => {
    return (
        <Box
            id="hero"
            sx={Style.Hero}
            backgroundImage={`url(${heroImage})`}
            backgroundSize="cover"
            backgroundPosition="center"
        >
            <div className=" w-full  sm:w-1/5">
                <Text sx={Style.Text}>Leader de l’export en Algérie</Text>
            </div>
        </Box>
    );
};

export default Hero;
