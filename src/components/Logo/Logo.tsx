import React from "react"
import { useColorModeValue, Image, ImageProps, Flex } from "@chakra-ui/react"
import logo from "./logoWithText.png"
import logoWhite from "./logoWithTextWhite.png"

const Logo = (({ ...props }: ImageProps) => {
  const image = useColorModeValue(logo, logoWhite)

  return (
    <Flex alignItems="center">
      <Image src={image} {...props} />
      {/* <Heading as="span" fontSize="5xl" fontWeight="normal" mt="2">潮 SHIO</Heading> */}
    </Flex>
  )
})

export default Logo
