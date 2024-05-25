import { Box, Text, Image, SimpleGrid } from "@chakra-ui/react";
import { Style } from "./Services.Style";
import { Cards } from "./Services.Helper";
import { Link } from "react-router-dom";

const Services = (): JSX.Element => {
  return (
    <Box id="services" sx={Style.Services}>
      <Text sx={Style.Text}>Nos Services</Text>
      <SimpleGrid columns={{ base: 3, md: 4 }} sx={Style.Cards} spacing={2}>
        {Cards.map((card) => (
          <Link key={card.id} to={`service/${card.href}`}>
            <Box sx={Style.Card}>
              <Image sx={Style.Pic} src={card.picture} alt={card.title} />

              <Text sx={Style.Title}>{card.title}</Text>
              <Text sx={Style.Desc}>{card.description}</Text>
            </Box>
          </Link>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Services;