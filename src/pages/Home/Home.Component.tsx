import { Box } from "@chakra-ui/react";
import Hero from "../../sections/Hero";
import Services from "../../sections/Services";
import About from "../../sections/Fourth";
import Footer from "../../components/Footer";
import Partners from "../../sections/Partners";

const Home = (): JSX.Element => {
    return (
        <Box>
            <Hero />
            <Services />
            <About />
            <Partners />
            <Footer />
        </Box>
    );
};

export default Home;
