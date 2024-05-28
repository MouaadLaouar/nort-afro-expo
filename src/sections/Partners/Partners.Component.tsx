import { Box, Text, Image, SimpleGrid } from "@chakra-ui/react";
import { Style } from "./Partners.Style";
import { Cards } from "./Partners.Helper";
import { Link } from "react-router-dom";
import "animate.css";

const Partners = (): JSX.Element => {
    return (
        <Box id="partners" sx={Style.Services}>
            <Text sx={Style.Text}>Nos Branches</Text>
            <SimpleGrid
                columns={{ base: 1, sm: 2 }}
                sx={Style.Cards}
                spacing={12}
                gap={12}
            >
                {Cards.map((card) => (
                    <Link key={card.id} to={`${card.href}`}>
                        <Box sx={Style.Card} w="250px">
                            <Image
                                sx={Style.Pic}
                                src={card.picture}
                                alt={card.title}
                                rounded="lg"
                           
                            />

                            <Text sx={Style.Title}>{card.title}</Text>
                            <Text sx={Style.Desc}>{card.description}</Text>
                        </Box>
                    </Link>
                ))}
            </SimpleGrid>
        </Box>
    );
};

export default Partners;
