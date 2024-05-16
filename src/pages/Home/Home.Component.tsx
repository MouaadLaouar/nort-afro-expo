import { Box } from "@chakra-ui/react"
import Hero from "../../sections/Hero"
import Services from "../../sections/Services"
import Fourth from "../../sections/Fourth"

const Home = (): JSX.Element => {
  return (
    <Box>
      <Hero />
      <Services />
      <Fourth />
    </Box>
  )
}

export default Home