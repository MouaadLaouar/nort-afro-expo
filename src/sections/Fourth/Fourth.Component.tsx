import { Box, Text } from "@chakra-ui/react";
import { Style } from "./Fourth.Style";

const About = (): JSX.Element => {
    return (
        <Box sx={Style.Fourth} id="about" >
            <Text sx={Style.Title}>Pourquoi nous choisir ?</Text>
            <Text>
                Notre entreprise d'exportation se distingue par la qualité et la
                fiabilité de ses produits : bois, ciment, clinker
                électroménagers. Et d’autre produit de construction Nous
                garantissons des produits de première qualité, respectant les
                normes internationales les plus strictes, pour assurer la
                satisfaction totale de nos clients. Nos processus logistiques
                optimisés garantissent des livraisons ponctuelles et fiables à
                travers le monde. Avec plusieurs années d'expérience dans le
                secteur, notre équipe d'experts s'engage à fournir un service
                client exceptionnel et à répondre efficacement à tous vos
                besoins. Grâce à des relations de confiance avec des partenaires
                de premier plan, nous offrons des produits compétitifs et des
                solutions logistiques efficaces. Conscients de notre
                responsabilité environnementale, nous adoptons des pratiques
                durables dans tous nos processus d'exportation.
            </Text>
        </Box>
    );
};

export default About;
