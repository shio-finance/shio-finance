import React from "react"
import {
  ChakraProvider,
  Grid,
  GridItem,
  GridItemProps,
  extendTheme,
  forwardRef,
  useMediaQuery,
  Heading,
  Text,
  Center,
  VStack,
  Image,
  Container,
  Flex,
  Button
} from "@chakra-ui/react"

import ColorModeSwitcher from "./components/ColorModeSwitcher"
import Header from "./components/Header/Header"
import Socials from "./components/Socials/Socials"

import waves from "./img/waves.png"

const theme = extendTheme({
  shadows: {
    outline: ""
  },
  fonts: {
    heading: "modula-sans",
    body: "hero-new"
  },
  colors: {
    white: "#F3F6Fd",
    black: "#050e21"
  }
})

const DApp = forwardRef<GridItemProps, "main">((props, ref) => {

  const headerHeight = "5rem"
  const [isMobile] = useMediaQuery("(max-width: 425px)")

  return (
    <ChakraProvider theme={theme}>
      <Grid
        minH="100vh"
        templateRows={`${headerHeight} 1fr 50px`}
        templateColumns="1fr minmax(80%, 1200px) 1fr"
      >
        <Header colSpan={3} h={headerHeight}>
          {!isMobile && <Socials />}
          <Button disabled ml="3">Coming Soon</Button>
        </Header>
        <GridItem
          as="main"
          colSpan={1}
          colStart={2}
          ref={ref}
          {...props}
        >
          <Center h="100%">
            <VStack mt={`-${headerHeight}`}>
              <Container centerContent>
                <Heading fontWeight="normal" fontSize="9xl" lineHeight="1">SHIO</Heading>
                <Text fontWeight="normal" fontSize="xl" letterSpacing="1.6px" textAlign="center">Decentralised Crypto Index Pools</Text>
                {isMobile && <Flex mt="3"><Socials /></Flex>}
              </Container>
            </VStack>
          </Center>
        </GridItem>
      </Grid>
      <ColorModeSwitcher position="fixed" right="3" bottom="3" zIndex="2" />
      <Image src={waves} position="fixed" right={["-50%", "0"]} bottom="0" maxW={["200%", "100%"]} />
    </ChakraProvider>
  )
})

export default DApp
