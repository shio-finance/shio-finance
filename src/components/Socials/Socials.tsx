import React from "react"
import { Link, Icon } from "@chakra-ui/react"
import { FaGithub, FaMedium, FaTelegram, FaTwitter } from "react-icons/fa"
import GitbookIcon from "../GitbookIcon/GitbookIcon"
import DiscordIcon from "../DiscordIcon/DiscordIcon"

const socialStyle = {
  px: "3",
  opacity: ".7",
  _hover: {opacity: "1"}
}

const Socials = (() => {

  return (
    <>
      <Link href="https://twitter.com/shio_finance" isExternal {...socialStyle}><Icon as={FaTwitter} boxSize="20px" /></Link>
      <Link href="https://medium.com/@shio.finance" isExternal {...socialStyle}><Icon as={FaMedium} boxSize="20px" /></Link>
      <Link href="https://discord.gg/UV7Zce6kwX" mt={["0.5", "1"]} isExternal {...socialStyle}><Icon as={DiscordIcon} boxSize="20px" /></Link>
      <Link href="https://t.me/shio_finance" isExternal {...socialStyle}><Icon as={FaTelegram} boxSize="20px" /></Link>
      <Link href="http://github.com/shio-finance" isExternal {...socialStyle}><Icon as={FaGithub} boxSize="20px" /></Link>
      <Link href="https://docs.shio.finance" isExternal {...socialStyle}><Icon as={GitbookIcon} boxSize="20px" /></Link>
    </>
  )
})

export default Socials
