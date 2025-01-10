import React from "react";
import { Grid, GridItem, Image, Show } from "@chakra-ui/react";
import NavBar from "./NavBar";
import GenreListAside from "./GenreListAside";

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
          <GridItem pl="2" bg="red.300" area={"aside"}>
            <GenreListAside />
          </GridItem>
        </Show>

        <GridItem pl="2" bg="green.300" area={"main"}>
          Main
        </GridItem>
      </Grid>
    </div>
  );
}
