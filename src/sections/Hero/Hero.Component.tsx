import { Grid, Text } from "@chakra-ui/react";
import { Style } from "./Hero.Style";

const Hero = (): JSX.Element => {
    return (
        <Grid
            id="hero"
            display="grid"
            gridGap={2}
            sx={Style.Hero}
            className=" grid grid-cols-12"
        >
            <div className="col-span-4">
                {" "}
                <Text sx={Style.Text}>Leader de l’export en Algérie</Text>
            </div>
        </Grid>
    );
};

export default Hero;
