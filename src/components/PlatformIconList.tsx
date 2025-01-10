import { HStack, Icon, Text } from "@chakra-ui/react";
import React from "react";
import { Platform } from "../hooks/useGames";
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { IconType } from "react-icons/lib/iconBase";

interface Props {
  platforms: Platform[];
}
export default function PlatformIconList({ platforms }: Props) {
  const iconMap: { [key: string]: IconType } = {
    adroid: FaAndroid,
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    iso: MdPhoneIphone,
    web: BsGlobe,
  };
  return (
    <>
      <HStack marginY={1}>
        {platforms.map((platform) => (
          <Icon color="gray.500" as={iconMap[platform.slug]} />
        ))}
      </HStack>
    </>
  );
}
