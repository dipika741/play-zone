import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModewitch from "./ColorModewitch";

export default function NavBar() {
  return (
    <>
      <HStack justifyContent={"space-between"} pr={4}>
        <Image src={logo} boxSize="70px" />
        <Text>PLAY ZONE</Text>
        <ColorModewitch />
      </HStack>
    </>
  );
}
