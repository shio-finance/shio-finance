import React from "react"
import {
  Grid,
  GridItem,
  GridItemProps,
  forwardRef,
  Flex,
  Spacer
} from '@chakra-ui/react'

import Logo from "../Logo/Logo"

const Header = forwardRef<GridItemProps, "header">(({ children, h, ...props }, ref) => {

  return (
    <GridItem
      as="header"
      width="100%"
      ref={ref}
      {...props}
    >
      <Grid
        h={h}
        templateColumns="1fr minmax(80%, 1200px) 1fr"
      >
        <GridItem
          colSpan={1}
          colStart={2}
        >
          <Flex
            h={h}
            p="2"
            align="center"
            justify="center"
          >
            <Logo mr="3" height={[`calc(${h} - 45px)`, `calc(${h} - 35px)`]} />
            <Spacer />
            {children}
          </Flex>
        </GridItem>
      </Grid>
    </GridItem>
  )
})

export default Header
