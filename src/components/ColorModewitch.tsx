import { Switch, Button, useColorMode, Text, HStack } from "@chakra-ui/react";

export default function ColorModewitch() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <HStack>
      <Switch
        size="lg"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      />
      <Text>{colorMode === "light" ? "Light" : "Dark"} Mode</Text>
    </HStack>
  );
}
