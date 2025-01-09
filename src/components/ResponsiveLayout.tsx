import React from "react";
import { Grid, GridItem, Image, Show } from "@chakra-ui/react";
import NavBar from "./NavBar";

export default function ResponsiveLayout() {
  return (
    <div>
      <Grid
        templateAreas={{
          base: `"nav main"`,
          lg: `"nav nav" "aside main" `,
        }}
      >
        <GridItem pl="2" area={"nav"}>
          <NavBar />
        </GridItem>
        <Show above="lg">
          <GridItem pl="2" bg="pink.300" area={"aside"}>
            aside
          </GridItem>
        </Show>

        <GridItem pl="2" bg="green.300" area={"main"}>
          Main
        </GridItem>
      </Grid>
    </div>
  );
}
