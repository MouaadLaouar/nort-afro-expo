import { Box } from "@chakra-ui/react"
import Hero from "../../sections/Hero"
import Services from "../../sections/Services"

const Home = (): JSX.Element => {
  return (
    <Box>
      <Hero />
      <Services />
    </Box>
  )
}

export default Home